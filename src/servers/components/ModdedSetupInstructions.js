import React from 'react';

const ModdedSetupInstructions = (props) => (
    <>
        <div className={"details-container"}>
            <div style={{width:"70%", margin:"auto"}}>
                <h3>Setup mod pack WITH <a href={"https://www.curseforge.com/minecraft"} target="_blank">Curseforge</a>:</h3>
                <p><b>1.</b>Download the <a href={props.downloadLink} target="_blank">modpack.</a></p>
                <p><b>2.</b>Open curseforge and navigate to the minecraft page</p>
                <p><b>3.</b>Create custom profile</p>
                <p><b>4.</b>Import a previously created profile</p>
                <p><b>5.</b>Select the modpack zip file.</p>
                <p><b>6.</b>Once downloaded, click play.</p>
            </div>
        </div>
        <div className={"details-container"}>
            <div style={{width:"70%", margin:"auto"}}>
                <h3>Setup mod pack WITHOUT <a href={"https://www.curseforge.com/minecraft"} target="_blank">Curseforge</a>:</h3>
                <p><b>1.</b>Download fabric <a href={"https://fabricmc.net/use/installer/"} target="_blank">installer</a></p>
                <p><b>2.</b>Download and unzip the <a href={props.downloadLink} target="_blank">modpack.</a></p>
                <p><b>3.</b>Open fabric installer as admin (right click, open) and select client, version 1.19.2.</p>
                <p><b>4.</b>Open minecraft launcher > go to installations > fabric-loader-1.19.2</p>
                <p><b>5.</b>Set the game directory to the downloaded modpack folder.</p>
                <p><b>6.</b>Not necessary but recommended, in more options, the JVM arguments, I recommend setting <span style={{color:"orange", background:"#404040", borderRadius:"5px", padding:"2px"}}>-Xmx2G</span> to a higher value around <span style={{color:"orange", background:"#404040", borderRadius:"5px", padding:"2px"}}>-Xmx{props.recommendedRAM}G</span>. But don't set higher than your computer's installed RAM.</p>
            </div>
        </div>
    </>
)

export default ModdedSetupInstructions;