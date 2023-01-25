import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg bg-info justify-content-between'>
         <NavLink className="navbar-brand brand h1 nav-title" to="/" aria-label="Logo and Home Button">
            {/* <h1 className='nav-title'>Marine Rescue: The Sea-quel</h1> */}
            Marine Rescue: The Sea-quel
        </NavLink>
        
          <div className="form-inline" id="navbarSupportedContent">
			<ul className="navbar-nav mr-auto ml-auto">
				<li className='nav-item mr-5'>
					<NavLink className='text-white'>About Us</NavLink>
				</li>
				<li className='nav-item mr-5'>
					<NavLink className='text-white'>For Parents</NavLink>
				</li>
				<li className='nav-item mr-5'>
					<NavLink className='text-white'>Play</NavLink>
				</li>
			</ul>
          </div>
      </nav>
    )
}

export default Navbar;