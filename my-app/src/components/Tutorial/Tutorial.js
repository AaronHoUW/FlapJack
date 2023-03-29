import React, { useEffect, useRef, useState } from 'react';
import {
	User,
	Net,
	Flapjack,
    Speech,
    DialogueMessageContainer,
    NextButton,
    Circle
} from './styles.tsx';
// import LEVEL1 from '../innerComp/minigames/data/stories/Level1';
import { useNavigate } from 'react-router-dom';
import circleImg from './tutorial-circle.png'
import arrowKeys from './tutorial-arrow-keys.png'
// import ComicView from '../innerComp/ComicView';

function Tutorial() {
	// Player Movement
	const [xAxis, setXAxis] = useState(60);
	const [yAxis, setYAxis] = useState(300);
    const [canMove, setCanMove] = useState(false)
    const [moveCount, setMoveCount] = useState(0)
	// Nets
	const [netRemove, setNetRemove] = useState(0);
	// Change Player's Position
	const userPlacement = { top: yAxis + 'px', left: xAxis + 'px' };
	const flapjackPlacement = { top: 20 + 'px', left: 80 + 'px'}
	const navigate = useNavigate();
    // Tutorial
    const [textPage, setTextPage] = useState(0)
    const [displayButton, setDisplayButton] = useState(true);
    const tutorialText = ["Welcome to the Ocean, click on the arrow button to countine", // Player can't move, click next button to countine
                        "Use the Arrow Keys to move around", // Player can move, hide next button
                        "Great! Try moving into this circle", // After moving around show this message, Player can move, 
                        "Looks like there's a piece of trash that came by", // Stop player movement, show next button
                        "Let's swim to it and click on it to pick it up", // Player can move
                        "Great Job in helping cleaning up the ocean",
                        "Lets go meet other fishes in the ocean!"] // Stop player movement, End of tutorial
                 
    const handleKeyDown = event => {
        if(canMove) {
            if(event.key === 'ArrowRight') {
                setXAxis(xAxis + 50)
            }
            if(event.key === 'ArrowLeft') {
                setXAxis(xAxis - 50)
            }
            if(event.key === 'ArrowDown') {
                setYAxis(yAxis + 50)
            }
            if(event.key === 'ArrowUp') {
                setYAxis(yAxis - 50)
            }
            setMoveCount(moveCount + 1)
            checkWithinRange();
        }
        if(moveCount === 10) {
            // show circle
            console.log("show circle")
            setTextPage(textPage + 1)
        }
	};

	function randomPx() {
		let px = Math.floor((Math.random() * 250) + 50);
		return px;
	}

	const user = useRef(null);
	const circle = useRef(null);
    const net = useRef(null)

	useEffect(() => {
		user.current.focus();
	}, []);

	const handleWithinRange = (event) => {
		if(Math.sqrt((user.current.x - event.target.x)**2 + (user.current.y - event.target.y)**2 ) <= 400) {
			navigate('/level1');
		}
	}

	function checkWithinRange() {
        // Checking range for circle
        if(textPage === 2) {
            circle.current.focus();
            if(Math.sqrt((user.current.x - circle.current.x)**2 + (user.current.y - circle.current.y)**2 ) <= 350) {
                setTextPage(textPage + 1)
                setDisplayButton(true)
                setCanMove(false)
            }
        }

        // Checking range for nets
        if(textPage === 4) {
            net.current.focus();
            if(Math.sqrt((user.current.x - net.current.x)**2 + (user.current.y - net.current.y)**2 ) <= 500) {
                document.getElementById('net').classList.add('in-range');
            } else {
                document.getElementById('net').classList.remove('in-range');
            }
        }
	}

	const removeNet = (event) => {
		if(Math.sqrt((user.current.x - event.target.x)**2 + (user.current.y - event.target.y)**2 ) <= 500) {
			event.target.classList.add('hidden');
			setNetRemove(netRemove + 1);
            setTextPage(textPage + 1)
            // End tutorial
            setCanMove(false)
            setDisplayButton(true)
		}
	}

    const handleNextText = () => {
        setTextPage(textPage + 1)
        if (textPage === 0 || textPage === 3) {
            setCanMove(true)
            setDisplayButton(false);
        }
        if (textPage === tutorialText.length - 1) {
            console.log("redirect to next page")
            navigate('/flapguide');
            setDisplayButton(false);       
        }
    }

    console.log(textPage);

    return (
        <div className='play-area' onClick={() => user.current.focus()}>
            {textPage === 2 &&<Circle 
                src={circleImg}
                ref={circle}/> }
            <div>
                <Speech className="speech" src='./imgs/text.png' />
                <DialogueMessageContainer className="message-container" >
                        {textPage === 1 && <img src={arrowKeys}/>}
                        <p>{tutorialText[textPage]}</p>
                </DialogueMessageContainer>
                {displayButton  && <NextButton className='nextBtn' onClick={handleNextText}>{">"}</NextButton> }
            </div>
			<Flapjack
				tabIndex={-1}
				onKeyDown={handleKeyDown}
				src={`/sprites/sprite-pancake-flapjack-octopus.png`}
				className='img-size'
				alt="Pancake the flapjack"
				/>
            {/* User */}
            <User
				style={userPlacement}
				ref={user}
				tabIndex={0}
				onKeyDown={handleKeyDown}
				src={`/sprites/sprite-user-placeholder.png`}
				id='playable'
				className='img-size'
				alt="User's character"
			/>
			{/* Net 1 */}
			{textPage >= 3 && <Net
				src={`/sprites/sprite-fishing-net.png`}
				ref={net}
				onClick={removeNet}
				className='img-size'
				alt="Net"
				id='net'
			/>}

        </div>
    );
}


export default Tutorial;


