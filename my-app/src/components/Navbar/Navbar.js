import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    NavContainer,
    LogoContainer,
    ListContainer,
    ListItem,
    Link,
    PlayButton,
} from './styles.tsx';

function Navbar() {
    return (
        <nav>
            <NavContainer>
                <LogoContainer>
                    <Link to='/'>
                        <img src='./imgs/MRSQ_Logo.svg' height={75} />
                    </Link>
                </LogoContainer>
                <ListContainer>
                    <ListItem>
                        <Link to='/resources'>
                            Resources
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/about'>
                            About
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/parents'>
                            Parents
                        </Link>
                    </ListItem>
                    <ListItem>
                        <PlayButton to='/preface'>
                            Play Now
                        </PlayButton>
                    </ListItem>
                </ListContainer>
            </NavContainer>
        </nav>
        //     <nav className='navbar navbar-expand-lg justify-content-between' style={{backgroundColor: '#FFFFFF'}}>
        //         <NavLink className="navbar-brand brand nav-title h1 font-weight-bold" style={{color: '#0474BA', fontWeight: 'bold'}} to="/" aria-label="Logo and Home Button">
        //             Marine Rescue: The Sea-quel
        //         </NavLink>

        //         <div>
        //             <ul>
        //                 <li>
        //                     <NavLink to='/about' style={{textDecoration: 'none'}}>
        //                         <div>
        //                             <p style={{color: '#0474BA', fontWeight: 'bold', textDecoration: 'none'}}>About</p>
        //                         </div>
        //                     </NavLink>
        //                 </li>
        //                 <li className='nav-item me-5'>
        //                     <NavLink to='/parents' style={{textDecoration: 'none'}}>
        //                         <div className="circle nav-parents">
        //                             <p style={{color: '#0474BA', fontWeight: 'bold', textDecoration: 'none'}}>For Parents</p>
        //                         </div>
        //                     </NavLink>
        //                 </li>
        //                 <li className='nav-item me-5'>
        //                     <NavLink to='/play'  style={{textDecoration: 'none'}}>
        //                         <div className="circle nav-play">
        //                             <p style={{color: '#0474BA', fontWeight: 'bold', textDecoration: 'none'}}>Play</p>
        //                         </div>
        //                     </NavLink>
        //                 </li>
        //             </ul>
        //         </div>
        //   </nav>
    );
}

export default Navbar;