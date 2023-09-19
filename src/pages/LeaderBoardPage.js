import React, {useEffect, useState} from "react";
import Podium from "../components/Podium";
import sendAPICall from "../auth/APIs";


const LeaderBoardPage = () => {
    const [allPlayers, setAllPlayers] = useState([]);

    useEffect(() => {
        sendAPICall('/players', 'GET', {}, null, false).then((data) => {
            setAllPlayers(data.map((player)=>{
                return player;
            }));

            console.log("All players: ", data);
            // console.log(allPlayers.sort((a, b) => b.points - a.points));
        });
    }, []);


    return (
        <div className={'main-container'}>
            <h1 style={{paddingBottom: 100}}>Leaderboards:</h1>

            <h3>Total Points</h3>
            {allPlayers && <Podium allPlayersData={allPlayers} players={allPlayers.sort((a, b) => b.points - a.points).map((p) => p.username)} values={allPlayers.map((p) => p.points)}/>}

            {/*<h3>Event Wins</h3>*/}
            {/*{allPlayers && <Podium players={allPlayers.sort((a, b) => b.eventWins - a.eventWins)} values={allPlayers.map((p) => p.eventWins)}/>}*/}

            {/*<h3>Chat Game Wins</h3>*/}
            {/*{allPlayers && <Podium players={allPlayers.sort((a, b) => b.gameWins - a.gameWins)} values={allPlayers.map((p) => p.gameWins)}/>}*/}

            <div className={'details-container'}>
            <h2>Players: </h2>
            <ul style={{paddingBottom: 20, minHeight: 250, paddingTop: 10}}>
                {!allPlayers && <p>No players yet!</p>}
                {allPlayers && allPlayers.map((player) => (
                    <li key={player.username} style={{margin: 12.5}}>
                        <img src={`https://crafatar.com/avatars/${player.uuid}?overlay=true`} style={{width:"24px", marginRight:"16px"}} alt="Minecraft Avatar" />
                        {player.username} – {player.points} points
                    </li>
                ))}
            </ul>
            </div>
        </div>
    )
}


export default LeaderBoardPage;
