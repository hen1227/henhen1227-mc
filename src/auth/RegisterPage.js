import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Auth.css"
import {useAuth} from "./AuthContext";

function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== passwordConfirm) {
            return setError("Passwords do not match");
        }

        try {
            const response = await fetch('http://localhost:4001/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password})
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            login(data.accessToken, data.user);
            navigate("/account");

        } catch (err) {
            console.error('Failed to create an account', err);
            setError('Failed to create an account');
        }
    };

    return (
        <div className="register-form-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="auth-input"
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="auth-input"
                        required
                    />
                </label>
                <label>
                    Confirm Password:
                    <input
                        type="password"
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        className="auth-input"
                        required
                    />
                </label>
                {error && <p className="auth-error">{error}</p>}
                <button type="submit" className="auth-button">Register</button>
                <p className="auth-alt-option">Already have an account? <button onClick={() => navigate("/login")} className="auth-alt-button">Login</button></p>
            </form>
        </div>
    );
}

export default RegisterPage;
