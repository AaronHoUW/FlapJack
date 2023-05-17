import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useRef } from "react";

import {
	User,
	ScreenModal,
	ModalRowText,
	ModalContent,
	Background,
	NextButton,
	PointsContainer
} from './styles.tsx';
import RemoveIgnore from '../Stories/RemoveIgnore.json';
import postRemoveDialogue from '../Stories/postRemoveDialogue.json';

function RemoveActivity(props) {
	// Player Movement
	const [xAxis, setXAxis] = useState(60);
	const [yAxis, setYAxis] = useState(100);
	//correct count of trash picked up
	const [correctCount, setCorrectCount] = useState(0);
	// randomize trash placement from json file
	const [randomizeTtash, setReandomizeTrash] = useState(Object.keys(RemoveIgnore))
	// loads and allows for next page video modal to appear
	const [page, setPage] = useState(100);
	// allows for last trash text result explanation to appear before loading video page modals
	const [lastResult, setLastResult] = useState(false);


	const trash = useRef(null);


	// Change Player's Position
	const userPlacement = { top: yAxis + 'px', left: xAxis + 10 + 'px' };
	const navigate = useNavigate();
	const user = useRef(null);


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

	useEffect(() => {
		user.current.focus()
		setReandomizeTrash(shuffle(Object.keys(RemoveIgnore)))
	}, [shuffle])

	if (lastResult && correctCount === 10) {
		document.getElementById("load-modal-100").click();
	}

	function checkWithinRange() {
		[...Array(10)].forEach((e, i) => {
			const trashPosition = document.getElementById(`trash-image-`+i).getBoundingClientRect();
			if (Math.sqrt((user.current.x - trashPosition.x) ** 2 + (user.current.y - trashPosition.y) ** 2) <= 200) {
				document.getElementById(`trash-image-`+i).classList.add('in-range');	
			} else {
				document.getElementById(`trash-image-`+i).classList.remove('in-range');
			}
		})
	}

	const objectList = randomizeTtash.map((object, i) => <ModalCards int={i} key={i} object={object} user={user} setCorrectCount={setCorrectCount} correctCount={correctCount} setLastResult={setLastResult}>
	</ModalCards>)
	const loadNextPage = () => {
		let newPage = page - 1;
		setPage(newPage);
		document.getElementById("load-modal-" + (page - 1)).click()
	}
	const pageList = Object.keys(postRemoveDialogue[1]).map((pageInfo, i) => <VidCards pageInfo={postRemoveDialogue[1][pageInfo]} page={100 - i} key={i} loadNextModal={loadNextPage}>

	</VidCards>)
	return (
		<div>
			{pageList}
			<Background className='remove-area' onClick={() => user.current.focus()}>
				<PointsContainer>
					<div><p>Correct: {correctCount}</p></div>
				</PointsContainer>
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
		return Math.sqrt((user.current.x - event.target.x) ** 2 + (user.current.y - event.target.y) ** 2) <= 200;
	}

	const removeTrash = (event) => {
		if (isInRange(event) && !solved) {
			document.getElementById("load-modal-" + int).click();
		}
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

export default RemoveActivity;