import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

interface ServerStatus {
    online: boolean;
    players: {
        online: number;
        max: number;
    };
    version: string;
}

const MinecraftHeader = () => {
    const [isCopied, setIsCopied] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [serverStatus, setServerStatus] = useState<ServerStatus>({
        online: false,
        players: {
            online: 0,
            max: 20
        },
        version: ""
    });
    const [loading, setLoading] = useState(true);
    const serverIp = "mc.henhen1227.com";

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const fetchServerStatus = async () => {
            try {
                const response = await fetch(`https://api.mcstatus.io/v2/status/java/${serverIp}`);
                const data = await response.json();

                if (data && data.online) {
                    setServerStatus({
                        online: true,
                        players: {
                            online: data.players.online,
                            max: data.players.max
                        },
                        version: data.version.name_clean
                    });
                } else {
                    setServerStatus({
                        online: false,
                        players: { online: 0, max: 0 },
                        version: ""
                    });
                }

                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch server status:", error);
                setLoading(false);
            }
        };

        fetchServerStatus();
        const intervalId = setInterval(fetchServerStatus, 60000);
        return () => clearInterval(intervalId);
    }, []);

    const handleCopyClick = async () => {
        try {
            await navigator.clipboard.writeText(serverIp);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 1500);
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };

    return (
        <div className={`minecraft-header ${isVisible ? 'visible' : ''}`}>
            <div className="header-content">
                <img
                    src="/images/general/largeIcon.jpg"
                    alt="Chicken Craft server icon"
                    className="server-icon"
                />

                <div className="server-info">
                    <h1 className="server-title">Chicken Craft</h1>
                    <h2 className="server-subtitle">Survival • Building • Community</h2>

                    <div className="server-ip-container">
                        <div className="minecraft-ip-box">
                            <input
                                type="text"
                                value={serverIp}
                                readOnly
                                onClick={handleCopyClick}
                            />
                            <button
                                onClick={handleCopyClick}
                                className={isCopied ? 'copied' : ''}
                            >
                                {isCopied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                        <div className="server-version">
                            <strong>{serverStatus.version}</strong><br />
                        </div>
                        <div className="player-count">
                            <span className={`online-dot ${serverStatus.online ? 'active' : 'inactive'}`}></span>
                            <span>
                                {loading ? (
                                    "Checking server status..."
                                ) : serverStatus.online ? (
                                    <>
                                        Online Players: <strong>{serverStatus.players.online}/{serverStatus.players.max}</strong>
                                    </>
                                ) : (
                                    "Server currently offline"
                                )}
                            </span>
                        </div>
                    </div>

                    <div className="header-actions">
                        <a href="#join-section" className="minecraft-button primary">Join Now</a>
                        <a href="#features" className="minecraft-button secondary">Features</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MinecraftHeader;
