import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Parents from './components/Parents';
import Play from './components/Play/Play';
import EditorPage from './components/EditorPage';

function App() {

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
					<Route path='/play' element={
						<>
							<Play />
							<NavLink className='exit-play' to='/'>Exit</NavLink>
						</>
					} />
					<Route path='/storyteller/editor' element={<EditorPage />} />
				</Routes>
			</div>
		{/* <footer /> */}
    </div>
  );
}

export default App;