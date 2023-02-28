import React, { useMemo, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    VisualNovelContainer,
    DialogueBox,
    DialogueImg,
    DialogueMessageContainer,
    SpeakerContainer,
    ExitButton,
    NextButton,
    TermContainer,
} from './styles.tsx';
import LEVEL1 from '../innerComp/minigames/data/stories/Level1';
import NetMinigame from '../innerComp/minigames/data/games/NetMiniGame';

function VisualNovel(props) {
    const  [loadGame, setLoadGame] = useState(false);
    const { isFlapGuide, setIsFlapGuide } = props;
    let currentScene = LEVEL1['pancakeIntro'];

    useEffect(() => {
        console.log(isFlapGuide);
        if (isFlapGuide) {
            clearSprites();
            currentScene = LEVEL1['sallyTalking'];
            buildDialogue();
        } else {
            currentScene = LEVEL1['pancakeIntro'];
        }
    }, [isFlapGuide]);

    console.log(currentScene);

    let dialoguePosition = 0;
    const navigate = useNavigate();

    const TALK_SPEED = 10;
    let speechTimer = 0;

    if (loadGame) {
        return <NetMinigame />
    }

    function nextScene(scene) {
        if (scene === undefined) {
            console.log('Load Game');
            setLoadGame(true);
        }
        
        if (scene.background) {
            document.getElementById('visual-novel-container').style.backgroundImage = `url(/sprites/bg-${scene.background}.png)`;
        }

        createBaseFrame(scene.baseFrame);
        createImage(scene.frames);

        document.querySelector('.message-container p').textContent = scene.dialogue[dialoguePosition].message;
        if (currentScene.dialogue[dialoguePosition].speaker.length > 0) {
            document.querySelector('.speaker-container span').textContent = currentScene.dialogue[dialoguePosition].speaker;
        }

        if (scene.dialogue[dialoguePosition].type === 'nospeaker') {
            document.getElementById('dialogueBox').setAttribute('src', '/sprites/misc-textbubble-nospeaker.png');
        } else {
            if (scene.dialogue[dialoguePosition].type === 'left') {
                document.getElementById('dialogueBox').setAttribute('src', '/sprites/misc-textbubble-left.png');
            } else {
                document.getElementById('dialogueBox').setAttribute('src', '/sprites/misc-textbubble-right.png');
            }
        }
    }

    function clearSprites() {
        let sprites = document.getElementsByClassName('sprite');
        while(sprites[0]) {
            sprites[0].parentNode.removeChild(sprites[0]);
        };
    }

    function createBaseFrame(baseFrame) {
        if (baseFrame) {
            return baseFrame.map((base) => {
                if (base && baseFrame.length > 0) {
                    baseFrame.forEach((sprite, i) => {
                        const newSprite = document.createElement('img');

                        newSprite.setAttribute('src' ,`/sprites/sprite-${base.image}.png`);
                        newSprite.setAttribute('width', `${base.size}%`);
                        newSprite.setAttribute('class', 'sprite');

                        if (base.image === 'pancake-flapjack-octopus') {
                            newSprite.setAttribute('style', `position: absolute; z-index: 3; left: ${base.x}%; top: ${base.y}%`);
                        } else {
                            newSprite.setAttribute('style', `position: absolute; left: ${base.x}%; top: ${base.y}%`);
                        }

                        let spriteContainer = document.getElementById('dialogue');
                        spriteContainer.appendChild(newSprite);
                    });
                }
            });
        }
    }

    function createImage(frames) {
        if (frames) {
            return frames.map((frame) => {
                if (frame && frame.length > 0) {
                    return frame.map((sprite) => {
                        return (
                            <img src={`/sprites/sprite-${sprite.image}.png`} style={{width: `${sprite.size}%`, position: 'absolute', top: `${sprite.y}%`, left: `${sprite.x}%`}} className='sprite'/>
                        )
                    });
                }
            });
        }
    }

    // scenes.map((scene) => {
    //     let current = LEVEL1[scene];
    //     currentScene = current;
    // });

    // function conversation(dialogue) {
    //     clearInterval(speechTimer);
    //     let message = document.querySelector('.message-container p');
    //     message.textContent = '';
    //     speechTimer = setInterval(function() {
    //         if (dialogue.length === 0) {
    //           clearInterval(speechTimer);
    //         } else {
    //           message.textContent = message.textContent + dialogue[0];
    //           dialogue = dialogue.slice(1, dialogue.length);
    //         }
    //       }, TALK_SPEED);
    // }

    function buildTerm() {
        return (
            <TermContainer>

            </TermContainer>
        );
    }

    function buildDialogue() {
        if (document.getElementById('dialogue')) {
            document.getElementById('dialogue').innerHTML = '';
            document.getElementById('dialogue').classList.remove('vn-decision');
        }

        // if (isFlapGuide) {
        //     currentScene = LEVEL1['sallyTalking'];
        // } else {
        //     currentScene = LEVEL1['pancakeIntro'];
        // }
        console.log(currentScene.dialogue[dialoguePosition].message);
        console.log(dialoguePosition);

        let type = currentScene.dialogue[dialoguePosition].type;
        let image = '';
        if (type === 'nospeaker') {
            image = '/sprites/misc-textbubble-nospeaker.png';
        } else if (type === 'left') {
            image = '/sprites/misc-textbubble-left.png';
        } else {
            image = '/sprites/misc-textbubble-right.png';
        }

        return (
            <>
                <DialogueImg src={image} alt="Text bubble background" className='textBox' id="dialogueBox"/>
                <DialogueMessageContainer className="message-container">
                    <p>{isFlapGuide ? 'Hi! I’m Sally the Salmon! I’m a Chum Salmon.' : currentScene.dialogue[dialoguePosition].message}</p>
                </DialogueMessageContainer>
                {createBaseFrame(currentScene.baseFrame)}
                {createImage(currentScene.frames)}
                {
                    currentScene.dialogue[dialoguePosition].speaker.length > 0 &&
                        <SpeakerContainer className="speaker-container">
                            <span>{currentScene.dialogue[dialoguePosition].speaker}</span>
                        </SpeakerContainer>
                }
            </>
        );
    }

    function buildChoice(nextScene) {
        let dialogue = document.getElementById('dialogue');
        dialogue.innerHTML = '';

        let buttons = Object.keys(nextScene).map((choice) => {
            return (
                `
                    <button class='choiceButton' key=${nextScene[choice]}>
                        ${choice}
                    </button>
                `
            );
        }).join('');
        dialogue.classList.add('vn-decision');
        dialogue.innerHTML = buttons;
    }

    function buildVisuals() {
        return (
            <VisualNovelContainer id='visual-novel-container' backgroundImage={`url(/sprites/bg-${currentScene.background}.png)`}>
                <ExitButton onClick={() => navigate('/')}>Exit</ExitButton>
                <NextButton className='nextBtn' onClick={() => {
                    if (dialoguePosition < currentScene.dialogue.length - 1) {
                        dialoguePosition++;
                        if (currentScene.dialogue[dialoguePosition].speaker.length > 0) {
                            document.querySelector('.speaker-container span').textContent = currentScene.dialogue[dialoguePosition].speaker;
                        }
                        document.querySelector('.message-container p').textContent = currentScene.dialogue[dialoguePosition].message;
                    } else {
                        dialoguePosition = 0;
                        if (typeof currentScene.nextScene === 'object') {
                            // Display the choice scene
                            buildChoice(currentScene.nextScene);
                            document.querySelectorAll('.choiceButton').forEach((button) => {
                                button.addEventListener('click', (e) => {
                                    currentScene = LEVEL1[e.target.getAttribute('key')];
                                    buildDialogue();
                                    nextScene(currentScene);
                                });
                            });
                        } else if (currentScene.nextScene === 'pancakeGuide') {
                            navigate('/flapguide');
                        } else {
                            // Display the next scene
                            clearSprites();
                            console.log(currentScene);
                            currentScene = LEVEL1[currentScene.nextScene];
                            nextScene(currentScene);
                        }
                    }
                }}>
                    Next
                </NextButton>
                {buildDialogue()}
            </VisualNovelContainer>
        )
    }

    return (
        <div>
            {buildVisuals()}
            <DialogueBox id='dialogue' className={`dialogue-${currentScene.dialogue[dialoguePosition].type}`}>
            </DialogueBox>
        </div>
    );
}

export default VisualNovel;


