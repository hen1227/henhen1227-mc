import React from 'react';
import './Podium.css';

function Podium({ players, values }) {
    console.log("Podium");
    console.log(players);
    console.log(values);


    // let top3 = players;

    return (
        <div className="podium-container">
            {players.length > 1 && (
                <div className="podium-item" id="second">
                    <div className="podium-value" key={players}>{players[1]}</div>
                    <div className="podium-label">{values[1]} points</div>
                </div>
            )}
            {players.length > 0 && (
                <>
                    <div className="podium-item" id="first">
                        <div className="podium-value">{players[0]}</div>
                        <div className="podium-label">{values[0]} points</div>
                        <p>1st</p>
                    </div>
                </>
            )}
            {players.length > 2 && (
                <div className="podium-item" id="third">
                    <div className="podium-value">{players[2]}</div>
                    <div className="podium-label">{values[2]} points</div>
                </div>
            )}
            {players.length === 0 && (
                <div style={{flexDirection:'column'}}>
                    <h4>No one</h4>
                    <p>Be the first!</p>
                </div>
            )}
        </div>
    );
}

export default Podium;
