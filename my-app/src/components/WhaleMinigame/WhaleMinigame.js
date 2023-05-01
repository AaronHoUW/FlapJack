import React, { useEffect, useRef, useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	User,
	Net,
	Obstacle,
	Whale,
	Trash,
} from './styles.tsx';
import squareImg from './square.png';

function WhaleMinigame(props) {
	const { isGameComplete, setIsGameComplete } = props;

	// Player Movement
	const [xAxis, setXAxis] = useState(60);
	const [yAxis, setYAxis] = useState(100);
	// Nets
	const [netPlacement, setNetPlacement] = useState({});
	const [netPlacement2, setNetPlacement2] = useState({});
	const [netPlacement3, setNetPlacement3] = useState({});
	const [netRemove, setNetRemove] = useState(0);
	//Obstacle
	const [squarePoints, setSquarePoints] = useState({});
	const [hasObstacle, setHasObstacle] = useState(false);
	// Trash
	const [trashPlacement, setTrashPlacement] = useState({});
	const [trashPlacement2, setTrashPlacement2] = useState({});
	const [trashPlacement3, setTrashPlacement3] = useState({});
	const [trashRemove, setTrashRemove] = useState(0);
	// Change Player's Position
	const userPlacement = { top: yAxis + 'px', left: xAxis + 'px' };
	// Level
	const [level, setLevel] = useState(1)
	const [page, setPage] = useState(1);

	const navigate = useNavigate();

	// Load Modal
	// if (netRemove === 3 && page === 1) {
	// 	document.getElementById("load-modal-1").click();
	// }

	// Player Controls
	const handleKeyDown = event => {
		const newPlayerCords = {
			xPosition: grabUserXPosition(),
			yPosition: grabUserYPosition(),
			width: user.current.width,
			height: user.current.height
		}
		if (event.key === 'ArrowRight') {
			newPlayerCords.xPosition += 100;
			if (!checkObstacle(newPlayerCords) || !hasObstacle) {
				setXAxis(xAxis + 50)
			}
		}
		if (event.key === 'ArrowLeft') {
			newPlayerCords.xPosition -= 100;
			if (!checkObstacle(newPlayerCords) || !hasObstacle) {
				setXAxis(xAxis - 50)
			}
		}
		if (event.key === 'ArrowDown') {
			newPlayerCords.yPosition += 50;
			if (!checkObstacle(newPlayerCords) || !hasObstacle) {
				setYAxis(yAxis + 50)
			}
		}
		if (event.key === 'ArrowUp') {
			newPlayerCords.yPosition -= 50;
			if (!checkObstacle(newPlayerCords) || !hasObstacle) {
				setYAxis(yAxis - 50)
			}
		}
		// console.log(newPlayerCords.xPosition, newPlayerCords.yPosition, "Uuser Position")
		checkObstacle(newPlayerCords);
		checkWithinRange();
	};

	// Create function to grab true XY positions
	function grabUserXPosition() {
		return user.current.offsetLeft + (user.current.width / 2);
	}

	function grabUserYPosition() {
		return user.current.offsetTop + (user.current.height / 2)
	}

	function randomPx() {
		let px = Math.floor((Math.random() * 250) + 50);
		return px;
	}

	const user = useRef(null);
	// Hard Code
	const net = useRef(null);
	const net2 = useRef(null);
	const net3 = useRef(null);
	const trash = useRef(null);
	const trash2 = useRef(null);
	const trash3 = useRef(null);
	const square = useRef(null);

	useEffect(() => {
		user.current.focus();

		net.current.focus();
		net2.current.focus();
		net3.current.focus();

		trash.current.focus();
		trash2.current.focus();
		trash3.current.focus();

		// Hard Code
		setNetPlacement({ top: randomPx() + 'px', left: randomPx() + 'px' });
		setNetPlacement2({ top: randomPx() + 'px', left: randomPx() + 'px' });
		setNetPlacement3({ top: randomPx() + 'px', left: randomPx() + 'px' });

		setTrashPlacement({ top: randomPx() + 'px', left: randomPx() + 'px' });
		setTrashPlacement2({ top: randomPx() + 'px', left: randomPx() + 'px' });
		setTrashPlacement3({ top: randomPx() + 'px', left: randomPx() + 'px' });
		document.getElementById('play-area').style.backgroundImage = `url(/sprites/bg-whale-stomach.png)`;

		square.current.focus();
		document.getElementById('square').classList.add('hidden');
		const squareX = square.current.offsetLeft + (square.current.width / 2)
		const squareY = square.current.offsetTop + (square.current.height / 2)
		setSquarePoints({
			x: squareX,
			y: squareY,
			leftEdge: squareX - (square.current.width / 2),
			rightEdge: squareX + (square.current.width / 2),
			topEdge: squareY - (square.current.height / 2),
			bottomEdge: squareY + (square.current.height / 2)
		})
	}, []);

	function checkWithinRange() {
		if (Math.sqrt((user.current.x - net.current.x) ** 2 + (user.current.y - net.current.y) ** 2) <= 400) {
			document.getElementById('net').classList.add('in-range');
		} else {
			document.getElementById('net').classList.remove('in-range');
		}

		if (Math.sqrt((user.current.x - net2.current.x) ** 2 + (user.current.y - net2.current.y) ** 2) <= 400) {
			document.getElementById('net2').classList.add('in-range');
		} else {
			document.getElementById('net2').classList.remove('in-range');
		}

		if (Math.sqrt((user.current.x - net3.current.x) ** 2 + (user.current.y - net3.current.y) ** 2) <= 400) {
			document.getElementById('net3').classList.add('in-range');
		} else {
			document.getElementById('net3').classList.remove('in-range');
		}

		if (Math.sqrt((user.current.x - trash.current.x) ** 2 + (user.current.y - trash.current.y) ** 2) <= 400) {
			document.getElementById('trash').classList.add('in-range');
		} else {
			document.getElementById('trash').classList.remove('in-range');
		}

		if (Math.sqrt((user.current.x - trash2.current.x) ** 2 + (user.current.y - trash2.current.y) ** 2) <= 400) {
			document.getElementById('trash2').classList.add('in-range');
		} else {
			document.getElementById('trash2').classList.remove('in-range');
		}

		if (Math.sqrt((user.current.x - trash3.current.x) ** 2 + (user.current.y - trash3.current.y) ** 2) <= 400) {
			document.getElementById('trash3').classList.add('in-range');
		} else {
			document.getElementById('trash3').classList.remove('in-range');
		}
	}

	function checkObstacle(newPlayerCords) {
		// Corners
		const playerCorners = [[1, 1], [-1, 1], [-1, -1], [1, -1]].filter((cords, i) => {
			const newCorners = { x: newPlayerCords.xPosition + (75) * cords[0], y: newPlayerCords.yPosition - (75) * cords[1] }
			// console.log(newCorners);
			return (squarePoints.leftEdge <= newCorners.x && newCorners.x <= squarePoints.rightEdge &&
				newCorners.y <= squarePoints.bottomEdge && squarePoints.topEdge <= newCorners.y)
		})
		// console.log(playerCorners, "check")
		return playerCorners.length >= 1;
	}

	const removeNet = (event) => {
		if (Math.sqrt((user.current.x - event.target.x) ** 2 + (user.current.y - event.target.y) ** 2) <= 500) {
			event.target.classList.add('hidden');
			setNetRemove(netRemove + 1);
		}
	}

	const removeTrash = (event) => {
		if (Math.sqrt((user.current.x - event.target.x) ** 2 + (user.current.y - event.target.y) ** 2) <= 500) {
			event.target.classList.add('hidden');
			setNetRemove(trashRemove + 1);
		}
	}

	const loadNextModal = () => {
		let newPage = page + 1;
		setPage(newPage);
		document.getElementById(`load-modal-`+ (page + 1)).click();
	}

	const loadNextLevel = () => {
		// Load Beach Level
		if (level === 1) {
			document.getElementById('play-area').style.backgroundImage = `url(/sprites/bg-sea.png)`;
			setHasObstacle(true);
			document.getElementById('square').classList.remove('hidden');
		} else if (level === 2) {
			document.getElementById('play-area').style.backgroundImage = `url(/sprites/bg-deep-sea-level.png)`;
		}
		if (level < 3) {
			document.getElementById("play-area").click();
			// Reset Level
			setXAxis(60);
			setYAxis(100)
			setNetPlacement({ top: randomPx() + 'px', left: randomPx() + 'px' });
			setNetPlacement2({ top: randomPx() + 'px', left: randomPx() + 'px' })
			setNetPlacement3({ top: randomPx() + 'px', left: randomPx() + 'px' })
			document.getElementById('net').classList.remove('hidden');
			document.getElementById('net2').classList.remove('hidden');
			document.getElementById('net3').classList.remove('hidden');
			// Reset Values
			setNetRemove(0);
			checkWithinRange();
			setLevel(level + 1);
			setPage(1);
		} else {
			props.setIsGameComplete(true);
		}
	}

	// Note: When finished watching video, it closes with next video
	return (
		<>
			<div id='play-area' className='play-area' onClick={() => user.current.focus()}>
				<span className="badge text-bg-secondary net-counter">Net Removed: {netRemove}</span>
				<span className="badge text-bg-secondary net-counter">Trash Removed: {trashRemove}</span>
				{/* User */}
				{(level === 3) && <Whale
					src={'/sprites/sprite-wendy-whale.png'}
					/>}

				<User
					style={userPlacement}
					ref={user}
					tabIndex={-1}
					onKeyDown={handleKeyDown}
					src={`/sprites/sprite-user-placeholder.png`}
					id='playable'
					className='img-size'
					alt="User's character"
				/>
				{/* Net 1 */}
				<Net
					style={netPlacement}
					src={`/sprites/sprite-fishing-net.png`}
					ref={net}
					onClick={removeNet}
					className='img-size'
					alt="Net"
					id='net'
				/>
				{/* Net 2 */}
				<Net
					style={netPlacement2}
					src={`/sprites/sprite-fishing-net.png`}
					ref={net2}
					onClick={removeNet}
					className='img-size'
					alt="Net2"
					id='net2'
				/>
				{/* Net 3 */}
				<Net
					style={netPlacement3}
					src={`/sprites/sprite-fishing-net.png`}
					ref={net3}
					onClick={removeNet}
					className='img-size'
					alt="Net3"
					id='net3'
				/>
				{/* Trash 1 */}
				<Trash 
					style={trashPlacement}
					src={`/sprites/sprite-trash.png`}
					ref={trash}
					onClick={removeTrash}
					className='img-size'
					alt="Trash"
					id='trash'
				/>
				{/* Trash 2 */}
				<Trash 
					style={trashPlacement2}
					src={`/sprites/sprite-trash.png`}
					ref={trash2}
					onClick={removeTrash}
					className='img-size'
					alt="Trash2"
					id='trash2'
				/>
				{/* Trash 3 */}
				<Trash 
					style={trashPlacement3}
					src={`/sprites/sprite-trash.png`}
					ref={trash3}
					onClick={removeTrash}
					className='img-size'
					alt="Trash3"
					id='trash3'
				/>
				<Obstacle
					src={squareImg}
					id='square'
					ref={square} />
			</div>
		</>
	);
}

export default WhaleMinigame;


