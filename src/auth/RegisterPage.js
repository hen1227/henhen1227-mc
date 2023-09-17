import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Auth.css"
import {useAuth} from "./AuthContext";
import sendAPICall from "./APIs";

function RegisterPage() {
    const [email, setEmail] = useState('');
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
            const data = await sendAPICall('/register', 'POST', {email, password}, null, true);

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
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
