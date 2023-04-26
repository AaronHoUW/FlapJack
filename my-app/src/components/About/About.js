import * as React from "react";
import {
    IntroTitle,
    IntroDescription,
    FooterContainer,
    FooterText,
    FooterCopyright,
} from '../Home/styles.tsx';
import {
    Help,
    HelpVideoContainer,
    HelpVideo
} from '../Parents/styles.tsx';
import {
    IntroContainer,
    IntroHeader,
    IntroPopUp,
    AboutContainer,
    FirstAboutSection,
    AboutSection,
    WhoDetails,
    FeatureContainer,
    StatusContainer,
    StatusIcons,
    MeetContainer,
    RoleContainer,
    AcknowledgementsContainer,
} from './styles.tsx';

const About = () => {
    return (
        <>
            <IntroContainer>
                <IntroHeader>
                    <h1>Marine Rescue: The Sea-quel</h1>
                    <p>Empowering the next generation to save our oceans through fun and educational games!</p>
                </IntroHeader>
                <IntroPopUp>
                    <IntroTitle>What is the point of Marine Rescue?</IntroTitle>
                    <IntroDescription>
                        Our research showed that there is not enough emphasis on learning about the ocean in
                        and outside the classroom. This, combined with rising concerns about climate change,
                        inspired us to continue developing Marine Rescue.
                        <br></br>
                        <br></br>
                        Marine Rescue is a game for elementary students to learn about debris' impacts on marine wildlife in
                        the Pacific Northwest. Through interactive educational stories and short games, students build empathy for
                        the problems that native species such as salmon and seagulls are facing, and help solve the problems
                        through fun, educational games. We hope that this will inspire the next generation to take action to fight
                        ocean pollution, and help solve climate change.
                    </IntroDescription>
                </IntroPopUp>
            </IntroContainer>
            <AboutContainer>
                <div>
                    <IntroTitle>Who will use Marine Rescue?</IntroTitle>
                    <FirstAboutSection>
                        <img src='./sprites/sprite-user-placeholder.png' alt='User' />
                        <WhoDetails>
                            <div>
                                <h3>Kids</h3>
                                <p>
                                    Your child will learn about local PNW marine life such as salmon, whales, and seagulls. They
                                    will learn how humans’ actions are negatively impacting these animals, and how, even as a kid, they can help to fight pollution.
                                </p>
                            </div>
                            <div>
                                <h3>Parents</h3>
                                <p>
                                    Marine Rescue can also serve as a way for parents to connect with their kids. We included a Parents page so
                                    parents can feel confident that this game is fun, safe, and educational for their kids.
                                </p>
                            </div>
                        </WhoDetails>
                    </FirstAboutSection>
                </div>
                <div>
                    <IntroTitle>What can you do in Marine Rescue?</IntroTitle>
                    <AboutSection>
                        <FeatureContainer>
                            <img src='./imgs/feature1.png' alt='Meet seagull feature' />
                            <div>
                                <h3>Meet Marine Animals</h3>
                                <p>
                                    Users will learn about local PNW marine life by talking to characters such as salmon, whales, and seagulls.
                                    Through these interactions, the user will build empathy for the problems that these animals are facing. For example,
                                    users will meet Shawn the Seagull, who’s feet are caught in some soda can rings, making it difficult for him to walk
                                    around the beach. Through their conversation, users will learn about Shawn’s concerns about debris on the beach.
                                </p>
                            </div>
                        </FeatureContainer>
                        <FeatureContainer>
                            <div>
                                <h3>Test Your Scuba Knowledge</h3>
                                <p>
                                    Throughout the visual novel, where users talk to different marine animals, they will also be tested on how well
                                    they pay attention to the conversations. This encourages the users to be engaged while they read, and also presents
                                    an interactive challenge between long reading segments, which can get boring for the younger audience.
                                </p>
                            </div>
                            <img src='./imgs/feature2.png' alt='Test your knowledge feature' />
                        </FeatureContainer>
                        <FeatureContainer>
                            <div>
                                <h3>Play Mini-Games to Solve Marine Problems</h3>
                                <p>
                                    After talking to each of the marine animals, the user will be able to play mini-games that address some of the
                                    issues that were brought up in the conversation. In the first level, the user will find objects on the beach and
                                    identifying whether they are trash to be removed, or parts of the marine ecosystem, to be left alone. In the second
                                    level, the user will swim around obstacles in order to pick up ghost nets that are trapping fishing. In the third
                                    level, both of these game modes will be combined as the user swims into the belly of a whale, to empty out all of
                                    the debris that the whale has eaten.
                                </p>
                            </div>
                            <div>
                                <img src='./imgs/net-game.gif' alt='Net mini-game' />
                                <img />
                                <img />
                            </div>
                        </FeatureContainer>
                    </AboutSection>
                </div>
                <div>
                    <AboutSection className='presentation'>
                        <Help>
                            <HelpVideoContainer>
                                <HelpVideo src="https://www.youtube.com/embed/hnN8uOE6nTk" width='100%' height='450px' />
                            </HelpVideoContainer>
                            <IntroPopUp>
                                <IntroTitle>Learn more about this project!</IntroTitle>
                                <IntroDescription>
                                    Marine Rescue was created as a capstone project for the University of Washington Information School, in Winter & Spring quarter of 2023.
                                    This is the second iteration of Marine Rescue based off of a previous groups project, which can be visited here.
                                    <br></br>
                                    <br></br>
                                    The presentation gives an overview of our process of creating Marine Rescue.
                                </IntroDescription>
                            </IntroPopUp>
                        </Help>
                    </AboutSection>
                </div>
                <StatusContainer>
                    <div>
                        <IntroTitle>Project Status</IntroTitle>
                        <p>Our project will remain open-source. To view our project in depth, feel free to explore our work:</p>
                    </div>
                    <StatusIcons>
                        <a href='https://miro.com/app/board/uXjVP1qeP0I=/?moveToWidget=3458764542318464274&cot=14'>
                            <img src='./imgs/miro.png' alt='Miro' />
                            <p>Miro</p>
                        </a>
                        <a href='https://github.com/AaronHoUW/FlapJack'>
                            <img src='./imgs/github-status.png' alt='Github' />
                            <p>GitHub</p>
                        </a>
                        <a href='https://www.figma.com/file/GAwPYtxgu7cB9uYnB98nJI/Marine-Rescue%3A-The-Sea-quel?node-id=272-88&t=VKQrEEDcNK07fmBS-0'>
                            <img src='./imgs/figma.png' alt='Figma' />
                            <p>Figma</p>
                        </a>
                    </StatusIcons>
                </StatusContainer>
                <div>
                    <IntroTitle>Meet the Team!</IntroTitle>
                    <MeetContainer>
                        <div><img src='./imgs/jun.png' alt='Jun Nguyen' /></div>
                        <div className='about-text'>
                            <h2>Meet Jun Nguyen!</h2>
                            <RoleContainer>
                                <div>Project Manager</div>
                                <div>Software Engineer</div>
                                <div>Character Artist</div>
                            </RoleContainer>
                            <p>
                                Jun is a senior in Informatics and a software engineering intern at Pacific Northwest National Laboratory
                                (PNNL). They created all of the visual novel components and paths, including the preface, map quiz, keywords,
                                choice scenes, card game, and linking the navigation to other scenes. With no prior experience doing digital
                                art nor project management, they started learning how to draw and do project manager tasks at the start of the
                                project. They are a music cover hobbyist, which includes singing, mixing, and general music production. They
                                also enjoy reading webtoons and manga, and they are an avid gacha gamer.
                            </p>
                        </div>
                    </MeetContainer>
                    <MeetContainer>
                        <div><img src='./imgs/delaney.png' alt='Delaney Edwards' /></div>
                        <div className='about-text'>
                            <h2>Meet Delaney Edwards!</h2>
                            <RoleContainer>
                                <div>UX Designer</div>
                                <div>Story Writer</div>
                                <div>Environment Artist</div>
                            </RoleContainer>
                            <p>
                                Delaney is a senior in Informatics, who aims to become a UX Designer. In this project, she brainstormed the features
                                for the game, outlined and wrote the story, and went through several iterations of wireframes for the whole game and
                                website. Outside of school, Delaney is a Student UX Designer at UW-IT where she helps to improve the student experience
                                at UW. For fun, she enjoys drawing cute things to make into stickers, reading books of all genres, and playing video
                                games like Valorant and Horizon Zero Dawn.
                            </p>
                        </div>
                    </MeetContainer>
                </div>
            </AboutContainer>
            <FooterContainer>
                <FooterText>Marine Rescue: The Sea-quel</FooterText>
                <FooterCopyright>
                    <p>Copyright &copy; FlapJack</p>
                    <img src='./imgs/mdi_github.png' alt='Github logo' />
                </FooterCopyright>
                <img src='./imgs/iSchool-logo.png' alt='logo of the Information School at the University of Washington' />
            </FooterContainer>
        </>
    );
};
export default About;
