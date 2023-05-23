import React, { useEffect, useRef, useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	User,
	Net,
	Obstacle,
	Whale,
	PointsContainer,
	Trash,
	ScreenModal,
	ModalRowText,
	ModalContent,
	NextButton,
} from './styles.tsx';
import RemoveIgnore from '../Stories/RemoveIgnore.json';
import postRemoveDialogue from '../Stories/postRemoveDialogue.json';

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
	const [trashRemove, setTrashRemove] = useState(0);
	// Change Player's Position
	const userPlacement = { top: yAxis + 'px', left: xAxis + 'px' };
	// Level
	const [level, setLevel] = useState(1)
	const [page, setPage] = useState(1);

	const [randomizeTrash, setRandomizeTrash] = useState(Object.keys(RemoveIgnore));
	const [lastResult, setLastResult] = useState(false);
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
		let px = Math.floor((Math.random() * 350));
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
	const trash4 = useRef(null);
	const square = useRef(null);

	useEffect(() => {
		user.current.focus();

		net.current.focus();
		net2.current.focus();
		net3.current.focus();

		// trash.current.focus();
		// trash2.current.focus();
		// trash3.current.focus();
		// trash4.current.focus();

		// Hard Code
		setNetPlacement({ top: randomPx() + 'px', left: randomPx() + 'px' });
		setNetPlacement2({ top: randomPx() + 'px', left: randomPx() + 'px' });
		setNetPlacement3({ top: randomPx() + 'px', left: randomPx() + 'px' });

		// setTrashPlacement({ top: randomPx() + 'px', left: randomPx() + 'px' });
		// setTrashPlacement2({ top: randomPx() + 'px', left: randomPx() + 'px' });
		// setTrashPlacement3({ top: randomPx() + 'px', left: randomPx() + 'px' });
		// setTrashPlacement4({ top: randomPx() + 'px', left: randomPx() + 'px' });
		document.getElementById('play-area').style.backgroundImage = `url(/sprites/bg-whale-stomach.png)`;

		// square.current.focus();
		// document.getElementById('square').classList.add('hidden');
		// const squareX = square.current.offsetLeft + (square.current.width / 2)
		// const squareY = square.current.offsetTop + (square.current.height / 2)
		// setSquarePoints({
		// 	x: squareX,
		// 	y: squareY,
		// 	leftEdge: squareX - (square.current.width / 2),
		// 	rightEdge: squareX + (square.current.width / 2),
		// 	topEdge: squareY - (square.current.height / 2),
		// 	bottomEdge: squareY + (square.current.height / 2)
		// })
		setRandomizeTrash(shuffle(Object.keys(RemoveIgnore)));
	}, [shuffle]);

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

		// if (Math.sqrt((user.current.x - trash.current.x) ** 2 + (user.current.y - trash.current.y) ** 2) <= 400) {
		// 	document.getElementById('trash').classList.add('in-range');
		// } else {
		// 	document.getElementById('trash').classList.remove('in-range');
		// }

		// if (Math.sqrt((user.current.x - trash2.current.x) ** 2 + (user.current.y - trash2.current.y) ** 2) <= 400) {
		// 	document.getElementById('trash2').classList.add('in-range');
		// } else {
		// 	document.getElementById('trash2').classList.remove('in-range');
		// }

		// if (Math.sqrt((user.current.x - trash3.current.x) ** 2 + (user.current.y - trash3.current.y) ** 2) <= 400) {
		// 	document.getElementById('trash3').classList.add('in-range');
		// } else {
		// 	document.getElementById('trash3').classList.remove('in-range');
		// }

		// if (Math.sqrt((user.current.x - trash4.current.x) ** 2 + (user.current.y - trash4.current.y) ** 2) <= 400) {
		// 	document.getElementById('trash4').classList.add('in-range');
		// } else {
		// 	document.getElementById('trash4').classList.remove('in-range');
		// }
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

	const loadNextPage = () => {
		let newPage = page - 1;
		setPage(newPage);
		document.getElementById("load-modal-" + (page - 1)).click();
	}

	if (lastResult && trashRemove === 10 && netRemove === 3) {
		document.getElementById("load-modal-100").click();
	}

	const objectList = randomizeTrash.map((object, i) => <ModalCards int={i} key={i} object={object} user={user} setCorrectCount={setTrashRemove} correctCount={trashRemove} setLastResult={setLastResult} />);
	const pageList = Object.keys(postRemoveDialogue[1]).map((pageInfo, i) => <VidCards pageInfo={postRemoveDialogue[1][pageInfo]} page={100 - i} key={i} loadNextModal={loadNextPage} />);

	// Note: When finished watching video, it closes with next video
	return (
		<>
			{pageList}
			<div id='play-area' className='play-area' onClick={() => user.current.focus()}>
				<PointsContainer>
					<div><p>Net Removed: {netRemove}</p></div>
					<div><p>Trash Removed: {trashRemove}</p></div>
				</PointsContainer>

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
				{objectList}
			</div>
		</>
	);
}

