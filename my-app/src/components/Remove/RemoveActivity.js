import React, { useState } from 'react';

import {
	ScreenModal,
	ModalRowText,
	ModalContent,
} from './styles.tsx';
import importData from './removedata.json'

function RemoveActivity(props) {

	const [correctAnswer, setCorrectAnswer] = useState()
	const objectList = (Object.keys(importData)).map((object, i)=> <ModalCards int={i} key={i} object={object}>
		
	</ModalCards>)

	return (
		<div>
			{objectList}
			
		</div>
	)

}

function ModalCards(props) {
	const [textResult, setTextResult] = useState()
	const {object, int} = props;
	const objectData = importData[object]
	console.log(objectData)
	const onClickRemove = () => {
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
		<div>
		<img src='/imgs/sal.png' data-bs-toggle="modal" data-bs-target={"#modal-remove-" + int}></img>
			<ScreenModal className="modal" id={"modal-remove-" + int}  data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
		<div className="modal-dialog modal-lg modal-dialog-centered">
			<ModalContent className="modal-content">
				<div className='container modal-containers'>
					<div className='row'>
						<h1 className="modal-title fs-5 pb-2 text-black" id="staticBackdropLabel">{object}</h1>
					</div>

					<ModalRowText className='row model-info modal-video-content mt-1'>
						{ (textResult === undefined)&&<btn className="removebtn"  onClick={onClickRemove}>Remove from Beach</btn>}
						{ (textResult === undefined)&&<btn className="ignorebtn" onClick={onClickIgnore}>Ignore</btn>}
						<div className="container text-center">
							<p >
								{textResult}
							</p>
						</div>
					</ModalRowText>

					<div className='modal-buttons'>
					</div>
				</div>
			</ModalContent>
		</div>
	</ScreenModal>
		</div>
	)
}




export default RemoveActivity;


