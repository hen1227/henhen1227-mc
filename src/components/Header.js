import React, {useState} from 'react';
import './Header.css';

const MinecraftLogo = () => {

    const [isCopied, setIsCopied] = useState(false);
    const copyText = "mc.henhen1227.com"


    async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
    }

    const handleCopyClick = () => {
        // Asynchronously call copyTextToClipboard
        copyTextToClipboard(copyText)
            .then(() => {
                // If successful, update the isCopied state value
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 1500);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="minecraftHeader">
            <img src="/Users/henryabrahamsen/WebstormProjects/henhen1227/public/images/minecraft/largeIcon.jpg" alt="Minecraft server icon"/>
            <br/>
            <div className="minecraftIP">
                <input type="text" value="mc.henhen1227.com" readOnly/>
                <button onClick={handleCopyClick}>
                    <span>{isCopied ? 'Copied!' : 'Copy   '}</span>
                </button>
            </div>
        </div>
    );
};

export default MinecraftLogo;