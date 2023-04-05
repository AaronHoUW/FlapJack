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
import sqaureImg from './square.png'
import arrowKeys from './tutorial-arrow-keys.png'
// import ComicView from '../innerComp/ComicView';

function Secretplayground() {
	// Player Movement
	const [xAxis, setXAxis] = useState(60);
	const [yAxis, setYAxis] = useState(300);
    const [canMove, setCanMove] = useState(true)
    const [moveCount, setMoveCount] = useState(0)

	// Nets
	const [netRemove, setNetRemove] = useState(0);

    //Square
    const [squarePoints, setSquarePoints] = useState({}) 

	// Change Player's Position
	const userPlacement = { top: yAxis + 'px', left: xAxis + 'px' };
	const navigate = useNavigate();

    const handleKeyDown = event => {
        if(event.key === "a") {
            console.log(sqaure.current.x, sqaure.current.y, "square.current")
            console.log(user.current.offsetLeft, user.current.offsetTop, "user.offset")
            console.log("X center", grabUserXPosition())
            console.log("Y center", grabUserYPosition())
            console.log("sqaure center", squarePoints)
        }
        const newPlayerCords = {xPosition: grabUserXPosition(),
                                yPosition: grabUserYPosition(),
                                width: user.current.width,
                                height: user.current.height}
        if(event.key === 'ArrowRight') {
            newPlayerCords.xPosition+=100;
            if(!checkObstacle(newPlayerCords)) {
                setXAxis(xAxis + 50)
            }
        }
        if(event.key === 'ArrowLeft') {
            newPlayerCords.xPosition-=100;
            if(!checkObstacle(newPlayerCords)) {
                setXAxis(xAxis - 50)
            }
        }
        if(event.key === 'ArrowDown') {
            newPlayerCords.yPosition+=50;
            if(!checkObstacle(newPlayerCords)) {
                setYAxis(yAxis + 50)
            }
        }
        if(event.key === 'ArrowUp') {
            newPlayerCords.yPosition-=50;
            if(!checkObstacle(newPlayerCords)) {
                setYAxis(yAxis - 50)
            }
        }
        // console.log(newPlayerCords.xPosition, newPlayerCords.yPosition, "Uuser Position")
        checkObstacle(newPlayerCords);
        setMoveCount(moveCount + 1)
        checkWithinRange(newPlayerCords);
	};

    // Create function to grab true XY positions
    function grabUserXPosition() {
        return  user.current.offsetLeft + (user.current.width / 2);
    }

    function grabUserYPosition() {
        return user.current.offsetTop + (user.current.height / 2)
    }

	function randomPx() {
		let px = Math.floor((Math.random() * 250) + 50);
		return px;
	}

	const user = useRef(null);
	const sqaure = useRef(null);
    const net = useRef(null)

	useEffect(() => {
		user.current.focus();
        net.current.focus();

        sqaure.current.focus();
        // Insert code to the set the usestate of thw square's location
        const squareX = sqaure.current.offsetLeft + (sqaure.current.width / 2)
        const squareY = sqaure.current.offsetTop + (sqaure.current.height / 2)
        setSquarePoints({
            x: squareX,
            y: squareY,
            leftEdge: squareX - (sqaure.current.width / 2),
            rightEdge: squareX + (sqaure.current.width / 2),
            topEdge: squareY - (sqaure.current.height / 2),
            bottomEdge: squareY + (sqaure.current.height / 2)
        })
	}, []);

	const handleWithinRange = (event) => {
		if(Math.sqrt((user.current.x - event.target.x)**2 + (user.current.y - event.target.y)**2 ) <= 400) {
			navigate('/level1');
		}
	}

    function checkObstacle(newPlayerCords) {
        // Corners
        const playerCorners = [[1, 1], [-1, 1], [-1, -1], [1, -1]].filter((cords, i) => {
            const newCorners = {x: newPlayerCords.xPosition + (75)*cords[0], y: newPlayerCords.yPosition- (75)*cords[1]}
            // console.log(newCorners);
            console.log(cords, newCorners)
            return (squarePoints.leftEdge <= newCorners.x && newCorners.x <= squarePoints.rightEdge &&
                newCorners.y <= squarePoints.bottomEdge && squarePoints.topEdge <= newCorners.y)
        })
        // console.log(playerCorners, "check")
        console.log(playerCorners)
        return playerCorners.length >= 1;

        // console.log(playerCorners)
        
        // console.log(netCords)
        // console.log(playerCorners)
        // console.log(" ")

        // netCords.filter(netPoints => {
        //     // console.log(playerCorners)
        //     playerCorners.filter(playerPoints => {
        //         console.log(playerPoints.x > netPoints.x && playerPoints.y > netPoints.y)
        //     })
        //     // console.log(
        //     //     Math.sqrt((newPlayerCords.xPosition - points.x)**2 + (newPlayerCords.yPosition  - points.y)**2) <= 125
        //     // )
        // })

        // console.log(net.current.x - (net.current.width / 2), net.current.y - (net.current.height / 2))        

        // console.log("Player X: " + newPlayerCords.xPosition, "Player Y: " + newPlayerCords.yPosition, "Width: " + newPlayerCords.width, "Height: " + newPlayerCords.height)
        // console.log("Player -+ X: " + (newPlayerCords.xPosition - (newPlayerCords.width / 2)), "Player -+ Y:" + (newPlayerCords.yPosition + (newPlayerCords.height / 2)))



        // Within A Circle Math.sqrt((newPlayerCords.xPosition - net.current.x)**2 + (newPlayerCords.yPosition - net.current.y)**2)
        // 
        // The Player is the circle, while the hitbox is the four corners: Math.sqrt((newPlayerCords.xPosition - [net.corner.position])**2 + (newPlayerCords.yPosition - [net.corner.position])**2)
        // 
        // This is the radius, intead of using the net's center XY (net.current.x), could do a for loop of each corner's position and set the range of the player's to be small
    }

	function checkWithinRange(newPlayerCords) {
        // Net
        if(Math.sqrt((user.current.x - net.current.x)**2 + (user.current.y - net.current.y)**2 ) <= 500) {
            document.getElementById('net').classList.add('in-range');
        } else {
            document.getElementById('net').classList.remove('in-range');
        }

        // if(Math.sqrt((newPlayerCords.xPosition  - sqaure.current.x)**2 + (newPlayerCords.yPosition  - sqaure.current.y)**2 ) <= 300) {
        //     document.getElementById('square').classList.add('in-range');
        // } else {
        //     document.getElementById('square').classList.remove('in-range');
        // }
	}

	const removeNet = (event) => {
		if(Math.sqrt((user.current.x - event.target.x)**2 + (user.current.y - event.target.y)**2 ) <= 500) {
			event.target.classList.add('hidden');
			setNetRemove(netRemove + 1);
            // End tutorial
		}
	}


    return (
        <div className='play-area' onClick={() => user.current.focus()}>
            {/* {textPage === 2 &&<Circle 
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
				/> */}
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
			{<Net
				src={`/sprites/sprite-fishing-net.png`}
				ref={net}
				onClick={removeNet}
				className='img-size'
				alt="Net"
				id='net'
			/>}

            <Circle 
                src={sqaureImg}
                id='square'
                ref={sqaure}/>

        </div>
    );
}


export default Secretplayground;


