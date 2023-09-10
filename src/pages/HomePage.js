// HomePage.js
import React from 'react';
import './HomePage.css'

const HomePage = () => {
    return (
        <>
            <div className="App">
                <div className="titleImage">
                    <h3 className="fontOutline title">Welcome to Chicken Craft!</h3>
                    <div className="image"/>
                </div>
                <div style={{marginTop: 420}} className='main-container'>
                    <h2 style={{marginBottom: '40px'}}>Server Starting Wednesday 2pm (est)!</h2>
                    <div className='details-container'>
                        <h3 className="fontOutline">Rules</h3>
                        <ol className='details-list'>
                            <li>Griefing is allowed!
                                <ul>
                                    <li>Don't waste someones time.</li>
                                    <li>The grief has to be in good spirit.</li>
                                    <li>Abuse or excessive use of Griefing may result in a ban.</li>
                                </ul>
                            </li>
                            <li>Stealing is allowed!
                                <ul>
                                    <li>Players are encouraged to hide their valuables.</li>
                                    <li>The grief has to be in good spirit</li>
                                    <li>Abuse or excessive use of Stealing may result in a ban.</li>
                                </ul>
                            </li>
                            <li>No general item duping</li>
                            <li>The falling entity dupe is allowed for sand, and only sand</li>
                            <li>The general currency will be diamonds, however, other forms of currency are fine</li>
                            <li>Everyone is welcome on this server!</li>
                            <li>Everyone is susceptible to be banned on this server.</li>
                        </ol>
                        <h5 style={{color:"#58db58"}}>In short, have fun but don't ruin the fun for others!</h5>
                    </div>

                {/*    <div className='details-container'>*/}
                {/*        <h3 className="fontOutline">Plugins</h3>*/}
                {/*        <p>Subject to change!</p>*/}
                {/*        <ol className='details-list'>*/}
                {/*            <li>Multiverse (not used for gameplay)</li>*/}
                {/*            <li>Chicken Craft Core (custom made</li>*/}
                {/*            <li>No general item duping</li>*/}
                {/*            <li>The falling entity dupe is allowed for sand, and only sand</li>*/}
                {/*            <li>The general currency will be diamonds, however, other forms of currency are fine</li>*/}
                {/*            <li>Everyone is welcome on this server!</li>*/}
                {/*            <li>Everyone is susceptible to be banned on this server.</li>*/}
                {/*        </ol>*/}
                {/*        <h5 style={{color:"#58db58"}}>In short, have fun but don't ruin the fun for others!</h5>*/}
                {/*    </div>*/}
                </div>
            </div>
        </>
    );
};

export default HomePage;