import React from 'react';
import MinecraftNavbar from '../components/Navbar';
import WhitelistedPlayers from '../components/WhitelistedPlayers';

const CommunityPage: React.FC = () => {
    // Function to copy command to clipboard
    const copyCommand = () => {
        navigator.clipboard.writeText("/whitelist username:");

        // Get the copy button element
        const copyBtn = document.getElementById('copy-command-btn');
        if (copyBtn) {
            // Change text temporarily
            const originalText = copyBtn.innerText;
            copyBtn.innerText = 'Copied!';

            // Reset after 2 seconds
            setTimeout(() => {
                copyBtn.innerText = originalText;
            }, 2000);
        }
    };

    return (
        <div className="page-container">
            <MinecraftNavbar />

            <div className="page-content">
                <div className="container">
                    <h1 className="page-title">Our Community</h1>

                    <div className="community-intro">
                        <p>
                            Welcome to the Chicken Craft community! We're a friendly group of players who enjoy building,
                            exploring, and having fun together in our Minecraft world.
                        </p>
                    </div>

                    <WhitelistedPlayers />

                    <div className="how-to-join" id="join">
                        <h2 className="section-title">How to Join Our Community</h2>
                        <div className="join-info">
                            <p>
                                Want to become part of our server? Follow these simple steps to get whitelisted:
                            </p>

                            <ol className="join-steps">
                                <li>
                                    <strong>Join our Discord</strong>
                                    <p>First, join our Discord server to connect with the community</p>
                                    <a href="https://discord.gg/Ax5XhTF6Vp" className="minecraft-button secondary" target="_blank" rel="noopener noreferrer">
                                        Join Discord
                                    </a>
                                </li>
                                <li>
                                    <strong>Contribute to the server</strong>
                                    <p>To help keep the server running smoothly, we ask all players to subscribe to the discord server's $3 a month.</p>
                                    <p>We realize this isn't ideal, but it's important to keep the server fair. The server doesn't have any ranks or other pay to win features as a result. Just simple Minecraft.</p>
                                </li>
                                <li>
                                    <strong>Get Whitelisted!</strong>
                                    <p>Go to the #whitelist-me channel and use the command below with your Minecraft username:</p>
                                    <p>/whitelist **Username**</p>
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="community-rules">
                        <h2 className="section-title">Community Guidelines</h2>
                        <div className="rules-content">
                            <p>
                                To ensure everyone has a great experience, we ask all members to follow these guidelines:
                            </p>

                            <ul className="rules-list">
                                <li>Be respectful to all players</li>
                                <li>No griefing or stealing from others (keep things kind)</li>
                                <li>No cheating or using exploits</li>
                                <li>Keep chat friendly and mostly appropriate</li>
                                <li>Report any issues to a staff member</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="minecraft-footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Chicken Craft</h3>
                        <p>A friendly Minecraft survival server</p>
                        <p>Server IP: mc.henhen1227.com</p>
                    </div>

                    <div className="footer-section">
                        <h3>Links</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/community">Community</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Connect</h3>
                        <ul>
                            <li><a href="https://discord.gg/Ax5XhTF6Vp" target="_blank" rel="noopener noreferrer">Discord</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Henhen1227 LLC - Not affiliated with Mojang AB</p>
                </div>
            </footer>
        </div>
    );
};

export default CommunityPage;
