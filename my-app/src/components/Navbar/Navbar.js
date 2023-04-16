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
    );
}

export default Navbar;