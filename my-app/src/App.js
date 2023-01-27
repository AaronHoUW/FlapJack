import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Parents from './components/Parents';
import Play from './components/Play';
import EditorPage from './components/EditorPage';

function App() {


  return (
    <div className='page-container'>
		<Navbar /> 
			<div className='fill-content'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/parents' element={<Parents />} />
					<Route path='/play' element={<Play />} />
					<Route path='/storyteller/editor' element={<EditorPage />} />
				</Routes>
			</div>
		{/* <footer /> */}
    </div>
  );
}

export default App;
