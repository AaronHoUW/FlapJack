import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Parents from './components/Parents/Parents';
import Resources from './components/Resources/Resources';
import EditorPage from './components/EditorPage/EditorPage';
import Levels from './components/Levels/Levels';

import Intro from './components/VisualNovel/Intro';
import NetMiniGame from './components/NetMinigame/NetMiniGame';
import Tutorial from './components/Tutorial/Tutorial';
import Quiz from './components/Quiz/Quiz.js'

import FlapGuide from './components/FlapjackGuide/FlapGuide';
import SeaGuide from './components/SeagullGuide/SeaGuide';

import Level1_VisualNovel from './components/VisualNovel/Level1_VN/Level1_VisualNovel';
import Level2_VisualNovel from './components/VisualNovel/Level2_VN/Level2_VisualNovel';
import Level3_VisualNovel from './components/VisualNovel/Level3_VN/Level3_VisualNovel';

import LEVEL1 from './components/Stories/Level1';
import LEVEL2 from './components/Stories/Level2';
import LEVEL3 from './components/Stories/Level3';
import RemoveActivity from './components/Remove/RemoveActivity';

function App() {
	const [currentLevel, setCurrentLevel] = useState(1);
	const [isFlapGuide, setIsFlapGuide] = useState(false);
	const [isSeaGuide, setIsSeaGuide] = useState(false);
	const [isGameComplete, setIsGameComplete] = useState(false);
	const [questionNumber, setQuestionNumber] = useState(1);
	const [amountQuestionsTake, setAmountQuestionsTake] = useState(1);
	const [isQuiz, setIsQuiz] = useState(false);
	const [isRemoveActivity, setIsRemoveActivity] = useState(false)

	return (
		<div className='page-container'>
			<div className='fill-content'>
				<Routes>
					<Route path='/' element={
						<>
							<Navbar />
							<Home />
						</>
					} />
					<Route path='/about' element={
						<>
							<Navbar />
							<About />
						</>
					} />
					<Route path='/parents' element={
						<>
							<Navbar />
							<Parents />
						</>
					} />
					<Route path='/resources' element={
						<>
							<Navbar />
							<Resources />
						</>
					} />
					<Route path='/levels' element={
						<>
							<Navbar />
							<Levels setQuestionNumber={setQuestionNumber}/>
						</>
					} />
					<Route path='/play' element={
						<>
							<NetMiniGame isGameComplete={isGameComplete} setIsGameComplete={setIsGameComplete} />
						</>
					} />
					<Route path='/flapguide' element={
						<>
							<FlapGuide isFlapGuide={isFlapGuide} setIsFlapGuide={setIsFlapGuide} />
						</>
					} />
					<Route path='/seaguide' element={
						<>
							<SeaGuide isSeaGuide={isSeaGuide} setIsSeaGuide={setIsSeaGuide} />
						</>
					} />
					<Route path='/preface' element={
						<>
							<Intro />
							<NavLink className='exit-play' to='/'>Exit</NavLink>
						</>
					} />
					<Route path='level1' element={
						<>
							<Level1_VisualNovel
								level={LEVEL1}
								isFlapGuide={isFlapGuide}
								setIsFlapGuide={setIsFlapGuide}
								isGameComplete={isGameComplete}
								setIsGameComplete={setIsGameComplete}
								questionNumber={questionNumber}
								setQuestionNumber={setQuestionNumber}
								setAmountQuestionsTake={setAmountQuestionsTake}
								isRemoveActivity={isRemoveActivity}
								setIsRemoveActivity={setIsRemoveActivity}
								isQuiz={isQuiz}
								setIsQuiz={setIsQuiz}
								setCurrentLevel={setCurrentLevel}
							/>
						</>
					} />
					<Route path='level2' element={
						<>
							<Level2_VisualNovel
								level={LEVEL2}
								isFlapGuide={isFlapGuide}
								setIsFlapGuide={setIsFlapGuide}
								isGameComplete={isGameComplete}
								setIsGameComplete={setIsGameComplete}
								questionNumber={questionNumber}
								setQuestionNumber={setQuestionNumber}
								setAmountQuestionsTake={setAmountQuestionsTake}
								isQuiz={isQuiz}
								setIsQuiz={setIsQuiz}
								setCurrentLevel={setCurrentLevel}
							/>
						</>
					} />
					<Route path='level3' element={
						<>
							<Level3_VisualNovel
								level={LEVEL3}
								isFlapGuide={isFlapGuide}
								setIsFlapGuide={setIsFlapGuide}
								isGameComplete={isGameComplete}
								setIsGameComplete={setIsGameComplete}
								questionNumber={questionNumber}
								setQuestionNumber={setQuestionNumber}
								setAmountQuestionsTake={setAmountQuestionsTake}
								isQuiz={isQuiz}
								setIsQuiz={setIsQuiz}
								setCurrentLevel={setCurrentLevel}
							/>
						</>
					} />
					<Route path="/tutorial" element={<Tutorial currentLevel={currentLevel} />} />
					<Route path='/quiz' element={
						<Quiz
							questionNumber={questionNumber}
							setQuestionNumber={setQuestionNumber}
							amountQuestionsTake={amountQuestionsTake}
							setAmountQuestionsTake={setAmountQuestionsTake}
							isQuiz={isQuiz}
							setIsQuiz={setIsQuiz}
						/>
					} />
					<Route path='/storyteller/editor' element={<EditorPage />} />
					<Route path='/secretactivity' element={<RemoveActivity />} />
				</Routes>
			</div>
			{/* <footer /> */}
		</div>
	);
}

export default App;
