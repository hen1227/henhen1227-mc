// src/services/API.ts
import axios from 'axios';

// Types
export interface WhitelistResponse {
    count: number;
    players: string[];  // Array of Minecraft usernames
}

export interface WhitelistedPlayer {
    username: string;
    id: string; // Using username as ID since there's no Discord ID
}

// Load backend URL from .env or use default
const backendURL = process.env.REACT_APP_BACKEND_URL || 'https://api.mc.henhen1227.com';

// API client setup with error handling
const apiClient = axios.create({
    baseURL: backendURL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000, // 10 second timeout
});

/**
 * Fetches whitelist data from the server
 * @returns Promise<WhitelistedPlayer[]> Array of whitelisted players
 */
export const fetchWhitelist = async (): Promise<WhitelistedPlayer[]> => {
    try {
        console.log('Fetching whitelist from:', `${backendURL}/api/whitelist`);
        const response = await apiClient.get<WhitelistResponse>('/api/whitelist');

        // Transform the response data into an array of WhitelistedPlayer objects
        const playersArray: WhitelistedPlayer[] = response.data.players.map(
            (username) => ({
                username,
                id: username // Using username as ID
            })
        );

        console.log(`Fetched ${playersArray.length} whitelisted players`);
        return playersArray;
    } catch (error) {
        console.error('Error fetching whitelist:', error);

        // For development: Return mock data if API fails
        if (process.env.NODE_ENV === 'development') {
            console.warn('Using mock whitelist data for development');
            return [
                { id: 'Steve', username: 'Steve' },
                { id: 'Alex', username: 'Alex' },
                { id: 'Notch', username: 'Notch' },
                { id: 'Jeb_', username: 'Jeb_' }
            ];
        }

        // Return empty array in production
        return [];
    }
};

/**
 * Gets the total count of whitelisted players
 * @returns Promise<number> Count of whitelisted players
 */
export const getWhitelistCount = async (): Promise<number> => {
    try {
        const response = await apiClient.get<WhitelistResponse>('/api/whitelist');
        return response.data.count;
    } catch (error) {
        console.error('Error fetching whitelist count:', error);
        return 0;
    }
};

/**
 * Gets server status including online players
 * @returns Promise with server status information
 */
export const getServerStatus = async () => {
    try {
        const response = await fetch(`https://mcapi.us/server/status?ip=mc.henhen1227.com`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching server status:', error);
        return {
            online: false,
            players: { online: 0, max: 0 }
        };
    }
};

// Minecraft skin utilities

/**
 * Gets the URL for a Minecraft player's head/avatar
 * @param username Minecraft username
 * @param size Size of the avatar in pixels (default: 64)
 * @returns URL to the player's avatar
 */
export const getMinecraftAvatarUrl = (username: string, size: number = 64): string => {
    // Use MC-Heads API that works with usernames
    return `https://mc-heads.net/avatar/${username}/${size}`;
};

/**
 * Gets the URL for a Minecraft player's body
 * @param username Minecraft username
 * @param size Size of the render (default: 160)
 * @returns URL to the player's body render
 */
export const getMinecraftBodyUrl = (username: string, size: number = 160): string => {
    // Use Minotar API for body renders
    return `https://minotar.net/body/${username}/${size}`;
};

export default {
    fetchWhitelist,
    getWhitelistCount,
    getServerStatus,
    getMinecraftAvatarUrl,
    getMinecraftBodyUrl
};
