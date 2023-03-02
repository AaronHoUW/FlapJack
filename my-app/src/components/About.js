import * as React from "react";
import {
    FooterContainer,
    FooterText,
    FooterCopyright,
} from './Home/styles.tsx';
import "../index.css";

const About = () => {
    return (
        <>
            <main>
                <div className="about-us">
                    <div className="info-section">
                        <span className="the-goal m-1 mb-4">The Goal</span>
                        <span className="marine-rescue m-1 mb-4">
                            Marine Rescue is a platform for elementary students to learn about
                            debris&#39; impacts on marine wildlife. This is the second iteration
                            of Marine Rescue, built as the final product of our Informatics
                            capstone. 
                            </span>
                            <span className="marine-rescue">
                            Through interactive educational stories and activities,
                            students can develop a sense of connection to the nature of the
                            Pacific North West through active learning and educational games.
                            While conducting user research, we found a lack of designated science
                            class time in schools and a lack of curriculum for learning science
                            outside of the classroom. This inspired us to continue developing
                            Marine Rescue to make as an accessible and hands-on learning
                            experience for students to learn marine science outside of the
                            classroom. Read more about our capstone project.
                        </span>
                    </div>
                    <img className="wendywhale" src='./sprites/sprite-wendy-whale.png' />
                </div>
                <div className="about-team cotainer">
                        <span className="flap-team">Our Team</span>
                        <span className="four-members m-1 mb-5">
                            We are a team of four students studying Informatics at the University of
                            Washington’s Information School.
                        </span>
                        <div className="profile-group row">
                            <div className="profile col text-center">
                                <img className="picture-one" src='./imgs/profile-border.png' />
                                <div className="profile-body">
                                    <h5 className="profile-name">Aaron Ho</h5>
                                    <p className="profile-role ">Software Engineer</p>
                                </div>
                            </div>
                            <div className="profile col text-center">
                                <img className="picture-one" src='./imgs/profile-border.png' />
                                <div className="profile-body text-center">
                                    <h5 className="profile-name">Brian Ho</h5>
                                    <p className="profile-role">User Researcher</p>
                                        <p className="profile-center"> &amp; </p>
                                        <p className="profile-role  m-1 mb-5">Software Engineer</p>
                                </div>
                            </div>
                            <div className="profile col text-center">
                                <img className="picture-one" src='./imgs/profile-border.png' />
                                <div className="profile-body">
                                    <h5 className="profile-name">Delaney Edwards</h5>
                                    <p className="profile-role">UX Designer</p>
                                </div>
                                </div>
                                <div className="profile col text-center">
                                    <img className="picture-one" src='./imgs/profile-border.png' />
                                    <div className="profile-body">
                                        <h5 className="profile-name">Jun Nguyen</h5>
                                        <p className="profile-role">Project Manager</p>
                                        <p className="profile-center"> &amp; </p>
                                        <p className="profile-role">Software Engineer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="ack-section">
                    <span className="last-section mb-3">Acknowledgements</span>
                    <span className="shout-out  m-1 mb-4">
                        Our team is grateful for the support from our mentors and peers at the
                        University of Washington’s Information School for their advice through
                        each iteration of our project.
                        </span> 
                        <span className=" shout-out  m-1 mb-4">
                        Throughout this project, we were supported by Andrey Butenko, the software engineer from the team that
                        worked on the first iteration of Marine Rescue. 
                        </span> 
                        <span className=" shout-out m-1 mb-4">
                        We were also greatly supported by two professors, Nam-Ho Park and Marlina Hales. They both
                        provided valuable feedback throughout our capstone project.
                        </span>
                       
                </div>
            </main>
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
