import React, { useEffect, useRef, useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	User,
	Net,
	Obstacle,
	Whale,
	NextButton,
	PointsContainer,
} from './styles.tsx';
import postGameDialogue from '../Stories/postGameDialogue.json';
import PancakeModal from './images/PancakeModal.png';

function NetMiniGame(props) {
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
	const [squarePoints, setSquarePoints] = useState({})
	// Change Player's Position
	const userPlacement = { top: yAxis + 'px', left: xAxis + 'px' };
	// Level
	const [level, setLevel] = useState(1)
	const [page, setPage] = useState(1);

	const navigate = useNavigate();

	// Load Modal
	if (netRemove === 3 && page === 1) {
		document.getElementById("load-modal-1").click();
	}

	// Player Controls
	const handleKeyDown = event => {
		const newPlayerCords = {
			xPosition: grabUserXPosition(),
			yPosition: grabUserYPosition(),
			width: user.current.width,
			height: user.current.height
		}
		// if (event.key === 'a') {
		// 	console.log(squarePoints)
		// }
		if (event.key === 'ArrowRight') {
			newPlayerCords.xPosition += 100;
			if (!checkObstacle(newPlayerCords)) {
				setXAxis(xAxis + 50);
			}
		}
		if (event.key === 'ArrowLeft') {
			newPlayerCords.xPosition -= 100;
			if (!checkObstacle(newPlayerCords)) {
				setXAxis(xAxis - 50);
			}
		}
		if (event.key === 'ArrowDown') {
			newPlayerCords.yPosition += 50;
			if (!checkObstacle(newPlayerCords)) {
				setYAxis(yAxis + 50);
			}
		}
		if (event.key === 'ArrowUp') {
			newPlayerCords.yPosition -= 50;
			if (!checkObstacle(newPlayerCords)) {
				setYAxis(yAxis - 50);
			}
		}
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
	const square = useRef(null);

	useEffect(() => {
		user.current.focus();

		net.current.focus();
		net2.current.focus();
		net3.current.focus();

		// Hard Code
		setNetPlacement({ top: randomPx() + 'px', left: randomPx() + 'px' });
		setNetPlacement2({ top: randomPx() + 'px', left: randomPx() + 'px' })
		setNetPlacement3({ top: randomPx() + 'px', left: randomPx() + 'px' })
		document.getElementById('play-area').style.backgroundImage = `url(/sprites/bg-beach-level.png)`;

		document.getElementById('square').classList.add('hidden');
	}, []);

	function checkWithinRange() {
		if (Math.sqrt((user.current.x - net.current.x) ** 2 + (user.current.y - net.current.y) ** 2) <= 250) {
			document.getElementById('net').classList.add('in-range');
		} else {
			document.getElementById('net').classList.remove('in-range');
		}

		if (Math.sqrt((user.current.x - net2.current.x) ** 2 + (user.current.y - net2.current.y) ** 2) <= 250) {
			document.getElementById('net2').classList.add('in-range');
		} else {
			document.getElementById('net2').classList.remove('in-range');
		}

		if (Math.sqrt((user.current.x - net3.current.x) ** 2 + (user.current.y - net3.current.y) ** 2) <= 250) {
			document.getElementById('net3').classList.add('in-range');
		} else {
			document.getElementById('net3').classList.remove('in-range');
		}
	}

	function checkObstacle(newPlayerCords) {
		// Corners
		const playerCorners = [[1, 1], [-1, 1], [-1, -1], [1, -1]].filter((cords, i) => {
			const newCorners = { x: newPlayerCords.xPosition + (75 * cords[0]), y: newPlayerCords.yPosition - (75 * cords[1]) }
			// console.log((squarePoints.leftEdge <= newCorners.x))
			return (
				(squarePoints.leftEdge <= newCorners.x &&
					newCorners.x <= squarePoints.rightEdge) &&
				(newCorners.y <= squarePoints.bottomEdge) &&
				(squarePoints.topEdge <= newCorners.y))
		})
		return playerCorners.length >= 1;
	}

	const removeNet = (event) => {
		if (Math.sqrt((user.current.x - event.target.x) ** 2 + (user.current.y - event.target.y) ** 2) <= 500) {
			event.target.classList.add('hidden');
			setNetRemove(netRemove + 1);
		}
	}

	const loadNextModal = () => {
		if (level === 3) {
			let newPage = page + 1;
			setPage(newPage);
			document.getElementById(`load-modal-` + (page + 1)).click();
		} else {
			loadNextLevel();
		}
	}

	const loadNextLevel = () => {
		// Load Beach Level
		if (level === 1) {
			document.getElementById('play-area').style.backgroundImage = `url(/sprites/bg-mid-sea.png)`;

			square.current.focus();
			document.getElementById('square').classList.remove('hidden');
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
			setIsGameComplete(true);
		}
	}

	const DisplayModalCards = Object.keys(postGameDialogue[level]).map((pageInfo, i) => <ModalCards loadNextModal={loadNextModal} pageInfo={postGameDialogue[level][pageInfo]} page={i + 1} setIsGameComplete={setIsGameComplete} key={i} />)

	// Note: When finished watching video, it closes with next video
	return (
		<>
			{DisplayModalCards}
			<div id='play-area' className='play-area' onClick={() => user.current.focus()}>
				<PointsContainer>
					<div><p>Net Removed: {netRemove}</p></div>
				</PointsContainer>
				{/* User */}
				{(level === 3) && <Whale
					src={'/sprites/sprite-wendy-whale.png'}
				/>}

				<User
					style={userPlacement}
					ref={user}
					tabIndex={-1}
					onKeyDown={handleKeyDown}
					src={`/sprites/sprite-user.png`}
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
				<Obstacle
					src={'/sprites/sprite-obstacle-log.png'}
					id='square'
					ref={square} />
			</div>
		</>
	);
}

export function ModalCards(props) {
	const { pageInfo, page, loadNextModal, setIsGameComplete } = props
	const navigate = useNavigate();
	return (
		<>
			<a id={`load-modal-` + page} data-bs-toggle="modal" data-bs-target={`#modal-` + page + `-Backdrop`} />
			<div className="modal fade" id={`modal-` + page + `-Backdrop`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
				<img src={PancakeModal} className='pancake-modal' />
				<div className="modal-dialog modal-xl modal-dialog-centered">
					<div className="modal-content">
						<div className='container modal-container'>
							<div className='row'>
								<h1 className="modal-title fs-5" id="staticBackdropLabel">{pageInfo.title}</h1>
							</div>

							{(pageInfo.type === "text" || pageInfo.type === "last") && <div className='row model-info'>
								<p className='modal-body'>{pageInfo.body}</p>
							</div>}

							{pageInfo.type === "text-list" && <div className='row model-info'>
								<p className='modal-body'>{pageInfo.body}</p>
								<p className='modal-body'>{pageInfo["body-2"]}</p>
							</div>}

							{pageInfo.type === "video" && <div className='row model-info modal-video-content mt-1'>
								<iframe width="100%" height="100%" src={pageInfo.video} />
							</div>}

							{pageInfo.type === "input" && <div className='row model-info modal-video-content mt-1'>
								<textarea rows={3} placeholder='Type your answer here...' />
							</div>}
							<div className='modal-buttons'>
								{pageInfo.type !== "last" && <NextButton className='modal-continue' type="button" onClick={loadNextModal} data-bs-dismiss="modal">
									Continue
								</NextButton>}

								{pageInfo.type === "last" && <NextButton className='modal-continue' type="button" data-bs-dismiss="modal" onClick={() => {
									navigate('/levels');
									setIsGameComplete(true);
								}}>
									Finish
								</NextButton>}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default NetMiniGame;


