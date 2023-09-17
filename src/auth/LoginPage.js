import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from './AuthContext';
import './Auth.css';
import sendAPICall from "./APIs";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const data = await sendAPICall('/login', 'POST', { email, password }, null, true);

            login(data.accessToken, data.user);

            navigate("/account");

        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="login-form-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="auth-input"
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="auth-input"
                    />
                </label>
                <button type="submit" className="auth-button">Log in</button>
                {error && <p className="auth-error">{error}</p>}
                <button onClick={() => navigate("/register")} className="auth-button-secondary">Create Account</button>
            </form>
        </div>
    );
}

export default LoginPage;
