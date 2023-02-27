import React from 'react';
import PlayerAndFlapjack from '../imgs/PlayerAndFlapJack.png';


function Parents() {
    return (
        <div className='parent-what-is-section'>
            <div className='container'>
                {/* What is Marine Rescue? */}
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
                        <img className='center-image mt-3' src={PlayerAndFlapjack} alt="Player Character and Flapjack"></img>
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
            </div>
        </div>
    );
}

export default Parents;