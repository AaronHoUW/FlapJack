import React, { useEffect, useRef, useState, useMemo } from 'react';
import {
	Fish,
	User,
	Net
} from './styles.tsx';

function Play() {
	const [xAxis, setXAxis] = useState(60);
	const [yAxis, setYAxis] = useState(100);
	const [fishPlacement, setFishPlacement] = useState({});
	const [netPlacement, setNetPlacement] = useState({});
    const userPlacement = { top: yAxis + 'px', left: xAxis + 'px' };

    const handleKeyDown = event => {
		if(event.key === 'ArrowRight') {
			setXAxis(xAxis + 10)
		}
		if(event.key === 'ArrowLeft') {
			setXAxis(xAxis - 10)
		}
		if(event.key === 'ArrowDown') {
			setYAxis(yAxis + 10)
		}
		if(event.key === 'ArrowUp') {
			setYAxis(yAxis - 10)
		}
		checkWithinRange();
	};

	function randomPx() {
		let px = Math.floor((Math.random() * 250) + 50);
		return px;
	}

	const user = useRef(null);
	const fish = useRef(null);
	const net = useRef(null);

	useEffect(() => {
		user.current.focus();
		fish.current.focus();
		net.current.focus();
		setFishPlacement({ top: randomPx() + 'px', left: randomPx() + 'px' });
		setNetPlacement({ top: randomPx() + 'px', left: randomPx() + 'px' });
	}, []);

	const handleWithinRange = (event) => {
		if(Math.sqrt((user.current.x - event.target.x)**2 + (user.current.y - event.target.y)**2 ) <= 200) {
			console.log("Hello You're within Range, I should make the next thing");
		}
	}

	function checkWithinRange() {
		if(Math.sqrt((user.current.x - fish.current.x)**2 + (user.current.y - fish.current.y)**2 ) <= 200) {
			document.getElementById('sally-salmon').classList.add('in-range');
		} else {
			document.getElementById('sally-salmon').classList.remove('in-range');
		}

		if(Math.sqrt((user.current.x - net.current.x)**2 + (user.current.y - net.current.y)**2 ) <= 200) {
			document.getElementById('net').classList.add('in-range');
		} else {
			document.getElementById('net').classList.remove('in-range');
		}
	}

	const removeNet = (event) => {
		if(Math.sqrt((user.current.x - event.target.x)**2 + (user.current.y - event.target.y)**2 ) <= 200) {
			event.target.classList.add('hidden');
		}
	}

    return (
        <div className='play-area' onClick={() => user.current.focus()}>
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
			{/* Fish */}
			<Fish
				style={fishPlacement}
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


