import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    HomeContainer,
    IntroContainer,
    IntroText,
    IntroTitle,
    IntroDescription,
    IntroButton,
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
                        Marine Rescue is a 2nd to 6th grade education project that highlights the various problems impacting marine life.
                        These issues include ghost nets and pollution being left in the ocean that create hazardous environments for the animals.
                        With a focus on gamification, Marine Rescue allows users to engage within major aspects of marine issues in a joyful way.
                        Following the lives of many marine animals such as Seagulls, Chum Salmons, and Orca Whales, users are able to connect with
                        characters in order to understand their experiences with pollution they encounter every day. Come play and learn about the
                        characters’ lives, the impacts of pollution, and on ways that you can help!
                    </IntroDescription>
                    <IntroButton onClick={() => navigate('/preface')}>Play Now!</IntroButton>
                </IntroText>
                <IntroSprites>
                    <img src='./sprites/sprite-pancake-flapjack-octopus.png' alt='sprite of Pancake, the flapjack octopus' className='pancake' />
                    <img src='./sprites/sprite-user-placeholder.png' alt='sprite of the user' className='user' />
                </IntroSprites>
            </IntroContainer>

            <MeetContainer>
                <MeetTitle>Meet New Friends!</MeetTitle>
                <MeetSprites>
                    <MeetAnimal>
                        <img src='./sprites/sprite-sally-salmon.png' alt='sprite of Sally, the salmon' className='sally' />
                        <h4>Sally the Salmon</h4>
                    </MeetAnimal>
                    <MeetAnimal>
                        <img src='./sprites/sprite-pancake-flapjack-octopus.png' alt='sprite of Pancake, the flapjack octopus' />
                        <h4>Pancake the Flapjack Octopus</h4>
                    </MeetAnimal>
                    <MeetAnimal>
                        <img src='./sprites/sprite-wendy-whale.png' alt='sprite of Wendy, the whale' />
                        <h4>Wendy the Whale</h4>
                    </MeetAnimal>
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
                <FooterText>Marine Rescue: The Sea-quel</FooterText>
                <FooterCopyright>
                    <p>Copyright &copy; FlapJack</p>
                    <img src='./imgs/mdi_github.png' alt='Github logo' />
                </FooterCopyright>
                <img src='./imgs/iSchool-logo.png' alt='logo of the Information School at the University of Washington' />
            </FooterContainer>
        </HomeContainer>
    );
}

export default Home;