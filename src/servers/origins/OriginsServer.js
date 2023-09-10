import React from 'react';
import MinecraftLogo from '../../components/Header';
import DiscordButton from '../../components/DiscordButton';
import MinecraftBackground from '../../components/MinecraftBackground';
import '../Servers.css';
import ModdedSetupInstructions from "../components/ModdedSetupInstructions"

import OriginsModListFile from "./OriginsModList.txt";
import ModList from "../components/ModList";

function Home() {
    const downloadLink = "https://api.henhen1227.com/downloads/minecraft/originsModpack";

    return (
        <>
            <div className="main-container">
                <MinecraftLogo />
                <div className={"minecraft-server-details"}>
                    <h2>Origins Modded Server</h2>
                    <h4>1.19.2</h4>
                    <p>Starting Sunday, July 9th, come play on this hardcore modded server (6 lives each). Each life you are given a random Origin which will grant you abilities.</p>
                </div>

                <ModList downloadLink={downloadLink} modListFile={OriginsModListFile}/>
                <ModdedSetupInstructions />
                <DiscordButton />
                <MinecraftBackground/>
            </div>
        </>
    );
}

export default Home;
