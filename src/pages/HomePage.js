// HomePage.js
import React from 'react';
import './HomePage.css'
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <div className="App">
                <div className="titleImage">
                    <h3 className="fontOutline title">Welcome to Minecraft Club!</h3>
                    <div className="image"/>
                </div>
                <div style={{marginTop: 420}} className='main-container'>
                    <h2 style={{marginBottom: '40px'}}></h2>
                    <div className='details-container'>
                        <h3 className="fontOutlineThin">Details</h3>
                        <ul className='details-list'>
                            <li>The server is running on 1.20.1</li>
                            {/*<li>The experimental villager trades have been enabled.</li>*/}
                            {/*<li>The experimental bundles feature has been enabled.</li>*/}
                            <li>Server wide events will happen about every week starting soon.</li>
                            <li>All events are optional, but provide a fun way to compete for points.</li>
                            <li>The leaderboards can be found <Link style={{textDecoration: 'underline', fontSize: 16}} to={'/leaderboard'}>here</Link></li>
                            {/*<li>More rules!</li>*/}
                        </ul>
                    </div>
                    <h2 style={{marginBottom: '40px'}}></h2>
                    <div className='details-container'>
                        <h3 className="fontOutlineThin">Rules</h3>
                        <ol className='details-list'>
                            <li>Everyone is welcome on this server!</li>
                            <li>No griefing or mass destruction</li>
                            <li>"Pranking" is allowed!
                                <ul>
                                    <li>Be considerate.</li>
                                    <li>Don't act with malicious intent.</li>
                                </ul>
                            </li>
                            <li>No general item duping</li>
                            <li>The falling entity dupe is allowed for sand, and only sand</li>
                            <li>No Hacks!
                                <ul>
                                    <li>Some mods are allowed, like Optifine, Minihud, or QoL UI mods.</li>
                                    <li>If you're unsure if its allowed, reach out!</li>
                                </ul>
                            </li>
                            <li>Try to keep the spawn area looking nice.
                                <ul>
                                    <li>Don't build your base right next to spawn.</li>
                                    <li>Fill in creeper holes.</li>
                                    <li>Don't leave floating trees.</li>
                                </ul>
                            </li>
                            <li>Have fun!</li>
                        </ol>
                        <h5 style={{color:"#58db58"}}>In short, have fun but don't ruin the fun for others!</h5>
                    </div>
                    <div className='details-container'>
                        <h3 className="fontOutlineWhite" style={{color: '#fff'}}>Whitelisted</h3>
                        <p>This server is only open to people who have been been approved to join. All SPS Students are welcome.</p>
                        <p>To get whitelisted:</p>
                        <p>Join the club's discord at <a href={'https://discord.gg/sxxMY6r3w'}>https://discord.gg/sxxMY6r3w</a> and add your username to the whitelist-me channel</p>
                        <p>Or Email me at henry.abrahamsen@sps.edu</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
