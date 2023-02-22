import * as React from "react";
import Footer from "./Footer";
import wendywhale from "../imgs/wendy.png";
import profileborder from "../imgs/profile-border.png";


import "../index.css";
const About = () => {
    return (
        <>
            <main>
                <div className="about-us">
                    <div className="info-section ">
                        <span className="the-goal">The Goal</span>
                        <span className="marine-rescue col-xs-5 m-4">
                            Marine Rescue is a platform for elementary students to learn about
                            debris&#39; impacts on marine wildlife. This is the second iteration
                            of Marine Rescue, built as the final product of our Informatics
                            capstone. 
                            </span>
                            <span className="marine-rescue col-xs-5 m-4">
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
                    <img className="wendywhale" src={wendywhale} />
                </div>
                <div className="about-team cotainer">
                        <span className="flap-team mb-1">Our Team</span>
                        <span className="four-members col-xs-12 col-md-10 mt-2 ms-2">
                            We are a team of four students studying Informatics at the University of
                            Washington’s Information School.
                        </span>
                        <div class="profile-group row">
                            <div class="profile col text-center mt-4">
                                <img className="picture-one" src={profileborder} />
                                <div class="profile-body">
                                    <h5 class="profile-name col-xs-12 col-md-12 mt-5">Aaron Ho</h5>
                                    <p class="profile-role col-xs-12 col-md-12 mt-4">Software Engineer</p>
                                </div>
                            </div>
                            <div class="profile col text-center mt-4">
                                <img className="picture-one" src={profileborder} />
                                <div class="profile-body text-center">
                                    <h5 class="profile-name col-xs-12 col-md-12 mt-5">Brian Ho</h5>
                                    <p class="profile-role col-xs-12 col-md-12 mt-4">User Researcher</p>
                                        <p class="profile-center"> &amp; </p>
                                        <p class="profile-role">Software Engineer</p>
                                </div>
                            </div>
                            <div class="profile col text-center mt-4">
                                <img className="picture-one" src={profileborder} />
                                <div class="profile-body">
                                    <h5 class="profile-name col-xs-12 col-md-12 mt-5">Delaney Edwards</h5>
                                    <p class="profile-role col-xs-12 col-md-12 mt-4 ">UX Designer</p>
                                </div>
                                </div>
                                <div class="profile col text-center mt-4">
                                    <img className="picture-one" src={profileborder} />
                                    <div class="profile-body">
                                        <h5 class="profile-name col-xs-12 col-md-12 mt-5">Jun Nguyen</h5>
                                        <p class="profile-role col-xs-12 col-md-12 mt-4">Project Manager</p>
                                        <p class="profile-center"> &amp; </p>
                                        <p class="profile-role">Software Engineer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="ack-section">
                    <span className="last-section">Acknowledgements</span>
                    <span className="shout-out  m-1 mb-3">
                        Our team is grateful for the support from our mentors and peers at the
                        University of Washington’s Information School for their advice through
                        each iteration of our project.
                        </span> 
                        <span className=" shout-out  m-1 mb-3">
                        Throughout this project, we were supported by Andrey Butenko, the software engineer from the team that
                        worked on the first iteration of Marine Rescue. 
                        </span> 
                        <span className=" shout-out m-1 mb-3">
                        We were also greatly supported by two professors, Nam-Ho Park and Marlina Hales. They both
                        provided valuable feedback throughout our capstone project.
                        </span>
                       
                </div>
            </main>
            <Footer />
        </>
    );
};
export default About;
