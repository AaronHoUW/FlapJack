import React, { useEffect, useRef, useState } from 'react';
import {
	Fish,
	User,
	Net,
} from './styles.tsx';
import LEVEL1 from '../innerComp/minigames/data/stories/Level1';
import { useNavigate } from 'react-router-dom';
import ComicView from '../innerComp/ComicView';

function Play() {
	// Player Movement
	const [xAxis, setXAxis] = useState(60);
	const [yAxis, setYAxis] = useState(100);
	// Pancake Movement
	// const [20, 80] = useState(20);
	// const [80, 20] = useState(80);
	// Nets
	const [netPlacement, setNetPlacement] = useState({});
	const [netPlacement2, setNetPlacement2] = useState({});
	const [netPlacement3, setNetPlacement3] = useState({});
	const [netRemove, setNetRemove] = useState(0);
	// Change Player's Position
	const userPlacement = { top: yAxis + 'px', left: xAxis + 'px' };
	const navigate = useNavigate();

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
		// console.log(document.getElementById('net'))
	};


	function randomPx() {
		let px = Math.floor((Math.random() * 250) + 50);
		return px;
	}

	const user = useRef(null);
	const fish = useRef(null);
	const flapjack = useRef(null);
	// Hard Code
	const net = useRef(null);
	const net2 = useRef(null);
	const net3 = useRef(null);

	useEffect(() => {
		user.current.focus();
		fish.current.focus();
		flapjack.current.focus();

		net.current.focus();
		net2.current.focus();
		net3.current.focus();

		// Hard Code
		setNetPlacement({ top: randomPx() + 'px', left: randomPx() + 'px' });
		setNetPlacement2({ top: randomPx() + 'px', left: randomPx() + 'px' })
		setNetPlacement3({ top: randomPx() + 'px', left: randomPx() + 'px' })
	}, []);

	const handleWithinRange = (event) => {
		if(Math.sqrt((user.current.x - event.target.x)**2 + (user.current.y - event.target.y)**2 ) <= 400) {
			navigate('/level1');
		}
	}

	function checkWithinRange() {
		if(Math.sqrt((user.current.x - fish.current.x)**2 + (user.current.y - fish.current.y)**2 ) <= 400) {
			document.getElementById('sally-salmon').classList.add('in-range');
		} else {
			document.getElementById('sally-salmon').classList.remove('in-range');
		}

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

    return (
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
			{/* Fish */}
			<Fish
				src={`/sprites/sprite-sally-salmon.png`}
				ref={fish}
				onClick={handleWithinRange}
				className='img-size seal'
				id='sally-salmon'
				alt="Sally the salmon"
			/>

        </div>
    );
}


export default Play;


