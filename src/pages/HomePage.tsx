import React, { useEffect } from 'react';
import MinecraftHeader from '../components/Header';
import MinecraftNavbar from '../components/Navbar';
import MinecraftBackground from '../components/MinecraftBackground';
import WhitelistedPlayers from '../components/WhitelistedPlayers';
import '../styles/HomePage.css';

const HomePage = () => {
    useEffect(() => {
        // Scroll animation for sections
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const sections = document.querySelectorAll('.fade-in-section');
        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className="home-page">
            {/*<MinecraftNavbar />*/}
            <MinecraftHeader />

            <main className="main-content">
                <MinecraftBackground />
                <section id="features" className="features-section fade-in-section">
                    <h2 className="section-title">Server Features</h2>
                    <div className="features-container">
                        <div className="feature-card">
                            <div className="feature-icon survival"></div>
                            <h3>Survival Gameplay</h3>
                            <p>Classic Minecraft survival experience on the latest snapshot! Slight tweaks here and there for a better experience, but vanilla at it's core.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon community"></div>
                            <h3>Friendly Community</h3>
                            <p>Join our community of players who help each other and build amazing projects together.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon fairplay"></div>
                            <h3>No Pay-to-Win</h3>
                            <p>All players are on equal footing—there are no paid ranks, perks, or advantages.</p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon amplified"></div>
                            <h3>Amplified Terrain</h3>
                            <p>The world uses Amplified generation for massive mountains, deep valleys, and dramatic landscapes—chosen for epic bases and scenic builds. Perfect for the new happy ghast!</p>
                        </div>
                    </div>
                </section>

                <section id="join-section" className="join-section fade-in-section">
                    <h2 className="section-title">How to Join</h2>
                    <div className="join-steps">
                        <div className="join-step">
                            <div className="step-number">1</div>
                            <h3>Join the Discord</h3>
                            <a href="https://discord.gg/Ax5XhTF6Vp" className="minecraft-button secondary" target="_blank" rel="noopener noreferrer">
                                Offical Server
                            </a>
                        </div>

                        <div className="join-step">
                            <div className="step-number">2</div>
                            <h3>Get Subscription</h3>
                            <p>Contribute to maintaining the server for $3 a month.</p>
                        </div>

                        <div className="join-step">
                            <div className="step-number">3</div>
                            <h3>Get Whitelisted</h3>
                            <p>In the #whitelist-me channel, do /whitelist your_username</p>
                        </div>

                        <div className="join-step">
                            <div className="step-number">4</div>
                            <h3>Connect & Play</h3>
                            <p>Type in the server IP and play!</p>
                        </div>
                    </div>

                    <div className="join-now-container">
                        <div className="server-ip-display">
                            <span className="ip-label">Server IP:</span>
                            <span className="ip-address">mc.henhen1227.com</span>
                            <button
                                className="copy-ip-button"
                                onClick={() => {
                                    navigator.clipboard.writeText("mc.henhen1227.com");
                                    alert("Server IP copied to clipboard!");
                                }}
                            >
                                Copy
                            </button>
                        </div>
                    </div>
                </section>

                <section className="rules-section fade-in-section">
                    <h2 className="section-title">Server Rules</h2>
                    <div className="rules-container">
                        <ul className="rules-list">
                            <li>Be respectful to all players</li>
                            <li>No griefing or stealing from other players</li>
                            <li>No hacking, cheating, or using exploits</li>
                            <li>No spamming in chat</li>
                            <li>No excessive redstone that causes lag</li>
                            <li>Have fun and be creative!</li>
                        </ul>
                        <p>Failure to follow these rules, or ruining the experience for others will result in being banned!</p>
                    </div>
                </section>

                <section className="community-section fade-in-section">
                    <h2 className="section-title">Our Community</h2>
                    <div className="community-description">
                        <p>Meet the players who make Chicken Craft an amazing place to play! </p>
                    </div>

                    {/* Display a limited number of whitelisted players */}
                    <WhitelistedPlayers />
                </section>
            </main>

            <footer className="minecraft-footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Chicken Craft</h3>
                        <p>Server IP: mc.henhen1227.com</p>
                    </div>

                    <div className="footer-section">
                        <h3>Links</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="#join-section">How to Join</a></li>
                            <li><a href="#features">Features</a></li>
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

export default HomePage;
