import React from 'react';

import {
    IntroContainer,
    IntroText,
    IntroTitle,
    IntroDescription,
    HelpContainer,
    Help,
    HelpText,
    HelpDescription,
    HelpVideoContainer,
    HelpVideo,
    LearnContainer,
    LearnText,
    LearnTitle,
    LearnDescription,
    CardsContainer,
    CardContainer,
} from './styles.tsx';

import {
    FooterContainer,
    FooterText,
    FooterCopyright,
} from '../Home/styles.tsx';

function Parents() {
    return (
        <>
            <IntroContainer>
                <IntroText>
                    <IntroTitle>What is Marine Rescue?</IntroTitle>
                    <IntroDescription>
                        Marine Rescue is a safe, secure, and private platform for elementary students to learn about debris' impacts on marine
                        wildlife through interactive stories and activities. Its a great way to get your child excited about science and nature!
                    </IntroDescription>
                </IntroText>
            </IntroContainer>

            <HelpContainer>
                <Help>
                    <HelpVideoContainer>
                        <HelpVideo src="https://www.youtube.com/embed/hnN8uOE6nTk" width='100%' height='100%' />
                    </HelpVideoContainer>
                    <HelpText>
                        <IntroTitle>How can I help my child play Marine Rescue?</IntroTitle>
                        <HelpDescription>
                            Kids will get to chat with multiple different sea animals, play mini games to help them learn the material, and watch short
                            videos to reinforce the content. You can support them as little or as much as you please. Pancake, the narrator, will help your
                            child through the game, functioning as a guide and an adventure buddy.
                        </HelpDescription>
                    </HelpText>
                </Help>
                <LearnText>
                    <LearnTitle>What will my child learn using Marine Rescue?</LearnTitle>
                    <LearnDescription>
                        Marine Rescue is more than entertainment for you child. It will teach them about the ocean, the animals that live there,
                        and how they are affected by pollution.
                    </LearnDescription>
                </LearnText>

                <CardsContainer>
                    <CardContainer>
                        <img src='./imgs/profile-border.png' />
                        <h4>Marine Life</h4>
                        <p>
                            Your child will learn about local PNW marine life such as salmon, whales, and crabs. They will learn fun facts about the animals,
                            and about their experiences.
                        </p>
                    </CardContainer>
                    <CardContainer>
                        <img src='./imgs/profile-border.png' />
                        <h4>Marine Pollution</h4>
                        <p>
                            Your child will learn about how marine pollution such as ghost nets and trash impacts marine life. They will also learn how they
                            can help to clean up marine debris.
                        </p>
                    </CardContainer>
                    <CardContainer>
                        <img src='./imgs/profile-border.png' />
                        <h4>Vocabulary</h4>
                        <p>
                            Your child will learn vocabulary words related to marine life and marine debris to help support their learning. They will also learn how
                            to pronounce the words.
                        </p>
                    </CardContainer>
                </CardsContainer>
            </HelpContainer>

            <LearnContainer></LearnContainer>
            {/* <div className='parent-what-is-section'>
                <div className=''>
                    <div className='row what-content-height'>
                        <div className='col my-auto'>
                            <h2>What is Marine Rescue?</h2>
                            <p> Marine Rescue is a safe, secure, and private platform
                                for elementary students to learn about debris' impacts
                                on marine wildlife through interactive stories and activities.
                                Its a great way to get your child excited about science and nature!
                            </p>
                        </div>
                        <div className='col'>
                            <img className='center-image mt-3' src='./imgs/player-and-pancake.png' alt="Player Character and Flapjack"></img>
                        </div>
                    </div>
                    <div className='row content-height mt-5'>
                        <div className='col mb-5'>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/YCPDVVLUw-4" />
                        </div>
                        <div className='col m-auto'>
                            <h2>How can I help my kid play Marine Rescue?</h2>
                            <p> Kids will get to chat with multiple different sea animals,
                                play mini games to help them learn the material, and watch short videos to
                                reinforce the content. You can support them as little or as much as you please.
                                Pancake, the narrator, will help your child through the game, functioning as a
                                guide and an adventure buddy.
                            </p>
                        </div>
                    </div>
                    <div className="about-parent">
                        <span className="flap-team mb-1">What will my child learn using Marine Rescue?</span>
                        <span className="four-members col-xs-12 col-md-10 mt-2 ms-2">
                            Marine Rescue is more than entertainment for you child, it will teach them about the ocean, the animals that live there, and how they are affected by pollution.
                        </span>
                        <div className="profile-group row">
                            <div className="profile col text-center mt-4">
                                <img className="picture-one" src='./imgs/profile-border.png' />
                                <div className="profile-body">
                                    <h5 className="profile-name col-xs-12 col-md-12 mt-5">Marine Life</h5>
                                    <p className="profile-role col-xs-12 col-md-12 mt-4">Your child will learn about local PNW marine life such as salmon, whales, and crabs. They will learn fun facts about the animals, and about their experiences.</p>
                                </div>
                            </div>
                            <div className="profile col text-center mt-4">
                                <img className="picture-one" src='./imgs/profile-border.png' />
                                <div className="profile-body text-center">
                                    <h5 className="profile-name col-xs-12 col-md-12 mt-5">Marine Pollution</h5>
                                    <p className="profile-role col-xs-12 col-md-12 mt-4">Your child will learn about how marine pollution such as ghost nets and trash impacts marine life. They will also learn how they can help to clean up marine debris.</p>
                                </div>
                            </div>
                            <div className="profile col text-center mt-4">
                                <img className="picture-one" src='./imgs/profile-border.png' />
                                <div className="profile-body">
                                    <h5 className="profile-name col-xs-12 col-md-12 mt-5">Vocabulary</h5>
                                    <p className="profile-role col-xs-12 col-md-12 mt-4 ">Your child will learn vocabulary words related to marine life and marine debris to help support their learning. They will also learn how to pronounce the words.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
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
        </>

    );

}


export default Parents;
