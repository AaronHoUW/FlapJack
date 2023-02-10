
import React, { useEffect, useRef, useState } from 'react';



function Play() {
	const [xAxis, setXAxis] = useState(60);
	const [yAxis, setYAxis] = useState(100);
	const [opacity, setOpacity] = useState(1);
	const [sealOpacity, setSealOpacity] = useState(.5);
    const myImageStyle = { top: yAxis+'px', left: xAxis+'px' };
	
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

	const ref = useRef(null);
	const seal = useRef(null);

	useEffect(() => {
		ref.current.focus();
		seal.current.focus()
	}, []);

	const handleWithinRange = (event) => {
		if(Math.sqrt((ref.current.x - event.target.x)**2 + (ref.current.y - event.target.y)**2 ) <= 175) {
			console.log("Hello You're within Range, I should make the next thing")
		}
	}

	function checkWithinRange() {
		if(Math.sqrt((ref.current.x - seal.current.x)**2 + (ref.current.y - seal.current.y)**2 ) <= 175) {
			setSealOpacity(1);
		} else {
			setSealOpacity(.5);
		}
	}

    return (
        <div className='play-area' onClick={() => ref.current.focus()}>
            <img style={myImageStyle} ref={ref} tabIndex={-1} onKeyDown={handleKeyDown} onClick={() => console.log(ref.current.x, ref.current.y)}
			src={`/sprites/sprite-user-placeholder.png`} id='playable' className='img-size' alt="something" />
			<img src={`/sprites/sprite-fishing-net.png`} style={{opacity: opacity}} onClick={() => setOpacity(0)} className='img-size' alt="something" />
			<img src={`/sprites/sprite-wendy-whale.png`} ref={seal} style={{ top: '100px', left: '250px', position: 'relative', opacity: sealOpacity}} onClick={handleWithinRange} className='img-size seal' alt="something" />

        </div>
    );
}

export default Play;


