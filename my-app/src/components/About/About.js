import * as React from "react";
import './About.css';
import {
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
    IntroTitle,
    IntroTitleBubble,
    IntroItems,
    IntroHeader,
    IntroPopUp,
    IntroDescription,
    IntroTitleContainer,
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
                <IntroItems>
                    <IntroHeader>
                        <h1>Marine Rescue: The Sea-quel</h1>
                        <p>Empowering the next generation to save our oceans through fun and educational games!</p>
                    </IntroHeader>
                    <h2>How does Marine Rescue help the ocean?</h2>
                    <img src='./imgs/about-text-bubble.svg' alt='Text bubble' className="text-bubble-intro" />
                    <IntroPopUp className="intro-bubble">
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
                </IntroItems>
                <IntroItems>
                    <img src='./sprites/sprite-shawn-seagull.png' alt='Shawn the Seagull' className="shawn-intro" />
                    <img src='./sprites/sprite-user-placeholder.png' alt='User' />
                </IntroItems>
            </IntroContainer>
            <AboutContainer>
                <div>
                    <IntroTitleContainer>
                        <IntroTitle className="intro-title-who">What can you do in Marine Rescue?</IntroTitle>
                        <IntroTitleBubble src='./imgs/about-text-bubble.svg' alt='Text bubble' className="text-bubble-who" />
                        <img src='./sprites/sprite-user-placeholder.png' alt='User' />
                    </IntroTitleContainer>
                    <AboutSection>
                        <div className="features-two">
                            <FeatureContainer id='features-1'>
                                <h3>Meet Marine Animals</h3>
                                <img src='./imgs/feature1.png' alt='Meet seagull feature' />
                                <p id='meet-1-text'>
                                    Users learn about PNW marine life by interacting with characters like salmon, whales, and seagulls, building
                                    empathy for their issues. For example, they meet Shawn the Seagull with feet caught in soda can rings, discussing
                                    concerns about debris on the beach.
                                </p>
                                <button className="read-more-button" onClick={(event) => {
                                    if (event.target.className !== 'read-more-button clicked') {
                                        document.getElementById('meet-1-text').style.overflow = 'initial';
                                        document.getElementById('meet-1-text').style.display = 'block';
                                        event.target.innerHTML = `Show Less <img src='./imgs/read-more-arrow.svg' alt='Read Less Arrow' class="show-less-arrow" />`;
                                        event.target.classList.add('clicked');
                                        document.getElementById('features-1').style.height = '700px';
                                    } else {
                                        document.getElementById('meet-1-text').style.overflow = 'hidden';
                                        document.getElementById('meet-1-text').style.display = '-webkit-box';
                                        event.target.innerHTML = `Read More <img src='./imgs/read-more-arrow.svg' alt='Read More Arrow' />`;
                                        event.target.classList.remove('clicked');
                                        document.getElementById('features-1').style.height = '650px';
                                    }
                                }}>
                                    Read More <img src='./imgs/read-more-arrow.svg' alt='Read More Arrow' />
                                </button>
                            </FeatureContainer>
                            <FeatureContainer id='features-2'>
                                <h3>Test Your Scuba Knowledge</h3>
                                <img src='./imgs/feature2.png' alt='Test your knowledge feature' className="test-knowledge-img" />
                                <p id="meet-2-text">
                                    The visual novel quizzes users on their attention to conversations with marine animals, promoting engagement
                                    during long reading segments and adding an interactive challenge for younger audiences.
                                </p>
                                <button className="read-more-button" onClick={(event) => {
                                    if (event.target.className !== 'read-more-button clicked') {
                                        document.getElementById('meet-2-text').style.overflow = 'initial';
                                        document.getElementById('meet-2-text').style.display = 'block';
                                        event.target.innerHTML = `Show Less <img src='./imgs/read-more-arrow.svg' alt='Read Less Arrow' class="show-less-arrow" />`;
                                        event.target.classList.add('clicked');
                                        document.getElementById('features-2').style.height = '670px';
                                    } else {
                                        console.log(event);
                                        document.getElementById('meet-2-text').style.overflow = 'hidden';
                                        document.getElementById('meet-2-text').style.display = '-webkit-box';
                                        event.target.innerHTML = `Read More <img src='./imgs/read-more-arrow.svg' alt='Read More Arrow' />`;
                                        event.target.classList.remove('clicked');
                                        document.getElementById('features-2').style.height = '650px';
                                    }
                                }}>
                                    Read More <img src='./imgs/read-more-arrow.svg' alt='Read More Arrow' />
                                </button>
                            </FeatureContainer>
                        </div>
                        <FeatureContainer>
                            <div>
                                <h3>Play Mini-Games to Solve Marine Problems</h3>
                                <p>
                                    After talking to marine animals, users play mini-games addressing raised issues. Levels include identifying
                                    beach trash, swimming through obstacles to collect ghost nets, and removing debris from a whale's stomach.
                                </p>
                            </div>
                            <div className="gifs">
                                <img src='./imgs/net-game.gif' alt='Net mini-game' />
                                <img src='./imgs/trash-game.gif' alt='Trash mini game' />
                                <img src='./imgs/whale-game.gif' aalt='Whale mini game' />
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
                                <IntroTitle id="learn-more">Learn more about this project!</IntroTitle>
                                <IntroDescription>
                                    Marine Rescue was created as a capstone project for the University of Washington Information School, in Winter & Spring quarter of 2023.
                                    This is the second iteration of Marine Rescue based off of a previous groups project, which can be <a href='https://marinerescue.app/'>visited here</a>.
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
                                <div>Character & Assets Artist</div>
                                <div>Graphic Designer</div>
                            </RoleContainer>
                            <p>
                                Jun is a senior in Informatics and a software engineer at the Pacific Northwest National Laboratory
                                (PNNL). They created the visual novel components and paths, including the preface, map quiz, keywords,
                                choice scenes, card game, and linking the navigation to other scenes. They also handled the styling and
                                animation of the website. With no prior experience doing digital art nor project management, they started
                                learning how to draw and do project manager tasks at the start of the project. They enjoy music production,
                                reading webtoons and manga, and playing a variety of gacha games.
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
                                <div>Lead Game Developer</div>
                            </RoleContainer>
                            <p>
                                Aaron is a senior in Informatics, who wants to be a software developer. In this project, Aaron was in charge of
                                working on creating the tutorial page and game page, as well as the main components of the editor page. Aaron
                                worked on game features such as movement, collecting nets, obstacles, quizzes, and general bug fixes.
                                Some of his hobbies includes playing Nintendo games, League of Legends, and dancing games.
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
                    <span>Powered by Marlina's fruit snacks</span>
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
