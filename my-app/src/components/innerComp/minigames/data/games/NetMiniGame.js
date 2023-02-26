import React, { useEffect, useRef, useState } from 'react';
import {
	User,
	Net,
} from './NetMiniGame.tsx';
import postGameDialouge from './postGameDialouge.json'
import { useNavigate } from 'react-router-dom';
import PancakeModal from './PancakeModal.png';


function NetMiniGame(props) {
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

    console.log(level);

    if(netRemove === 3) {
        document.getElementById("testing").click();
    }

    const handleKeyDown = event => {
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
		if(Math.sqrt((user.current.x - net.current.x)**2 + (user.current.y - net.current.y)**2 ) <= 400) {
			document.getElementById('net').classList.add('in-range');
		} else {
			document.getElementById('net').classList.remove('in-range');
		}

		if(Math.sqrt((user.current.x - net2.current.x)**2 + (user.current.y - net2.current.y)**2 ) <= 400) {
			document.getElementById('net2').classList.add('in-range');
		} else {
			document.getElementById('net2').classList.remove('in-range');
		}

		if(Math.sqrt((user.current.x - net3.current.x)**2 + (user.current.y - net3.current.y)**2 ) <= 400) {
			document.getElementById('net3').classList.add('in-range');
		} else {
			document.getElementById('net3').classList.remove('in-range');
		}
	}

	const removeNet = (event) => {
		if(Math.sqrt((user.current.x - event.target.x)**2 + (user.current.y - event.target.y)**2 ) <= 500) {
			event.target.classList.add('hidden');
			setNetRemove(netRemove + 1);
		}
	}

	console.log(postGameDialouge);

    return (
        <>
        <a id="testing" data-bs-toggle="modal" data-bs-target="#staticBackdrop" />
		<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
			{/* Pancake Image */}
			{/* <img src={PancakeModal} className='pancake-modal'/> */}
			<div className="modal-dialog">
				<div className="modal-content">
					<div className='container'>
						<div className='row'>
							<h1 className="modal-title fs-5" id="staticBackdropLabel">Great job removing the nets!</h1>
						</div>
						<div className='row model-info'>
							<p>Users</p>
						</div>
						<div className='modal-buttons'>
							<button type="button" className="btn btn-secondary me-1" data-bs-dismiss="modal">Close</button>
							<button type="button" className="btn btn-primary">Understood</button>
						</div>
					</div>
				</div>
			</div>
        </div>
        <div className='play-area' onClick={() => user.current.focus()}>
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


