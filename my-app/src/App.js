import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Parents from './components/Parents/Parents';
import Resources from './components/Resources/Resources';
import EditorPage from './components/EditorPage/EditorPage';
import Level1_VisualNovel from './components/VisualNovel/Level1_VN/Level1_VisualNovel';
import Level2_VisualNovel from './components/VisualNovel/Level2_VN/Level2_VisualNovel';
import FlapGuide from './components/FlapjackGuide/FlapGuide';
import Intro from './components/VisualNovel/Intro';
import NetMiniGame from './components/NetMinigame/NetMiniGame';
import Tutorial from './components/Tutorial/Tutorial';
import LEVEL1 from './components/Stories/Level1';
import LEVEL2 from './components/Stories/Level2';
import Quiz from './components/Quiz/Quiz.js'
import LevelsPage from './components/LevelsPage/levelsPage';


function App() {
	const [isFlapGuide, setIsFlapGuide] = useState(false);
	const [isGameComplete, setIsGameComplete] = useState(false);
	const [questionNumber, setQuestionNumber] = useState(0);
	const [amountQuestionsTake, setAmountQuestionsTake] = useState(1);
	const [isQuiz, setIsQuiz] = useState(false);

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
					<Route path='preface' element={
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
								setQuestionNumber={setQuestionNumber}
								setAmountQuestionsTake={setAmountQuestionsTake}
								isQuiz={isQuiz}
								setIsQuiz={setIsQuiz}
							/>
						</>
					} />
					<Route path="/tutorial" element={<Tutorial />} />
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
					<Route path='/levelsPage' element={	<LevelsPage />} />

				</Routes>
			</div>
			{/* <footer /> */}
		</div>
	);
}

export default App;