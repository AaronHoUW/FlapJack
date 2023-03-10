/* This file contains the code for resources pages  */
'use strict';
import React from 'react';
function Resources() {
    return (
        <>
            <main>
                <div className="resource-page" color='#012348'>
                <div className="container">
                    <section className="row">
                        <div className="header-content col-xs-12 col-md-12 mt-5">
                        </div>
                        <div className="col-xs-4 col-md-6 mt-8">
                        </div>
                        <div className="col-xs-4 col-md-6 mt-5">
                            <h2>A Whale's Tale | Hope Works</h2>
                            <p className='mt-2'>This video contains a whale helping smaller sea creatures who are trapped in plastic waste. It also shows how plastic waste can be harmful for marine animals as they move across and into the ocean. Also, learn about the importance and ways that you can also clear the water of plastic! </p>
                            <a href="https://www.youtubekids.com/watch?v=xFPoIU5iiYQ">
                                <button className="link-button">Learn More!</button>
                            </a>
                        </div>
                        <div className="col-xs-4 col-md-6 mt-8">
                            <img className="sleep-image mt-5" src='./imgs/whale-tale.png' alt='a whale tale'></img>
                        </div>
                        <div className="col-xs-4 col-md-6 mt-5">
                            <h2> Whale Tangled In Net Saved | The Dodo</h2>
                            <p className='mt-2'>Watch as a family saves a whale from a net! Continue to understand how hard it can be for large marine animals, like the whale, to travel through the oceans with nets in their ways.</p>
                            <a href="https://www.youtubekids.com/watch?v=hC_isxflaVA">
                                <button className="link-button">Show Me!</button>
                            </a>
                        </div>
                        <div className="col-xs-4 col-md-6 mt-8">
                            <img className="sleep-image mt-5" src='./imgs/dodo.png' alt=' whale net video'></img>
                        </div>
                        <div className="col-xs-4 col-md-6 mt-5">
                            <h2> Protecting Our Oceans from Ghost Traps</h2>
                            <p className='mt-2'>Continue to learn about items that get stuck in the ocean! With over 360,000 random items ranging from such as nets and plastic, it can trap fish, turtles, and many more marine animals.</p>
                            <a href="https://www.youtube.com/watch?v=xCKPsVi3vBo">
                                <button className="link-button">Watch Video!</button>
                            </a>
                        </div>
                        <div className="col-xs-4 col-md-6 mt-8">
                            <img className="sleep-image mt-5" src='./imgs/ghost-nets.png' alt='ghost net video'></img>
                        </div>
                    </section>
                </div>
                </div>
            </main>
        </>
    );
}

export default Resources