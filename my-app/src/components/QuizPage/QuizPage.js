import React, { useEffect, useRef, useState } from 'react';
import {
	User,
	Net,
	Flapjack,
    Speech,
    DialogueMessageContainer,
    NextButton,
    Circle
} from './styles.tsx';
// import LEVEL1 from '../innerComp/minigames/data/stories/Level1';
import { useNavigate } from 'react-router-dom';
// import ComicView from '../innerComp/ComicView';

function QuizPage() {

    // UseEffect
	useEffect(() => {
		
	}, []);


    return (
        <div className='play-area'>
			<div className="modal fade" id="modal-2-Backdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
				{/* Pancake Image */}
				<div className="modal-dialog modal-lg modal-dialog-centered">
					<div className="modal-content">
						<div className='container modal-container'>
							<div className='row'>
								<h1 className="modal-title fs-5 pb-2" id="staticBackdropLabel">{"title"}</h1>
							</div>
							<div className='row model-info modal-video-content mt-1'>
								<p className='pt-1' >{"testing"}</p>
							</div>

							<div className='modal-buttons'>
								<button className='modal-continue' type="button" onClick={() => console.log()} data-bs-dismiss="modal">
                                    hello
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
            <Flapjack
				tabIndex={-1}
				src={`/sprites/sprite-pancake-flapjack-octopus.png`}
				className='img-size'
				alt="Pancake the flapjack"
				/>

        </div>
    );
}


export default QuizPage;


