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
    BackButton,
    TermContainer,
} from './styles.tsx';
import LEVEL1 from '../innerComp/minigames/data/stories/Level1';
import TERMS from './Terms';

function VisualNovel(props) {
    const [loadGame, setLoadGame] = useState(false);
    const { isFlapGuide, setIsFlapGuide, isGameComplete, setIsGameComplete } = props;
    let currentScene = LEVEL1['pancakeIntro'];

    let dialoguePosition = 0;
    const navigate = useNavigate();

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
            document.getElementById('backBtn').disabled = true;
        }
        if (currentScene === LEVEL1['pancakeIntro']
            || currentScene === LEVEL1['sallyTalking']
            || currentScene === LEVEL1['minigame']
            || currentScene === LEVEL1['end']) {
            document.getElementById('backBtn').disabled = true;
        }
        document.getElementsByClassName('.nextBtn').disabled = false;
    }, [isFlapGuide, isGameComplete]);

    const TALK_SPEED = 10;
    let speechTimer = 0;

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function nextScene(scene) {
        if (scene === undefined) {
            setLoadGame(true);
        }

        if (scene.background) {
            document.getElementById('visual-novel-container').style.backgroundImage = `url(/sprites/bg-${scene.background}.png)`;
        }

        if (scene.nextScene === 'clickMap') {
            createClickSpace();
        } else {
            clearClickSpaces();
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
            }
        }
    }

    function createClickSpace() {
        const clickSpaces = document.createElement('div');
        clickSpaces.classList.add('space');
        clickSpaces.setAttribute('style', 'display: flex;');

        const correctClickSpace = document.createElement('div');
        correctClickSpace.setAttribute('style', 'width: 550px; height: 600px; margin: 0;');
        correctClickSpace.addEventListener('click', () => {
            currentScene = LEVEL1['pacificOcean_correct'];
            nextScene(currentScene);
        });

        const incorrectClickSpace = document.createElement('div');
        incorrectClickSpace.setAttribute('style', 'width: 1500px; height: 600px; margin: 0');
        incorrectClickSpace.addEventListener('click', () => {
            currentScene = LEVEL1['pacificOcean_incorrect'];
            nextScene(currentScene);
        });

        let container = document.getElementById('visual-novel-container');
        clickSpaces.appendChild(correctClickSpace);
        clickSpaces.appendChild(incorrectClickSpace);
        container.appendChild(clickSpaces);
        document.getElementsByClassName('.nextBtn').disabled = false;
    }

    function clearClickSpaces() {
        let spaces = document.getElementsByClassName('space');
        if (spaces) {
            while (spaces[0]) {
                spaces[0].parentNode.removeChild(spaces[0]);
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
                                    transform: `scaleX(${sprite.flipX ? -1 : 1}`,
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

    function buildMultipleTerms(keywords) {
        let dialogue = document.querySelector('.message-container p');
        let message = currentScene.dialogue[dialoguePosition].message;
        let keywordPosition = 0;
        let keyword = keywords[keywordPosition];
        let popups = keywords.map((keyword) => {
            return `
                <div class="popup">
                    ${keyword}
                    <div class="keyword">
                        <h4>${capitalizeFirstLetter(keyword)}</h4>
                        <img src='./imgs/audio.png' alt='Audio symbol' />
                    </div>
                    <p>${TERMS[keyword]}</p>
                </div>
            `
        });
        message = message.replace(keywords[keywordPosition], popups);
        dialogue.innerHTML = message;

        document.querySelectorAll('.popup').forEach((button) => {
            button.addEventListener('click', () => {
                let popup = document.querySelector('.keyword');
                popup.classList.add('show');
                buildTermDefinition(keyword);
            });
        });
        keywordPosition += 1;
    }

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
            button.addEventListener('click', () => {
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
                buildMultipleTerms(currentScene.dialogue[dialoguePosition].keyword);
            } else {
                buildTerm(currentScene.dialogue[dialoguePosition].keyword);
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
                <BackButton id='backBtn' onClick={(event) => {
                    if (dialoguePosition > 0) {
                        dialoguePosition--;
                        if (currentScene.dialogue[dialoguePosition].keyword) {
                            buildTerm(currentScene.dialogue[dialoguePosition].keyword);
                        }
                        if (currentScene.dialogue[dialoguePosition].speaker.length > 0) {
                            document.querySelector('.speaker-container span').textContent = currentScene.dialogue[dialoguePosition].speaker;
                        }
                        document.querySelector('.message-container p').textContent = currentScene.dialogue[dialoguePosition].message;
                        if (dialoguePosition === 0) {
                            if (currentScene.previousScene === undefined) {
                                event.target.disabled = true;
                            } else {
                                event.target.disabled = false;
                            }
                        } else {
                            event.target.disabled = false;
                        }
                    } else {
                        dialoguePosition = 0;
                        event.target.disabled = true;
                        if (currentScene.previousScene === 'sallyTalking2') {
                            dialoguePosition = 0;
                            event.target.disabled = false;
                            currentScene = LEVEL1['sallyTalking2'];
                            buildDialogue();
                            nextScene(currentScene);
                        } else if (typeof currentScene.previousScene === 'object') {
                            dialoguePosition = 0;
                            currentScene = LEVEL1['sallyTalking'];
                            event.target.disabled = true;
                            buildDialogue();
                            nextScene(currentScene);
                        } else if (currentScene.previousScene === undefined && dialoguePosition === 0) {
                            event.target.disabled = true;
                        } else if (currentScene.previousScene !== undefined) {
                            currentScene = LEVEL1[currentScene.previousScene];
                            dialoguePosition = currentScene.dialogue.length - 1;
                            createImage(currentScene.frames);
                            buildDialogue();
                            nextScene(currentScene);
                        }
                    }
                }}>Back</BackButton>
                <NextButton className='nextBtn' onClick={(nextEvent) => {
                    document.getElementById('backBtn').disabled = false;
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
                                    if (e.target.getAttribute('key') === 'tutorial') {
                                        navigate('/tutorial');
                                    } else if (e.target.getAttribute('key') === 'end') {
                                        setIsGameComplete(false);
                                        navigate('/')
                                    } else {
                                        buildDialogue();
                                        nextScene(currentScene);
                                    }
                                });
                            });
                        } else if (currentScene.nextScene === 'minigame') {
                            navigate('/play');
                        } else if (currentScene.nextScene === 'end') {
                            setIsGameComplete(false);
                            navigate('/');
                        } else if (currentScene.nextScene === 'clickMap') {
                            document.getElementsByClassName('.nextBtn').disabled = true;
                        } else if (currentScene.nextScene === 'quiz') {
                            // Aaron - remove the code here once you have the quiz component ready
                            currentScene = LEVEL1['pancakeTalkToSalmon'];
                            nextScene(currentScene);
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


