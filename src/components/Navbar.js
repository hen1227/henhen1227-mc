import {Nav, Navbar} from "react-bootstrap";
import React from "react";
import {useAuth} from "../auth/AuthContext";
import {Link} from "react-router-dom";


const MinecraftNavbar = () => {
    const { currentUser } = useAuth();

    return (
    <Navbar style={{"position": "absolute", "top":"0", "width":"100%", "zIndex":"20", paddingLeft: "30px", "paddingRight":"30px"}} expand="lg" bg="dark" data-bs-theme="dark">
        <Navbar.Brand href="/">MC.Henhen1227.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                {/*<Nav.Link href="/current">Game Chat</Nav.Link>*/}
                {/*<Nav.Link href="/upcoming">Upcoming Events</Nav.Link>*/}
                {/*<Nav.Link href="/past">Past Worlds</Nav.Link>*/}
                {/*<Nav.Link href="/shop">In Game Shop</Nav.Link>*/}
                <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
                {/*<Nav.Link href="/funding">Funding</Nav.Link>*/}
            </Nav>
        </Navbar.Collapse>
        {/*<Navbar.Collapse className="justify-content-end">*/}
        {/*    {currentUser && (*/}
        {/*    <div>*/}
        {/*        <img src={currentUser.avatar} style={{width:"24px", marginRight:"16px"}} alt="Minecraft Avatar" />*/}
        {/*        <Link to="/account"*/}
        {/*              style={{*/}
        {/*                  color: currentUser.isOp ? 'red' : currentUser.isVerified ? 'white' : 'yellow',*/}
        {/*                  textDecoration: 'none',*/}
        {/*        }}>*/}
        {/*            {currentUser.username}*/}
        {/*        </Link>*/}
        {/*        {!currentUser.isVerified && <span>?</span>}*/}
        {/*    </div>*/}
        {/*)}*/}
        {/*    {!currentUser && (*/}
        {/*        <div>*/}
        {/*            <Link to="/login" style={{color: 'white', textDecoration: 'none'}}>Login</Link>*/}
        {/*            <span> | </span>*/}
        {/*            <Link to="/register" style={{color: 'white', textDecoration: 'none'}}>Create Account</Link>*/}
        {/*        </div>*/}
        {/*    )}*/}
        {/*</Navbar.Collapse>*/}
    </Navbar>
    );
}

export default MinecraftNavbar;
