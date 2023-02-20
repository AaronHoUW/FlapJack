import React, { useMemo, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    VisualNovelContainer,
    DialogueBox,
    DialogueImg,
    DialogueMessageContainer,
    SpeakerContainer,
} from './styles.tsx';
import LEVEL1 from '../innerComp/minigames/data/stories/Level1';

function VisualNovel() {
    let currentScene = LEVEL1['pancakeIntro'];
    let dialoguePosition = 0;
    const navigate = useNavigate();
    const TALK_SPEED = 10;
    let speechTimer = 0;

    async function nextScene(scene) {
        if (scene.background) {
            document.getElementById('visual-novel-container').style.backgroundImage = `url(/sprites/bg-${scene.background}.png)`;
        }
        console.log(scene);

        clearSprites();

        createBaseFrame(scene.baseFrame);
        createImage(scene.frames);

        document.querySelector('.message-container p').textContent = scene.dialogue[dialoguePosition].message;
        if (currentScene.dialogue[dialoguePosition].speaker.length > 0) {
            document.querySelector('.speaker-container span').textContent = currentScene.dialogue[dialoguePosition].speaker;
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
                if (base && base.length > 0) {
                    return base.map((sprite) => {
                        return (
                            <img src={`/sprites/sprite-${sprite.image}.png`} style={{width: `${sprite.size}%`, position: 'absolute', top: `${sprite.y}%`, left: `${sprite.x}%`}} className='sprite'/>
                        )
                    })
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
                    })
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
    function buildDialogue() {
        return (
            <DialogueBox id='dialogue' className={`dialogue-${currentScene.dialogue[dialoguePosition].type}`}>
                <DialogueImg src={currentScene.dialogue[dialoguePosition].type === 'nospeaker' ? '/sprites/misc-textbubble-nospeaker.png' : '/sprites/misc-textbubble.png'} alt="Text bubble background" className='textBox'/>
                <DialogueMessageContainer className="message-container">
                    <p>{currentScene.dialogue[dialoguePosition].message}</p>
                </DialogueMessageContainer>
                {createBaseFrame(currentScene.baseFrame)}
                {createImage(currentScene.frames)}
                {
                    currentScene.dialogue[dialoguePosition].speaker.length > 0 &&
                        <SpeakerContainer className="speaker-container">
                            <span>{currentScene.dialogue[dialoguePosition].speaker}</span>
                        </SpeakerContainer>
                }
            </DialogueBox>
        );
    }

    function buildVisuals() {
        return (
            <VisualNovelContainer id='visual-novel-container' backgroundImage={`url(/sprites/bg-${currentScene.background}.png)`}>
                <button onClick={() => navigate('/play')} style={{color: 'black'}}>Finished!</button>
                <button className='nextBtn' onClick={() => {
                    if (dialoguePosition < currentScene.dialogue.length - 1) {
                        dialoguePosition++;
                        if (currentScene.dialogue[dialoguePosition].speaker.length > 0) {
                            document.querySelector('.speaker-container span').textContent = currentScene.dialogue[dialoguePosition].speaker;
                        }
                        document.querySelector('.message-container p').textContent = currentScene.dialogue[dialoguePosition].message;
                    } else {
                        dialoguePosition = 0;
                        currentScene = LEVEL1[currentScene.nextScene];
                        nextScene(currentScene);
                    }
                }}>
                    Next
                </button>
                {buildDialogue()}
                {/* <DialogueBox id='dialogue' className={`dialogue-${currentScene.dialogue[dialoguePosition].type}`}>
                    <DialogueImg src={currentScene.dialogue[dialoguePosition].type === 'nospeaker' ? '/sprites/misc-textbubble-nospeaker.png' : '/sprites/misc-textbubble.png'} alt="Text bubble background" className='textBox'/>
                    <DialogueMessageContainer className="message-container">
                        <p>{currentScene.dialogue[dialoguePosition].message}</p>
                    </DialogueMessageContainer>
                    {
                        currentScene.frames.map((frame) => {
                            if (frame && frame.length > 0) {
                                return frame.map((sprite) => {
                                    return (
                                        <div>
                                            <img src={`/sprites/sprite-${sprite.image}.png`} style={{width: `${sprite.size}%`, position: 'absolute', top: `${sprite.y}%`, left: `${sprite.x}%`}}/>
                                        </div>
                                    )
                                })
                            }
                        })
                    }
                    {
                        currentScene.dialogue[dialoguePosition].speaker.length > 0 &&
                            <SpeakerContainer className="speaker-container">
                                <span>{currentScene.dialogue[dialoguePosition].speaker}</span>
                            </SpeakerContainer>
                    }
                </DialogueBox> */}
            </VisualNovelContainer>
        )
    }

    return (
        <div>
            {buildVisuals()}
            {/* <VisualNovelContainer backgroundImage={`url(/sprites/bg-${currentScene.background}.png)`}>
                <h1 style={{color: 'black'}}>Visual Novel Page</h1>
                <button onClick={() => navigate('/play')} style={{color: 'black'}}>Finished!</button>
                <button className='nextBtn' onClick={() => {
                    if (dialoguePosition < currentScene.dialogue.length - 1) {
                        dialoguePosition++;
                        if (currentScene.dialogue[dialoguePosition].speaker.length > 0) {
                            document.querySelector('.speaker-container span').textContent = currentScene.dialogue[dialoguePosition].speaker;
                        }
                        document.querySelector('.message-container p').textContent = currentScene.dialogue[dialoguePosition].message;    
                    } else {
                        dialoguePosition = 0;
                        scenePosition += 1;
                        currentScene = LEVEL1[scenes[scenePosition]];
                        nextScene(currentScene);
                    }
                }}>
                    Next
                </button>
                <DialogueBox id='dialogue' className={`dialogue-${currentScene.dialogue[dialoguePosition].type}`}>
                    <DialogueImg src={currentScene.dialogue[dialoguePosition].type === 'nospeaker' ? '/sprites/misc-textbubble-nospeaker.png' : '/sprites/misc-textbubble.png'} alt="Text bubble background" className='textBox'/>
                    <DialogueMessageContainer className="message-container">
                        <p>{currentScene.dialogue[dialoguePosition].message}</p>
                    </DialogueMessageContainer>
                    {
                        currentScene.frames.map((frame) => {
                            if (frame && frame.length > 0) {
                                return frame.map((sprite) => {
                                    return (
                                        <div>
                                            <img src={`/sprites/sprite-${sprite.image}.png`} style={{width: `${sprite.size}%`, position: 'absolute', top: `${sprite.y}%`, left: `${sprite.x}%`}}/>
                                        </div>
                                    )
                                })
                            }
                        })
                    }
                    {
                        currentScene.dialogue[dialoguePosition].speaker.length > 0 &&
                            <SpeakerContainer className="speaker-container">
                                <span>{currentScene.dialogue[dialoguePosition].speaker}</span>
                            </SpeakerContainer>
                    }
                </DialogueBox>
            </VisualNovelContainer> */}
        </div>
    );
}

export default VisualNovel;