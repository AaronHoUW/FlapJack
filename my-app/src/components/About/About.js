import * as React from "react";
import './About.css';
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
    TeamContainer,
    MeetContainer,
    RoleContainer,
    AquariumContainer,
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
                <TeamContainer>
                    <IntroTitle>Meet the Team!</IntroTitle>
                    <MeetContainer>
                        <div><img src='./imgs/jun.svg' alt='Jun Nguyen' /></div>
                        <div className='about-text'>
                            <div className="links">
                                <h2>Meet Jun Nguyen!</h2>
                                <div>
                                    <a href='mailto:s.jun.nguyen@gmail.com'>s.jun.nguyen@gmail.com</a>
                                    <a href='https://www.linkedin.com/in/stephanie-nguyen-4910411aa/' target='_blank' rel="noopener noreferrer"><img src='./imgs/linkedin.svg' alt='Jun Nguyen LinkedIn' /></a>
                                </div>
                            </div>
                            <RoleContainer>
                                <div>Project Manager</div>
                                <div>Software Engineer</div>
                                <div>Character Artist</div>
                            </RoleContainer>
                            <p>
                                Jun is a senior in Informatics and a software engineer at the Pacific Northwest National Laboratory
                                (PNNL). They created the visual novel components and paths, including the preface, map quiz, keywords,
                                choice scenes, card game, and linking the navigation to other scenes. With no prior experience doing digital
                                art nor project management, they started learning how to draw and do project manager tasks at the start of the
                                project. They enjoy music production, reading webtoons and manga, and playing a variety of gacha games.
                            </p>
                        </div>
                    </MeetContainer>
                    <MeetContainer>
                        <div><img src='./imgs/delaney.svg' alt='Delaney Edwards' /></div>
                        <div className='about-text'>
                            <div className="links">
                                <h2>Meet Delaney Edwards!</h2>
                                <div>
                                    <a href='mailto:delaney.l.edwards@gmail.com'>delaney.l.edwards@gmail.com</a>
                                    <a href='https://www.linkedin.com/in/delaneyledwards/' target='_blank' rel="noopener noreferrer"><img src='./imgs/linkedin.svg' alt='Delaney Edwards LinkedIn' /></a>
                                </div>
                            </div>
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
                    <MeetContainer>
                        <div><img src='./imgs/aaron.svg' alt='Aaron Ho' /></div>
                        <div className='about-text'>
                            <div className="links">
                                <h2>Meet Aaron Ho!</h2>
                                <div>
                                    <a href='mailto:aaronho1919@gmail.com'>aaronho1919@gmail.com</a>
                                    <a href='https://www.linkedin.com/in/aaron-ho-ba00a1196' target='_blank' rel="noopener noreferrer"><img src='./imgs/linkedin.svg' alt='Aaron Ho LinkedIn' /></a>
                                </div>
                            </div>
                            <RoleContainer>
                                <div>Software Engineer</div>
                            </RoleContainer>
                            <p>
                                Aaron is a senior in Informatics, who wants to be a software developer. In this project, Aaron was in charge of
                                working on creating the tutorial page and game page, as well as the main components of the editor page. Aaron
                                worked on game features such as movement, collecting nets, obstacles, and quizzes. Some of his hobbies includes
                                playing Nintendo games, League of Legends, and dancing games.
                            </p>
                        </div>
                    </MeetContainer>
                    <MeetContainer>
                        <div><img src='./imgs/brian.svg' alt='Brian Ho' /></div>
                        <div className='about-text'>
                            <div className="links">
                                <h2>Meet Brian Ho!</h2>
                                <div>
                                    <a href='mailto:21briantho@gmail.com'>21briantho@gmail.com</a>
                                    <a href='https://www.linkedin.com/in/brian-ho-967a0923b' target='_blank' rel="noopener noreferrer"><img src='./imgs/linkedin.svg' alt='Brian Ho LinkedIn' /></a>
                                </div>
                            </div>
                            <RoleContainer>
                                <div>Researcher</div>
                                <div>Story Writer</div>
                                <div>Software Engineer</div>
                            </RoleContainer>
                            <p>
                                Brian is currently a senior in Informatics, who wants to become a UI/UX Researcher. In this project, he worked
                                primarily on the research which included, conducting user interviews, working on market research and literature
                                reviews, and engaging in usability testing. He also worked as a software engineer, helping create certain pages and
                                scenes within the game and website. Some of his hobbies include listening to 21 Savage, playing basketball, and trying
                                to lift the heaviest weight. Additionally, his gaming life revolves around League of Legends, NBA 2k, and Madden!
                            </p>
                        </div>
                    </MeetContainer>
                </TeamContainer>
                <AquariumContainer>
                    <IntroTitle>Seattle Aquarium Adventure!</IntroTitle>
                    <p>
                        As part of our project, our team visited the Seattle Aquarium to learn more about local marine life, and do observation research
                        about how kids interact with marine science. Below are photos of some of the cool stuff we saw!
                    </p>
                    <div id="pSlider">
                        <ol id="slider-container" dir="ltr">
                            <li id="slide_1" class="li_slide">
                                <div class="slide-snapper"></div>
                                <a class="prev_slide" href="#slide_7"> </a>
                                <a class="next_slide" href="#slide_2"> </a>
                            </li>
                            <li id="slide_2" class="li_slide">
                                <div class="slide-snapper"></div>
                                <a class="prev_slide" href="#slide_1"> </a>
                                <a class="next_slide" href="#slide_3"> </a>
                            </li>
                            <li id="slide_3" class="li_slide">
                                <div class="slide-snapper"></div>
                                <a class="prev_slide" href="#slide_2"> </a>
                                <a class="next_slide" href="#slide_4"> </a>
                            </li>
                            <li id="slide_4" class="li_slide">
                                <div class="slide-snapper"></div>
                                <a class="prev_slide" href="#slide_3"> </a>
                                <a class="next_slide" href="#slide_5"> </a>
                            </li>
                            <li id="slide_5" class="li_slide">
                                <div class="slide-snapper"></div>
                                <a class="prev_slide" href="#slide_4"> </a>
                                <a class="next_slide" href="#slide_6"> </a>
                            </li>
                            <li id="slide_6" class="li_slide">
                                <div class="slide-snapper"></div>
                                <a class="prev_slide" href="#slide_5"> </a>
                                <a class="next_slide" href="#slide_7"> </a>
                            </li>
                            <li id="slide_7" class="li_slide">
                                <div class="slide-snapper"></div>
                                <a class="prev_slide" href="#slide_6"> </a>
                                <a class="next_slide" href="#slide_1"> </a>
                            </li>
                        </ol>
                    </div>
                </AquariumContainer>
            </AboutContainer>
            <AcknowledgementsContainer>
                <IntroTitle>Acknowledgements</IntroTitle>
                <p>
                    Our team is grateful for the support from our mentors and peers at the University of Washington’s Information
                    School for their advice through each iteration of our project. Throughout this project, we were supported by
                    Andrey Butenko, the software engineer from the team that worked on the first iteration of Marine Rescue. He provided
                    invaluable feedback and advice throughout our project. We were also greatly supported by two professors, Nam-Ho Park
                    and Marlina Hales. They both provided valuable feedback and support throughout our capstone project.
                </p>
            </AcknowledgementsContainer>
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
};
export default About;
