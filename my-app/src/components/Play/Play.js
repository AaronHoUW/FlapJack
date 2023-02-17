import React, { useEffect, useRef, useState } from 'react';
import {
	Fish,
	Modal,
	ModalContent,
} from './styles.tsx';
import LEVEL1 from '../innerComp/minigames/data/stories/Level1';
import { useNavigate } from 'react-router-dom';
import ComicView from '../innerComp/ComicView';

function Play() {
	const [xAxis, setXAxis] = useState(60);
	const [yAxis, setYAxis] = useState(100);
    const myImageStyle = { top: yAxis+'px', left: xAxis+'px' };
	const navigate = useNavigate();

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

	const user = useRef(null);
	const fish = useRef(null);
	const net = useRef(null);

	useEffect(() => {
		user.current.focus();
		fish.current.focus();
		net.current.focus();
	}, []);

	const handleWithinRange = (event) => {
		if(Math.sqrt((user.current.x - event.target.x)**2 + (user.current.y - event.target.y)**2 ) <= 250) {
			console.log(LEVEL1.pancakeIntro);
			navigate('/level1');
			// for (const scene in LEVEL1) {
			// 	if (scene.type === 'comic') {
			// 		return (
			// 			<Modal style={{backgroundImage: `url(${scene.background})`}}>
			// 				<ModalContent>
			// 					{scene.dialogue.map((text) => {
			// 						if (text.speaker) {
			// 							return (
			// 								<div id='dialogue' className={`dialogue-${text.type}`}>
			// 									<img src='/sprites/misc-textbubble.png' alt='text bubble for speaker' />
			// 								</div>
			// 							);
			// 						}
			// 					})}
			// 				</ModalContent>
			// 			</Modal>
			// 		);
			// 	}
			// }
			// // const intro = LEVEL1.pancakeIntro;
			// // const scenes = LEVEL1.forEach((scene) => {
			// // 	console.log(scene);
			// // });
			// for (const scene in LEVEL1) {
			// 	console.log(scene);
			// 	console.log(LEVEL1[scene]);

			// 	if (scene.type === 'comic') {
			// 		return (
			// 			<ComicView
			// 				sceneName={scene.sceneName}
			// 				background={scene.background}
			// 				frame={scene.frame}
			// 				dialogue={scene.dialogue}
			// 				decision={scene.decision}
			// 			/>
			// 		)
			// 	}
			// }
			// // return (
			// // 	<div id='storyteller'>
			// // 		<div id='storyteller-view'>
			// // 			<ComicView
							
			// // 			/>
			// // 		</div>
			// // 	</div>
			// // );
		}
	}

	function checkWithinRange() {
		if(Math.sqrt((user.current.x - fish.current.x)**2 + (user.current.y - fish.current.y)**2 ) <= 250) {
			document.getElementById('sally-salmon').classList.add('in-range');
		} else {
			document.getElementById('sally-salmon').classList.remove('in-range');
		}

		if(Math.sqrt((user.current.x - net.current.x)**2 + (user.current.y - net.current.y)**2 ) <= 250) {
			document.getElementById('net').classList.add('in-range');
		} else {
			document.getElementById('net').classList.remove('in-range');
		}
	}

	const removeNet = (event) => {
		if(Math.sqrt((user.current.x - event.target.x)**2 + (user.current.y - event.target.y)**2 ) <= 250) {
			event.target.classList.add('hidden');
		}
	}

    return (
        <div className='play-area' onClick={() => user.current.focus()}>
			{/* User */}
            <img
				style={myImageStyle}
				ref={user}
				tabIndex={-1}
				onKeyDown={handleKeyDown}
				src={`/sprites/sprite-user-placeholder.png`}
				id='playable'
				className='img-size'
				alt="User's character"
			/>
			{/* Net 1 */}
			<img
				src={`/sprites/sprite-fishing-net.png`}
				ref={net}
				onClick={removeNet}
				className='img-size'
				alt="Net"
				id='net'
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


