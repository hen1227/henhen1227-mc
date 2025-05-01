// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* Public routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<HomePage />} />
                {/*<Route path="/community" element={<CommunityPage />} />*/}

                {/* Not found and redirects */}
                {/*<Route path="/404" element={<NotFoundPage />} />*/}
                {/*<Route path="*" element={<Navigate to="/404" replace />} />*/}
            </Routes>
        </Router>
    );
};

export default App;
