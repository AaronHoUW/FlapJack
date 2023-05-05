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
                        <img src='./imgs/Marine_Rescue_The_Sea-quel.svg' height={75} />
                        <div>
                            <h1>Marine Rescue</h1>
                            <h3>The Sea-quel</h3>
                        </div>
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
                        <PlayButton to='/levels'>
                            Play Now
                        </PlayButton>
                    </ListItem>
                </ListContainer>
            </NavContainer>
        </nav>
    );
}

export default Navbar;