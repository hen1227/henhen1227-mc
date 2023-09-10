import React, {createContext, useState} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import { ToastContainer} from "react-toastify";

import Navbar from './components/Navbar'
import HomePage from './pages/HomePage';
import CurrentServerPage from './pages/CurrentServerPage';
import ShopPage from './pages/ShopPage';
import UpcomingPage from './pages/UpcomingPage';
import PastServersPage from './pages/PastServersPage';
import RegisterPage from './auth/RegisterPage';
import LoginPage from './auth/LoginPage';
import AccountPage from './auth/AccountPage';
import MinecraftBackground from "./components/MinecraftBackground";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ServerRouter from "./servers/ServerRouter";

import { AuthProvider } from "./auth/AuthContext";
import AdminRouter from "./admin/AdminRouter";
import FundingPage from "./pages/FundingPage";


const App = () => {
    // toast.configure();

    return (
        <AuthProvider>
        <Router>
            <Navbar />
            <div className={"App"}>
                <Routes>
                    <Route path="/*" exact element={<HomePage />} />
                    {/*<Route path="/current" element={<CurrentServerPage />} />*/}
                    {/*<Route path="/shop" element={<ShopPage />} />*/}
                    {/*<Route path="/upcoming" element={<UpcomingPage />} />*/}
                    {/*<Route path="/past" element={<PastServersPage />} />*/}
                    {/*<Route path="/funding" element={<FundingPage />} />*/}
                    {/*<Route path="/register" element={<RegisterPage />} />*/}
                    {/*<Route path="/login" element={<LoginPage />} />*/}
                    {/*<Route path="/account" element={<AccountPage />} />*/}
                    {/*<Route path="/server/*" element={<ServerRouter />} />*/}
                    {/*<Route path="/admin/*" element={<AdminRouter />} />*/}
                </Routes>
            </div>
            <MinecraftBackground />
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </Router>
        </AuthProvider>
    );
};

export default App;