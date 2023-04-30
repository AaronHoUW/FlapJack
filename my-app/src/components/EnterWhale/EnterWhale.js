import React, { useEffect, useRef, useState } from 'react';
import {
	User,
    Whale,
} from './styles.tsx';
import { useNavigate } from 'react-router-dom';

function EnterWhale(props) {
    const { isEnterWhale, setIsEnterWhale } = props;
	// Player Movement
	const [xAxis, setXAxis] = useState(60);
	const [yAxis, setYAxis] = useState(300);

	// Nets
	const [netRemove, setNetRemove] = useState(0);

	// Change Player's Position
	const userPlacement = { top: yAxis + 'px', left: xAxis + 'px' };
	const navigate = useNavigate();

    const handleKeyDown = event => {
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
        checkWhaleRange();
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
    const whale = useRef(null);

	useEffect(() => {
		user.current.focus();
        whale.current.focus();
        setIsEnterWhale(true)
	}, [isEnterWhale]);

	const handleWithinRange = (event) => {
		if(Math.sqrt((user.current.x - event.target.x)**2 + (user.current.y - event.target.y)**2 ) <= 400) {
			navigate('/level1');
		}
	}

    // Leaving this code here, in case we have obstacles
    function checkObstacle(newPlayerCords) {
        return false;
        // Corners
        // const playerCorners = [[1, 1], [-1, 1], [-1, -1], [1, -1]].filter((cords, i) => {
        //     const newCorners = {x: newPlayerCords.xPosition + (75)*cords[0], y: newPlayerCords.yPosition- (75)*cords[1]}
        //     console.log(cords, newCorners)
        //     return (squarePoints.leftEdge <= newCorners.x && newCorners.x <= squarePoints.rightEdge &&
        //         newCorners.y <= squarePoints.bottomEdge && squarePoints.topEdge <= newCorners.y)
        // })
        // console.log(playerCorners)
        // return playerCorners.length >= 1;
    }

	const removeNet = (event) => {
		if(Math.sqrt((user.current.x - event.target.x)**2 + (user.current.y - event.target.y)**2 ) <= 500) {
			event.target.classList.add('hidden');
			setNetRemove(netRemove + 1);
            // End tutorial
		}
	}

    function checkWhaleRange() {
        if(Math.sqrt((grabUserXPosition() - whale.current.offsetLeft)**2 + (grabUserYPosition() - (whale.current.offsetTop + (whale.current.height / 2)))**2) <= 100) {
            document.getElementById('whale').classList.add('in-range');
        } else {
            document.getElementById('whale').classList.remove('in-range');
        }

        if(Math.sqrt((user.current.x - whale.current.offsetLeft)**2 + (user.current.y - whale.current.offsetTop)**2 ) <= 100) {
            // Switch to scene to go into whale
            navigate('/level3');
        } 
    }

    return (
        <div id='whale-area' className='play-area' onClick={() => user.current.focus()}>
            {/* User */}
            <Whale
                src={'/sprites/sprite-wendy-whale.png'}
                id={"whale"}
                ref={whale}
            />
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
        </div>
    );
}

export default EnterWhale;


