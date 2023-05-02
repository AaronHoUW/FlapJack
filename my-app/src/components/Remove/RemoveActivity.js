import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useRef } from "react";
import { NextButton } from '../VisualNovel/styles.tsx';
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
	  if (Math.sqrt((user.current.x - fish.current.x) ** 2 + (user.current.y - fish.current.y) ** 2) <= 400) {
		document.getElementById('transition').classList.add('in-range');
	  } else {
		document.getElementById('transition').classList.remove('in-range');
	  }
	}
	const objectList = (Object.keys(importData)).map((object, i)=> <ModalCards int={i} key={i} object={object}>
		
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
	const [imageResult, setImageResult] = useState ()
	const [xPosition, setXPosition] = useState ()
	const [yPosition, setYPosition] = useState ()
	const [reponseResult, setResponeResult] = useState ()
	const [correctText, setCorretText] = useState()
	const {object, int} = props;
	const objectData = importData[object]
	const navigate = useNavigate();
	const user = useRef(null);
	const fish = useRef(null);
	const [displayButton, setDisplayButton] = useState(true);

	const handleWithinRange = (event) => {
		if (Math.sqrt((user.current.x - event.target.x) ** 2 + (user.current.y - event.target.y) ** 2) <= 400) {
		  navigate('/level1');
		}
	  }
	
	  function checkWithinRange() {
		if (Math.sqrt((user.current.x - fish.current.x) ** 2 + (user.current.y - fish.current.y) ** 2) <= 400) {
		  document.getElementById('transition').classList.add('in-range');
		} else {
		  document.getElementById('transition').classList.remove('in-range');
		}
	  }

	const onLoad = () => {
		setImageResult(objectData.image)
		setXPosition(Math.random() * 10000)
		setYPosition(Math.random() * 700)
	}
	console.log(objectData)
	const onClickRemove = () => {
		setImageResult(objectData.image)
		if(objectData.remove) {
			setTextResult(objectData.correct)
			
		}
		else
		{
			setTextResult(objectData.incorrect)
			
		}
		
		
	}
	const onClickIgnore = () => {
		if(!objectData.remove) {
			setTextResult(objectData.correct)
			
		}
		else
		{
			setTextResult(objectData.incorrect)
			
		}
	}
	return (
		

		<div onLoad={onLoad}>
		<img className='trash' style={{top: yPosition, left: xPosition}} id="transition" ref={fish} src='./sprites/sprite-trash.png' onClick={handleWithinRange} data-bs-toggle="modal" data-bs-target={"#modal-remove-" + int}></img>
			<ScreenModal className="modal" id={"modal-remove-" + int}  data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
		<div className="modal-dialog modal-lg modal-dialog-centered">
		<img className='pancake' src='./sprites/sprite-pancake-flapjack-octopus.png'></img>
			<ModalContent className="modal-content">
				<div className='container modal-containers'>
					<div className='row'>
						<img className='picture' src={imageResult}/>
					</div>

					<ModalRowText className='row model-info modal-video-content mt-1'>
						<h1 className="removeTitle" id="staticBackdropLabel">{object}</h1>
						{ (textResult === undefined)&&<btn className="removebtn"  onClick={onClickRemove}>Remove from Beach</btn>}
						{ (textResult === undefined)&&<btn className="ignorebtn" onClick={onClickIgnore}>Ignore</btn>}
						<div className="container text-container">
							<p className="post">
								{textResult}
							</p>
						</div>
					</ModalRowText>

					<div className='modal-buttons'>
					</div>
					<NextButton onClick={ModalCards}>Next</NextButton>
				</div>
			</ModalContent>
		</div>
	</ScreenModal>
			  {/* <img className="fish sprite-container" id="transition" ref={fish} src='./sprites/sprite-shawn-seagull.png' onClick={handleWithinRange} /> */}
			
		  </div>
		);
	  };




export default RemoveActivity;


