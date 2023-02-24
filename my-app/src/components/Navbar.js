import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <div>
                <ul style={{listStyleType: 'none', margin: 0, padding: 0, overflow: 'hidden', backgroundColor: '#FFFFFF'}}>
                    <li style={{float: 'left'}}>
                    <NavLink to='/' style={{display: 'block', color: '#000000', textAlign: 'center', fontSize: '36px', padding: '14px 16px', textDecoration: 'none', fontWeight: 'bold', fontFamily: 'Mulish'}}>
                        Marine Rescue: The Sea-quel
                    </NavLink>
                    </li>
                    <li style={{float: 'right', marginLeft: '40px', backgroundColor: '#134254', borderRadius: '20px', marginTop: '10px', marginRight: '16px'}}>
                        <NavLink to='/play' style={{display: 'block', color: '#FFFFFF', textAlign: 'center', fontSize: '20px', padding: '14px 16px', textDecoration: 'none', fontWeight: 'bold', fontFamily: 'Mulish'}}>
                            Play Now
                        </NavLink>
                    </li>
                    <li style={{float: 'right', marginLeft: '40px', marginTop: '10px'}}>
                        <NavLink to='/parents' style={{display: 'block', color: '#000000', textAlign: 'center', fontSize: '20px', padding: '14px 16px', textDecoration: 'none', fontWeight: 'bold', fontFamily: 'Mulish'}}>
                            Parents
                        </NavLink>
                    </li>
                    <li style={{float: 'right', marginTop: '10px'}}>
                        <NavLink to='/about' style={{display: 'block', color: '#000000', textAlign: 'center', fontSize: '20px', padding: '14px 16px', textDecoration: 'none', fontWeight: 'bold', fontFamily: 'Mulish'}}>
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
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