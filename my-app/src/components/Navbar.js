import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg justify-content-between'>
            <NavLink className="navbar-brand brand nav-title h1 font-weight-bold" to="/" aria-label="Logo and Home Button">
                Marine Rescue: The Sea-quel
            </NavLink>
        
            <div className="form-inline" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto ml-auto">
                    <li className='nav-item mr-5'>
                        <NavLink className='text-white' to='/about'>
                            <div class="circle">
                                <p class="circle-text text-white">About</p>
                            </div>
                        </NavLink>
                    </li>
                    <li className='nav-item mr-5'>
                        <NavLink className='text-white' to='/parents'>
                            <div class="circle nav-parents">
                                <p class="circle-text text-white">For Parents</p>
                            </div>
                        </NavLink>
                    </li>
                    <li className='nav-item mr-5'>
                        <NavLink className='text-white' to='/play'>
                            <div class="circle nav-play">
                                <p class="circle-text text-white">Play</p>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
      </nav>
    )
}

export default Navbar;