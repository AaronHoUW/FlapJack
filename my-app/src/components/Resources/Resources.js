import React from 'react';
import {
    ResourcesContainer,
    SectionTitle,
    ParagraphText,
    VideosContainer,
    VideoContent,
    MoreVideosContainer,
    ReadContainer,
    SectionTitleLight,
    Articles,
    SimilarGamesContainer,
    GameCards,
    DeepSea
} from './styles.tsx';
import {
    FooterContainer,
    FooterText,
    FooterCopyright,
} from '../Home/styles.tsx';


function Resources() {
    return (
        <div>
            <ResourcesContainer>
                <SectionTitle>Resources</SectionTitle>
                <ParagraphText>
                    Want to learn more about marine life and how they are impacted by us humans? Browse the
                    resources below! You can watch the full videos from the game, or read articles that helped us write the content for the game.
                </ParagraphText>
            </ResourcesContainer>
            <VideosContainer>
                <SectionTitle>Videos</SectionTitle>
                <VideoContent>
                    <div>
                        <h2>A Whale's Tale</h2>
                        <h3>By: Hope Works</h3>
                        <ParagraphText>
                            This video contains a whale helping smaller sea creatures who are trapped in plastic waste. It also shows how plastic waste
                            can be harmful for marine animals as they move across and into the ocean. Also, learn about the importance and ways that
                            you can also clear the water of plastic!
                        </ParagraphText>
                    </div>
                    <iframe title="A Whale's Tale by Hope Works" width='50%' src="https://www.youtube.com/embed/xFPoIU5iiYQ" />
                </VideoContent>
            </VideosContainer>
            <MoreVideosContainer>
                <VideoContent className='more-content'>
                    <iframe title="Whale Tangled in Net Saved by The Dodo" width='50%' src="https://www.youtube.com/embed/hC_isxflaVA" />
                    <div>
                        <h2>Whale Tangled In Net Saved</h2>
                        <h3>By: The Dodo</h3>
                        <ParagraphText>
                            Watch as a family saves a whale from a net! Continue to understand how hard it can be for large marine animals,
                            like the whale, to travel through the oceans with nets in their ways.
                        </ParagraphText>
                    </div>
                </VideoContent>
                <VideoContent className='more-content'>
                    <div>
                        <h2>Protecting Our Oceans from Ghost Traps</h2>
                        <h3>By: Great Big Story</h3>
                        <ParagraphText>
                            Continue to learn about items that get stuck in the ocean! With over 360,000 random items ranging from such as
                            nets and plastic, it can trap fish, turtles, and many more marine animals.
                        </ParagraphText>
                    </div>
                    <iframe title="Protecting Our Oceans from Ghost Traps by Great Big Story" width='50%' src="https://www.youtube.com/embed/xCKPsVi3vBo" />
                </VideoContent>
                <ReadContainer>
                    <SectionTitleLight>Read More About Climate Change</SectionTitleLight>
                    <Articles>
                        <p className='citation'>Time. (2019, August 14). How humans are destroying the world's oceans. Time. Retrieved January 17, 2023, from <a href='https://time.com/collection/davos-2019/5502588/oceans-in-peril/'>https://time.com/collection/davos-2019/5502588/oceans-in-peril/</a></p>
                        <p className='detail'>This article gives information about what impacts humans have had on the ocean environment.</p>
                    </Articles>
                    <Articles>
                        <p className='citation'>United Nations. (n.d.). Education is key to addressing climate change. United Nations. Retrieved January 17, 2023, from <a href='https://www.un.org/en/climatechange/climate-solutions/education-key-addressing-climate-change'>https://www.un.org/en/climatechange/climate-solutions/education-key-addressing-climate-change</a></p>
                        <p className='detail'>This article explains how important education is about climate change in shaping people to be more responsible with their actions towards the environment. It also discusses the curriculum that UNESCO has created about climate change.</p>
                    </Articles>
                    <Articles>
                        <p className='citation'>Kamenetz, A. (2019, April 22). Most teachers don't teach climate change; 4 in 5 parents wish they did. NPR. Retrieved January 17, 2023, from <a href='https://www.npr.org/2019/04/22/714262267/most-teachers-dont-teach-climate-change-4-in-5-parents-wish-they-did'>https://www.npr.org/2019/04/22/714262267/most-teachers-dont-teach-climate-change-4-in-5-parents-wish-they-did</a></p>
                        <p className='detail last'>This article discusses how little information about climate change is taught in schools and how teachers and parents feel about it.</p>
                    </Articles>
                </ReadContainer>
                <SimilarGamesContainer>
                    <SectionTitleLight>Play Similar Games</SectionTitleLight>
                    <GameCards>
                        <div>
                            <img src='./imgs/marine-rescue-og.svg' alt='The original Marine Rescue game' />
                            <h3>Marine Rescue</h3>
                            <p>Play the first iteration of this game and play even more mini games and meet other marine friends!</p>
                            <a target='_blank' rel="noreferrer" href='https://marinerescue.app/'><button>Go to game</button></a>
                        </div>
                        <div>
                            <img src='./imgs/pbs-kids.svg' alt='Hero in the Ocean game' />
                            <h3>Hero in the Ocean</h3>
                            <p>Move your submarine and explore each level of the sea in order to save the diver and find all three stars.</p>
                            <a target='_blank' rel="noreferrer" href='https://pbskids.org/wildkratts/games/creature-powersuit-underwater-challenge'><button>Go to game</button></a>
                        </div>
                        <div>
                            <img src='./imgs/wild-kratts.svg' alt='Wild Kratts: Creature PowerSuit game' />
                            <h3>Wild Kratts: Creature PowerSuit</h3>
                            <p>Explore an ocean zone in order to find the pieces of a power suit that has been destroyed.</p>
                            <a target='_blank' rel="noreferrer" href='https://www.coolmathgames.com/0-hero-in-the-ocean'><button>Go to game</button></a>
                        </div>
                    </GameCards>
                </SimilarGamesContainer>
            </MoreVideosContainer>
            <DeepSea></DeepSea>
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
        </div>
    );
}

export default Resources