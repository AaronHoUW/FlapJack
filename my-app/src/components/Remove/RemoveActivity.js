import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useRef } from "react";
import { NextButton } from '../VisualNovel/styles.tsx';
import nextButton from './next-button.png'
import {
	User,
	ScreenModal,
	ModalRowText,
	ModalContent,
	Background

} from './styles.tsx';
import importData from './removedata.json'


function RemoveActivity(props) {

	// Player Movement
	const [xAxis, setXAxis] = useState(60);
	const [yAxis, setYAxis] = useState(100);
	const [trashRemove, setTrashRemove] = useState(0);
	const trash = useRef(null);


	// Change Player's Position
	const userPlacement = { top: yAxis + 500 + 'px', left: xAxis + 10 + 'px' };
	const navigate = useNavigate();
	const user = useRef(null);
	const fish = useRef(null);


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


	function checkWithinRange() {
		if (Math.sqrt((user.current.xAxis - fish.current.xAxis) ** 2 + (user.current.yAxis - fish.current.yAxis) ** 2) <= 400) {
			document.getElementById('transition').classList.add('in-range');
		} else {
			document.getElementById('transition').classList.remove('in-range');
		}
	}
	const objectList = (Object.keys(importData)).map((object, i) => <ModalCards int={i} key={i} object={object} user={user}>

	</ModalCards>)

	return (
		<div>
			<Background className='remove-area'>
				{/* User */}
				<User
					style={userPlacement}
					ref={user}
					tabIndex={-1}
					onKeyDown={handleKeyDown}
					src={`/sprites/sprite-user-placeholder.png`}
					id='one-playable'
					className='img-size'
					alt="User's placeholder"
				/>
				{objectList}
			</Background>
		</div>
	)

}

function ModalCards(props) {
	const [textResult, setTextResult] = useState()
	const [imageResult, setImageResult] = useState()
	const [xPosition, setXPosition] = useState()
	const [yPosition, setYPosition] = useState()
	const [reponseResult, setResponeResult] = useState()
	const [correctText, setCorretText] = useState()
	const { object, int, user } = props;
	const objectData = importData[object]
	const navigate = useNavigate();
	const fish = useRef(null);
	const [displayButton, setDisplayButton] = useState(true);
	const [trashRemove, setTrashRemove] = useState(0);


	const isInRange = (event) => {
		if (Math.sqrt((user.current.x - event.target.x) ** 2 + (user.current.y - event.target.y) ** 2) <= 500) {
			return true
		}
		return false
	}

	const enableRemoveTrash = (event, targetID) => {
		console.log("THIS IS HOVER")
		if (isInRange(event)) {
		event.target.setAttribute("data-bs-toggle","modal")
		event.target.setAttribute("data-bs-target","#" + targetID)
		}
	}

	const removeTrash = (event, targetID) => {
		console.log("THIS IS CLICK")
		console.log(targetID)
		console.log(user)
		console.log(event)
		if (isInRange(event)) {
				event.target.classList.add('hidden');
				setTrashRemove(trashRemove + 1);
			console.log(document.getElementById(targetID))
			document.getElementById(targetID).style.visibility = "visable";
		} 
	}

	const onLoad = () => {
		setImageResult(objectData.image)
		setXPosition(Math.random() * 2000)
		setYPosition(Math.random() * 100)
	}


	console.log(objectData)
	const onClickRemove = () => {
		setImageResult(objectData.image)
		if (objectData.remove) {
			setTextResult(objectData.correct)

		}
		else {
			setTextResult(objectData.incorrect)

		}


	}
	const onClickIgnore = () => {
		if (!objectData.remove) {
			setTextResult(objectData.correct)

		}
		else {
			setTextResult(objectData.incorrect)

		}
	}
	return (


		<div onClick={(event)=>removeTrash(event, "modal-remove-" + int)} onLoad={onLoad} onMouseEnter={(event)=>enableRemoveTrash(event, "modal-remove-" + int)}>
			<img className='trash' style={{ top: yPosition, left: xPosition }} id="transition" ref={fish} src='./sprites/sprite-trash.png'></img>
			<ScreenModal className="modal" id={"modal-remove-" + int} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
				<div className="modal-dialog modal-lg modal-dialog-centered">
					<img className='pancake' src='./sprites/sprite-pancake-flapjack-octopus.png'></img>
					<ModalContent className="modal-content">
						<div className='container modal-containers'>
							<img className='picture' src={imageResult} />

							<ModalRowText className='row model-info modal-video-content mt-1'>
								<h1 className="removeTitle" id="staticBackdropLabel">{object}</h1>
								{(textResult === undefined) && <btn className="removebtn" onClick={onClickRemove}>Remove from Beach</btn>}
								{(textResult === undefined) && <btn className="ignorebtn" onClick={onClickIgnore}>Ignore</btn>}
								<div />
								<div className="container text-container">
									<p className="post">
										{textResult}
									</p>
								</div>
							</ModalRowText>
							<button className='next' type="button" data-bs-dismiss="modal">Next</button>
						</div>
					</ModalContent>
				</div>

			</ScreenModal>
		</div>
	);
};




export default RemoveActivity;


