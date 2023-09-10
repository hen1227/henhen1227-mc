import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from './AuthContext';
import './Auth.css';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:4001/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to log in');
            }
            const data = await response.json();
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
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
