import React, { useState, useEffect } from 'react';
import { fetchWhitelist, getMinecraftAvatarUrl, WhitelistedPlayer } from '../services/API';
import '../styles/WhitelistedPlayers.css';

interface WhitelistedPlayersProps {
    maxDisplay?: number; // Optional maximum number of players to display
}

const WhitelistedPlayers: React.FC<WhitelistedPlayersProps> = ({ maxDisplay }) => {
    const [players, setPlayers] = useState<WhitelistedPlayer[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadWhitelist = async () => {
            try {
                setIsLoading(true);
                const whitelistedPlayers = await fetchWhitelist();

                // Sort players alphabetically by username
                const sortedPlayers = [...whitelistedPlayers].sort((a, b) =>
                    a.username.localeCompare(b.username)
                );

                setPlayers(sortedPlayers);
                setError(null);
            } catch (err) {
                console.error('Error loading whitelist:', err);
                setError('Failed to load whitelisted players. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        };

        void loadWhitelist();
    }, []);

    // Filter players if maxDisplay is specified
    const displayedPlayers = maxDisplay
        ? players.slice(0, maxDisplay)
        : players;

    // Function to handle avatar loading errors
    const handleAvatarError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement;
        target.src = '/images/minecraft/avatars/steve.png';
        target.onerror = null; // Prevent infinite fallback loop
    };

    return (
        <div className="whitelist-container">
            <h2 className="whitelist-title">
                Whitelisted Players
            </h2>

            {isLoading ? (
                <div className="spinner"></div>
            ) : error ? (
                <div className="error-message">{error}</div>
            ) : players.length === 0 ? (
                <div className="no-players-message">No players are currently whitelisted.</div>
            ) : (
                <>
                    <div className="players-grid">
                        {displayedPlayers.map((player) => (
                            <div key={player.id} className="player-card">
                                <div className="player-avatar">
                                    <img
                                        src={getMinecraftAvatarUrl(player.username, 64)}
                                        alt={`${player.username}'s avatar`}
                                        onError={handleAvatarError}
                                    />
                                </div>
                                <div className="player-name">{player.username}</div>
                            </div>
                        ))}
                    </div>

                    {maxDisplay && players.length > maxDisplay && (
                        <div className="view-more-container">
                            <span>{players.length - maxDisplay} more players whitelisted</span>
                            <a href="/community" className="view-all-link">View All</a>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default WhitelistedPlayers;
