import React, { useEffect, useRef, useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	User,
	Net,
} from './NetMiniGame.tsx';
import postGameDialogue from './postGameDialogue.json';
import PancakeModal from './PancakeModal.png';
import continueButton from './ContinueButton.png';
import locationButton from './LocationButton.png';
import finishButton from './FinishButton.png'

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
		if (event.key === 'ArrowRight') {
			setXAxis(xAxis + 50)
		}
		if (event.key === 'ArrowLeft') {
			setXAxis(xAxis - 50)
		}
		if (event.key === 'ArrowDown') {
			setYAxis(yAxis + 50)
		}
		if (event.key === 'ArrowUp') {
			setYAxis(yAxis - 50)
		}
		checkWithinRange();
	};

	function randomPx() {
		let px = Math.floor((Math.random() * 250) + 50);
		return px;
	}

	const user = useRef(null);
	// Hard Code
	const net = useRef(null);
	const net2 = useRef(null);
	const net3 = useRef(null);

	useEffect(() => {
		user.current.focus();

		net.current.focus();
		net2.current.focus();
		net3.current.focus();

		// Hard Code
		setNetPlacement({ top: randomPx() + 'px', left: randomPx() + 'px' });
		setNetPlacement2({ top: randomPx() + 'px', left: randomPx() + 'px' })
		setNetPlacement3({ top: randomPx() + 'px', left: randomPx() + 'px' })
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
	}

	const removeNet = (event) => {
		if (Math.sqrt((user.current.x - event.target.x) ** 2 + (user.current.y - event.target.y) ** 2) <= 500) {
			event.target.classList.add('hidden');
			setNetRemove(netRemove + 1);
		}
	}

	const loadNextModal = () => {
		setPage(2);
		document.getElementById("load-modal-2").click();
	}

	const loadNextLevel = () => {
		// Load Beach Level
		if (level === 1) {
			document.getElementById('play-area').style.backgroundImage = `url(/sprites/bg-beach-level.png)`;
		} else if (level === 2) {
			document.getElementById('play-area').style.backgroundImage = `url(/sprites/bg-deep-see-level.png)`;
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
			<a id="load-modal-1" data-bs-toggle="modal" data-bs-target="#modal-1-Backdrop" />
			<div className="modal fade" id="modal-1-Backdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
				{/* Pancake Image */}
				<img src={PancakeModal} className='pancake-modal'/>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className='container modal-container'>
							<div className='row'>
								<h1 className="modal-title fs-5" id="staticBackdropLabel">{postGameDialogue[level]['page-1'].title}</h1>
							</div>
							<div className='row model-info'>
								<p className='modal-body'>{postGameDialogue[level]['page-1'].body}</p>
							</div>
							<div className='modal-buttons'>
								<button className='modal-continue' type="button" onClick={loadNextModal} data-bs-dismiss="modal">
									<img src={continueButton} className='modal-button-img' />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<a id="load-modal-2" data-bs-toggle="modal" data-bs-target="#modal-2-Backdrop" />
			<div className="modal fade" id="modal-2-Backdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
				{/* Pancake Image */}
				<img src={PancakeModal} className='pancake-modal'/>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className='container modal-container'>
							<div className='row'>
								<h1 className="modal-title fs-5 pb-2" id="staticBackdropLabel">{postGameDialogue[level]['page-2'].title}</h1>
							</div>
							<div className='row model-info modal-video-content'>
								<iframe width="100%" height="100%" src={postGameDialogue[level]['page-2'].video} />
								<p className='pt-1' >{postGameDialogue[level]['page-2'].body}</p>
							</div>

							<div className='modal-buttons'>
								<button className='modal-continue' type="button" onClick={loadNextLevel} data-bs-dismiss="modal">
									{(level < 3) && <img src={locationButton} className='modal-button-img' />}
									{(level === 3) && <img src={finishButton} className='modal-button-img' onClick={() => {
										navigate('/level1');
										setIsGameComplete(true);
									}}/>}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id='play-area' className='play-area' onClick={() => user.current.focus()}>
				<span className="badge text-bg-secondary net-counter">Net Removed: {netRemove}</span>
				{/* User */}
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
			</div>
		</>
	);
}


export default NetMiniGame;


