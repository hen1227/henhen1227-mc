import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import OriginsServer from "./origins/OriginsServer";

const App = () => {
    return (
        <div>
            <nav>
                <Link to="me">My Profile</Link>
            </nav>

            <Routes>
                <Route path="origins" element={<OriginsServer />} />
            </Routes>
        </div>
    );
};

export default App;