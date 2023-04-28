import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    HomeContainer,
    IntroContainer,
    IntroText,
    IntroTitle,
    IntroDescription,
    MoreInfo,
    IntroButton,
    ParentButton,
    IntroSprites,
    MeetContainer,
    MeetTitle,
    MeetSprites,
    MeetAnimal,
    LearnContainer,
    LearnText,
    LearnTitle,
    LearnDescription,
    LearnButton,
    FooterContainer,
    FooterText,
    FooterCopyright,
} from './styles.tsx';

function Home() {
    const navigate = useNavigate();
    return (
        <HomeContainer>
            <IntroContainer>
                <IntroText>
                    <IntroTitle>Welcome to Marine Rescue!</IntroTitle>
                    <IntroDescription>
                        Marine Rescue is a fun way to learn about problems that hurt marine animals like pollution and ghost nets.
                        You get to play as a scuba diver and explore the underwater world while learning about the animals who live
                        there and the dangers they face. You can help make a difference by learning about the problems and ways to
                        solve them. Join in and have fun while helping to protect our oceans!
                    </IntroDescription>
                    <MoreInfo>
                        <IntroButton onClick={() => navigate('/preface')}>Play Now!</IntroButton>
                        <ParentButton onClick={() => navigate('/parents')}>
                            <div>
                                <p>Are you a Parent?</p>
                                <p>Learn More About the Game</p>
                            </div>
                            <img src='./imgs/arrow_forward_ios.png' />
                        </ParentButton>
                    </MoreInfo>
                </IntroText>
            </IntroContainer>

            <MeetContainer>
                <MeetTitle>Meet New Friends!</MeetTitle>
                <MeetSprites>
                    <img src='./imgs/animals.svg' />
                </MeetSprites>
            </MeetContainer>

            <LearnContainer>
                <LearnText>
                    <LearnTitle>Are you a Marine Rescuer parent?</LearnTitle>
                    <LearnDescription>
                        Learn more about how Marine Rescue can benefit your child’s scientific education & help them connect to nature in the Pacific Northwest.
                    </LearnDescription>
                    <LearnButton onClick={() => navigate('/parents')}>Learn More</LearnButton>
                </LearnText>
                <IntroSprites>
                    <img src='./sprites/sprite-pancake-flapjack-octopus.png' alt='sprite of Pancake, the flapjack octopus' className='pancake' />
                    <img src='./sprites/sprite-user-placeholder.png' alt='sprite of the user' className='user' />
                </IntroSprites>
            </LearnContainer>

            <FooterContainer>
                <FooterText>
                    <p>Marine Rescue: The Sea-quel</p>
                    <span>Powered by fruit snacks</span>
                </FooterText>
                <FooterCopyright>
                    <p>Copyright &copy; FlapJack</p>
                    <img src='./imgs/github.png' alt='Github logo' />
                </FooterCopyright>
                <img src='./imgs/iSchool-logo.png' alt='logo of the Information School at the University of Washington' />
            </FooterContainer>
        </HomeContainer>
    );
}

export default Home;