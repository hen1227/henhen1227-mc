import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFoundPage.css';

const NotFoundPage: React.FC = () => {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404 - Page Not Found</h1>
            <p className="not-found-message">
                Oops! The page you are looking for does not exist.
            </p>
            <Link to="/" className="minecraft-button primary">
                Return to Home
            </Link>
        </div>
    );
};

export default NotFoundPage;
