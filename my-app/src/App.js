import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import About from './components/About';
import Parents from './components/Parents/Parents';
import Resources from './components/Resources';
import EditorPage from './components/EditorPage';
import VisualNovel from './components/VisualNovel/VisualNovel';
import FlapGuide from './components/FlapjackGuide/FlapGuide';
import Intro from './components/VisualNovel/Intro';
import NetMiniGame from './components/innerComp/minigames/data/games/NetMiniGame';
import Tutorial from './components/Tutorial/Tutorial.js';
import Secretplayground from './components/secretplayground/Secretplayground.js';
import QuizPage from './components/QuizPage/QuizPage.js'

function App() {
	const [isFlapGuide, setIsFlapGuide] = useState(false);
	const [isGameComplete, setIsGameComplete] = useState(false);

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
				}/> 
				<Route path='preface' element= {
					<>
						<Intro />
						<NavLink className='exit-play' to='/'>Exit</NavLink>
					</>
				} />
				<Route path='level1' element={
					<>
						<VisualNovel isFlapGuide={isFlapGuide} setIsFlapGuide={setIsFlapGuide} isGameComplete={isGameComplete} setIsGameComplete={setIsGameComplete} />
					</>
				} />
				<Route path="/tutorial" element={<Tutorial />} />
				<Route path='/quiz' element={<QuizPage />}/>
				<Route path="/secretplayground" element={<Secretplayground />} />
				<Route path='/storyteller/editor' element={<EditorPage />} />
			</Routes>
		</div>
		{/* <footer /> */}
    </div>
  );
}

export default App;