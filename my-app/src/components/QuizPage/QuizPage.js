import React, { useEffect, useRef, useState } from 'react';
import {
	Flapjack,
    ScreenModal,
	ModalRowText,
    ModalContent
} from './styles.tsx';
import importQuestions from './questions.json'

function QuizPage() {
	// UseState Questions
	const [questionNumber, setQuestionNumber] = useState(0)
	const [displayQuestion, setDisplayQuestion] = useState({Question: "", Choices: []})
	// Results
	const [resultsText, setResultText] = useState()
	const [correctAnswer, setCorrectAnswer] = useState()
	// Imported Questions from json
	const questionList = importQuestions;

	// UseEffect
	useEffect(() => {
		setDisplayQuestion({
			Question: (Object.keys(questionList)[questionNumber]),
			Choices: shuffle(Object.keys(questionList[(Object.keys(questionList)[questionNumber])].answers)),
			AnswersResults: questionList[(Object.keys(questionList)[questionNumber])].answers,
			Correct: questionList[(Object.keys(questionList)[questionNumber])].correct,
			Wrong: questionList[(Object.keys(questionList)[questionNumber])].wrong
		})
	}, [questionNumber, shuffle]);

	const displayAnswer = displayQuestion["Choices"].map((answer, i) => {
		const handleOnClick = () => {
			if(answer, displayQuestion.AnswersResults[answer]) {
				setResultText(displayQuestion.Correct)
				setCorrectAnswer(true)
			} else {
				setResultText(displayQuestion.Wrong)
				setCorrectAnswer(false)
			}
		}
		return (
			<div className="col-6 " key={i} onClick={handleOnClick}>{answer}</div>
		)
	})

    return (
        <div className='play-area'>
			<ScreenModal className="" id="modal-2-Backdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
				{/* Pancake Image */}
				<div className="modal-dialog modal-lg modal-dialog-centered">
					<ModalContent className="modal-content">
						<div className='container modal-container'>
							<div className='row'>
								<h1 className="modal-title fs-5 pb-2 text-black" id="staticBackdropLabel">Time to Test Your Scuba Knowledge!</h1>
							</div>
							
							<ModalRowText className='row model-info modal-video-content mt-1'>
								<p className='pt-1' >{displayQuestion.Question}</p>
                                <div className="container text-center">
                                    <div className="row justify-content-center">
                                        {displayAnswer}
                                    </div>
									<div className="row justify-content-center pt-3">
                                        {correctAnswer && <p className='text-success'>Correct!</p>} {resultsText} 
                                    </div>
                                </div>
							</ModalRowText>

							<div className='modal-buttons'>
								<button className='modal-continue' type="button" onClick={() => console.log("This shouldn't work")}>
                                    hello
								</button>
							</div>
						</div>
					</ModalContent>
				</div>
			</ScreenModal>
            <Flapjack
				tabIndex={-1}
				src={`/sprites/sprite-pancake-flapjack-octopus.png`}
				className='img-size'
				alt="Pancake the flapjack"
				/>

        </div>
    );
}

function DateNotes(props) {
	console.log('testing')
    return (
        <li className="list-group-item">
            {props.note}
        </li>
    );
}

function shuffle(array) {
	const shuffleArray = array.sort(() => Math.random() - .5);
	return shuffleArray;
}

export default QuizPage;


