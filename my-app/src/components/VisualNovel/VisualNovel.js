import React, { useState, useEffect } from 'react';
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
import TERMS from './Terms';

function VisualNovel(props) {
    const [loadGame, setLoadGame] = useState(false);
    const { isFlapGuide, setIsFlapGuide, isGameComplete, setIsGameComplete } = props;
    let currentScene = LEVEL1['pancakeIntro'];

    useEffect(() => {
        if (isFlapGuide && !isGameComplete) {
            clearSprites();
            currentScene = LEVEL1['sallyTalking'];
            buildDialogue();
        } else if (isGameComplete) {
            clearSprites();
            currentScene = LEVEL1['postGame'];
            buildDialogue();
        } else {
            currentScene = LEVEL1['pancakeIntro'];
        }
        document.getElementsByClassName('.nextBtn').disabled = false;
    }, [isFlapGuide, isGameComplete]);

    let dialoguePosition = 0;
    const navigate = useNavigate();

    const TALK_SPEED = 10;
    let speechTimer = 0;

    function capitalizeFirstLetter(string) {
        console.log(string);
        // if (typeof string === 'object') {
        //     return string.map((str) => str.charAt(0).toUpperCase() + string.slice(1));
        // } else {
            return string.charAt(0).toUpperCase() + string.slice(1);
        // }
    }

    function nextScene(scene) {
        if (scene === undefined) {
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

        if (scene.dialogue[dialoguePosition].keyword) {
            if (typeof scene.dialogue[dialoguePosition].keyword === 'object') {
                scene.dialogue[dialoguePosition].keyword.map((keyword) => buildTerm(keyword));
            } else {
                buildTerm(scene.dialogue[dialoguePosition].keyword);
                console.log('has keyword');
            }
        }
    }

    function clearSprites() {
        let sprites = document.getElementsByClassName('sprite');
        while (sprites[0]) {
            sprites[0].parentNode.removeChild(sprites[0]);
        };
    }

    function createBaseFrame(baseFrame) {
        if (baseFrame) {
            return baseFrame.map((base) => {
                if (base && baseFrame.length > 0) {
                    baseFrame.forEach((sprite, i) => {
                        const newSprite = document.createElement('img');

                        newSprite.setAttribute('src', `/sprites/sprite-${base.image}.png`);
                        newSprite.setAttribute('width', `${base.size}%`);
                        newSprite.setAttribute('class', 'sprite');

                        if (base.image === 'pancake-flapjack-octopus') {
                            newSprite.setAttribute('style', `position: absolute; z-index: 3; left: ${base.x}%; top: ${base.y}%; transform: scaleX(${base.flipX ? -1 : 1});`);
                        } else {
                            newSprite.setAttribute('style', `position: absolute; left: ${base.x}%; top: ${base.y}%; transform: scaleX(${base.flipX ? -1 : 1});`);
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
                console.log(frame);
                if (frame && frame.length > 0) {
                    return frame.map((sprite) => {
                        return (
                            <img
                                src={`./sprites/sprite-${sprite.image}.png`}
                                style={{
                                    width: `${sprite.size}%`,
                                    position: 'absolute',
                                    top: `${sprite.y}%`,
                                    left: `${sprite.x}%`,
                                    transform: `scaleX(${sprite.flipX ? -1 : 1}` ,
                                    maxHeight: '100vh'
                                }}
                                className='sprite'
                            />
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

    // function buildMultipleTerms(keywords) {
    //     console.log(keywords);
    //     let dialogue = document.querySelector('.message-container p');
    //     let message = currentScene.dialogue[dialoguePosition].message;
    //     let keywordPosition = 0;
    //     let keyword = keywords[keywordPosition];
    //     let popups = keywords.map((keyword) => {
    //         `
    //             <div class="popup">
    //                 ${keyword}
    //                 <div class="keyword">
    //                     <h4>${capitalizeFirstLetter(keyword)}</h4>
    //                     <img src='./imgs/audio.png' alt='Audio symbol' />
    //                 </div>
    //                 <p>${TERMS[keyword]}</p>
    //             </div>
    //         `
    //     });
    //     console.log(popups);
    // }

    function buildTerm(keyword) {
        let dialogue = document.querySelector('.message-container p');
        let message = currentScene.dialogue[dialoguePosition].message;
        message = message.replace(keyword,
            `<div class="popup">
                ${keyword}
                <div class="keyword">
                    <div>
                        <h4>${capitalizeFirstLetter(keyword)}</h4>
                        <img src='./imgs/audio.png' alt='Audio symbol' />
                    </div>
                    <p>${TERMS[keyword]}</p>
                </div>
            </div>`)
        dialogue.innerHTML = message;

        document.querySelectorAll('.popup').forEach((button) => {
            button.addEventListener('click', (e) => {
                let popup = document.querySelector('.keyword');
                popup.classList.add('show');
                buildTermDefinition(keyword);
            });
        });
    }

    function buildTermDefinition(keyword) {
        return (
            <TermContainer>
                <h4>{keyword}</h4>
                <p>{TERMS[keyword]}</p>
            </TermContainer>
        );
    }

    function buildDialogue() {
        if (document.getElementById('dialogue')) {
            document.getElementById('dialogue').innerHTML = '';
            document.getElementById('dialogue').classList.remove('vn-decision');
        }

        let type = currentScene.dialogue[dialoguePosition].type;
        let image = '';
        if (type === 'nospeaker') {
            image = '/sprites/misc-textbubble-nospeaker.png';
        } else if (type === 'left') {
            image = '/sprites/misc-textbubble-left.png';
        } else {
            image = '/sprites/misc-textbubble-right.png';
        }

        let message = currentScene.dialogue[dialoguePosition].message;
        if (isFlapGuide && !isGameComplete) {
            message = 'Hi! I’m Sally the Salmon! I’m a Chum Salmon.';
        } else if (isGameComplete) {
            message = 'Wow! Thank you so much for helping to remove all of the dangerous ghost nets near me and my friends!';
        }

        if (currentScene.dialogue[dialoguePosition].keyword) {
            if (typeof currentScene.dialogue[dialoguePosition].keyword === 'object') {
                currentScene.dialogue[dialoguePosition].keyword.map((keyword) => buildTerm(keyword));
            } else {
                buildTerm(currentScene.dialogue[dialoguePosition].keyword);
                console.log('has keyword');
            }
        }

        return (
            <>
                <DialogueImg src={image} alt="Text bubble background" className='textBox' id="dialogueBox" />
                <DialogueMessageContainer className="message-container">
                    <p>{message}</p>
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
        let newDiv = document.createElement('div');

        Object.keys(nextScene).forEach((choice) => {
            const newButton = document.createElement('button');
            newButton.classList.add('choiceButton');
            newButton.setAttribute('key', nextScene[choice]);
            newButton.textContent = choice;
            newDiv.appendChild(newButton);
        });

        newDiv.classList.add('vn-decision');
        dialogue.appendChild(newDiv);
    }

    function buildVisuals() {
        return (
            <VisualNovelContainer id='visual-novel-container' backgroundImage={`url(/sprites/bg-${currentScene.background}.png)`}>
                <ExitButton onClick={
                    () => {
                        setIsFlapGuide(false);
                        setIsGameComplete(false);
                        navigate('/');
                    }
                }>Exit</ExitButton>
                <NextButton className='nextBtn' onClick={(nextEvent) => {
                    if (dialoguePosition < currentScene.dialogue.length - 1) {
                        dialoguePosition++;
                        if (currentScene.dialogue[dialoguePosition].keyword) {
                            buildTerm(currentScene.dialogue[dialoguePosition].keyword);
                        }
                        if (currentScene.dialogue[dialoguePosition].speaker.length > 0) {
                            document.querySelector('.speaker-container span').textContent = currentScene.dialogue[dialoguePosition].speaker;
                        }
                        document.querySelector('.message-container p').textContent = currentScene.dialogue[dialoguePosition].message;
                    } else {
                        dialoguePosition = 0;
                        if (typeof currentScene.nextScene === 'object') {
                            nextEvent.target.disabled = true;
                            // Display the choice scene
                            buildChoice(currentScene.nextScene);
                            document.querySelectorAll('.choiceButton').forEach((button) => {
                                button.addEventListener('click', (e) => {
                                    nextEvent.target.disabled = false;
                                    currentScene = LEVEL1[e.target.getAttribute('key')];
                                    buildDialogue();
                                    nextScene(currentScene);
                                });
                            });
                        } else if (currentScene.nextScene === 'pancakeGuide') {
                            navigate('/flapguide');
                        } else if (currentScene.nextScene === 'minigame') {
                            navigate('/play');
                        } else if (currentScene.nextScene === 'end') {
                            navigate('/');
                        } else {
                            // Display the next scene
                            clearSprites();
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


