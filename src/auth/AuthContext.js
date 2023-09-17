import React, { useContext, createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            // Fetch user data from the server
            fetch('http://localhost:4001/auth/account', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Error: ' + response.status);
                    }
                })
                .then(data => {
                    data.token = token;
                    data.avatar = `https://crafatar.com/avatars/${data.uuid}?overlay=true`;
                    setCurrentUser(data);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.error('Error:', error);
                    localStorage.removeItem('token');
                    setIsLoading(false);
                });
        }else{
            setIsLoading(false);
        }
    }, []);

    // This is a placeholder, replace with login logic
    const login = (token, user) => {
        localStorage.setItem('token', token);
        setCurrentUser(user);
    };

    // This is a placeholder, replace with logout logic
    const logout = () => {
        localStorage.removeItem('token');
        setCurrentUser(null);
    };

    const value = {
        currentUser,
        isLoading,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
