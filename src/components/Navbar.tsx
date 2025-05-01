import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const MinecraftNavbar = () => {
    const [copied, setCopied] = useState(false);
    const location = useLocation();

    const copyServerIP = () => {
        navigator.clipboard.writeText("mc.henhen1227.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const isActive = (path: string) => location.pathname === path;

    return (
        <Navbar expand="lg" variant="dark" fixed="top" className="minecraft-navbar">
            <Navbar.Brand as={Link} to="/" className="brand-container">
                <div className="brand-logo-container">
                    <img src="/images/general/largeIcon.jpg" alt="Chicken Craft" className="navbar-logo" />
                </div>
                <span className="brand-text">Chicken Craft</span>
            </Navbar.Brand>

            {/*<Navbar.Collapse id="basic-navbar-nav">*/}
            {/*    <Nav className="main-nav">*/}
            {/*        <Nav.Link as={Link} to="/" className={isActive('/') ? 'active' : ''}>Home</Nav.Link>*/}
            {/*        <Nav.Link as={Link} to="/community" className={isActive('/community') ? 'active' : ''}>Community</Nav.Link>*/}
            {/*    </Nav>*/}
            {/*</Navbar.Collapse>*/}

            <div className="nav-server-ip">
                <div className="server-ip-display">
                    <span className="server-ip-text">mc.henhen1227.com</span>
                    <button onClick={copyServerIP} className={`copy-button ${copied ? 'copied' : ''}`}>
                        {copied ? 'Copied!' : 'Copy IP'}
                    </button>
                </div>
            </div>

        </Navbar>
    );
};

export default MinecraftNavbar;