function ModalCards(props) {
	// text result is the explanation of the remove/ignore
	const [textResult, setTextResult] = useState()
	// Image result is the image of the trash
	const [imageResult, setImageResult] = useState()
	// xPostion of the randomized trash placement
	const [xPosition, setXPosition] = useState()
	// yPostion of the randomized trash placement
	const [yPosition, setYPosition] = useState()
	// correct answer of choosing remove or ignore, based on json data choices
	const [correctAnswer, setCorrectAnswer] = useState()


	const { object, int, user } = props;
	const objectData = RemoveIgnore[object]
	const item = useRef(null);

	const [solved, setSolved] = useState(false)

	const { setCorrectCount, correctCount, setLastResult } = props;

	const isInRange = (event) => {
		if (Math.sqrt((user.current.x - event.target.x) ** 2 + (user.current.y - event.target.y) ** 2) <= 500) {
			return true
		}
		return false
	}

	const removeTrash = (event, targetID) => {
		if (isInRange(event), !solved) {
			loadModal();
		}
	}

	const loadModal = () => {
		document.getElementById("load-modal-" + int).click();
	}

	const onLoad = () => {
		setImageResult(objectData.image)
		setXPosition((Math.random() * 250) + 50)
		setYPosition((Math.random() * 250) + 50)
	}

	const onClickRemove = () => {
		setImageResult(objectData.image)
		if (objectData.remove) {
			setCorrectCount(correctCount + 1)
			setTextResult(objectData.correct)
			document.getElementById("trash-image-" + int).classList.add('hidden');
			setCorrectAnswer(true)
			setSolved(true)

		}
		else {
			setTextResult(objectData.incorrect)
			setCorrectAnswer(false)
		}


	}
	const onClickIgnore = () => {
		if (!objectData.remove) {
			setTextResult(objectData.correct)
			setCorrectAnswer(true)
			setCorrectCount(correctCount + 1)
			setSolved(true)
		}
		else {
			setTextResult(objectData.incorrect)
			setCorrectAnswer(false)
		}
	}
	const closeModal = () => {
		setTextResult();
		setCorrectAnswer();
		if (correctCount === 10) {
			setLastResult(true)
		}

	}
	return (
		<>
			{/* <a  /> */}
			<img className='trash sprite-normal' onClick={(event) => removeTrash(event, "modal-remove-" + int)} style={{ top: yPosition, left: xPosition }} id={"trash-image-" + int} ref={item} src='./sprites/sprite-trash.png'></img>
			<a onLoad={onLoad} id={"load-modal-" + int} data-bs-toggle="modal" data-bs-target={`#modal-` + int + `-Backdrop`} >
				<ScreenModal className="modal" id={`modal-` + int + `-Backdrop`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
					<div className="modal-dialog modal-lg modal-dialog-centered">
						<img className='pancake' src='./sprites/sprite-pancake-flapjack-octopus.png'></img>
						<ModalContent className="modal-content">
							<div className='container modal-containers'>
								<img className='picture' src={imageResult} />

								<ModalRowText className='row model-info modal-video-content mt-1'>
									<h1 className="removeTitle" id="staticBackdropLabel">{object}</h1>
									{(textResult === undefined) && <button className="removebtn" onClick={onClickRemove}>Remove from Beach</button>}
									{(textResult === undefined) && <button className="ignorebtn" onClick={onClickIgnore}>Ignore</button>}
									<div />
									<div className="container text-container">
										<p className="post">
											{/* {textResult} */}
											{(correctAnswer &&
												<p><span className='text-success'>Correct!</span> {textResult}</p>) || (correctAnswer !== undefined && <p><span className='text-danger'>Uh Oh!</span> {textResult}</p>)}
										</p>
									</div>
								</ModalRowText>
								<button className='next' type="button" data-bs-dismiss="modal" onClick={closeModal}>Next</button>
							</div>
						</ModalContent>
					</div>
				</ScreenModal>
			</a>
		</>
	);
};

function shuffle(array) {
	return array.sort(() => Math.random() - .5);
}

export function VidCards(props) {
	const { pageInfo, page, loadNextModal, setIsGameComplete } = props
	const navigate = useNavigate();
	return (
		<>
			<a id={`load-modal-` + page} data-bs-toggle="modal" data-bs-target={`#modal-` + page + `-Backdrop`} />
			<div className="modal fade" id={`modal-` + page + `-Backdrop`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
				<img src='./sprites/sprite-pancake-flapjack-octopus.png' className='pancake-modal' />
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
								<textarea rows={3} placeholder="Type your answer here..." />
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

export default WhaleMinigame;

