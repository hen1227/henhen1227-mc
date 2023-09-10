import React, { useEffect, useState, useRef } from "react";
import {useAuth} from "../auth/AuthContext";

function LiveChat() {
    const { currentUser } = useAuth();
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [connectionCount, setConnectionCount] = useState(0); // New state variable
    const [serverStatus, setServerStatus] = useState(false); // New state variable
    const ws = useRef(null);

    useEffect(() => {
        ws.current = new WebSocket('ws://192.168.40.50:4001/minecraftClient');

        ws.current.onopen = () => {
            console.log('connected to websocket server');
        }

        ws.current.onmessage = evt => {
            console.log('received: ', evt.data);

            if (typeof evt.data === "string") {
                const parsedJson = JSON.parse(evt.data);
                handleParsedData(parsedJson);
            } else if (evt.data instanceof Blob) {
                var reader = new FileReader();

                reader.onload = (evt) => {
                    const text = evt.target.result;

                    // Now we can parse the JSON
                    const parsedJson = JSON.parse(text);
                    handleParsedData(parsedJson);
                }

                reader.readAsText(evt.data, 'UTF-8');
            }
        }

        const handleParsedData = (parsedJson) => {
            // Handle special message types
            if (parsedJson.type === 'updateClientCount') {
                setConnectionCount(parsedJson.count);
                return;
            }else
            if (parsedJson.type === 'updateServerStatus') {
                console.log("Received server status update: " + parsedJson.status);
                setServerStatus(parsedJson.status);
                console.log(serverStatus)
                return;
            }else
            if (parsedJson.type === 'chatMessage') {
                setMessages(prev => [...prev, parsedJson]);
            }else
            if (parsedJson.type === 'playerJoin') {
                setMessages(prev => [...prev, parsedJson]);
            }else
            if (parsedJson.type === 'playerAchievement') {
                setMessages(prev => [...prev, parsedJson]);
            }else
            if (parsedJson.type === 'playerDeath') {
                setMessages(prev => [...prev, parsedJson]);
            }
        }


        return () => {
            ws.current.close();
        }
    }, [serverStatus]);


    const sendMessage = () => {
        if (ws.current.readyState === WebSocket.OPEN) {
            const message = `<${currentUser.username}> ${inputValue}`;
            const jsonMessage = JSON.stringify({
                origin: 'website',
                type: 'chatMessage',
                message: message,
            });
            ws.current.send(jsonMessage);
            setInputValue("");
        }
    }

    return (
        <>
            {currentUser && currentUser.isVerified && (
                <div>
                    <ul>
                        {messages.map((message, index) => (
                            <li key={index}>{(message.origin === "website" ? "[Web] " : "") + message.message}</li>
                        ))}
                    </ul>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                    />
                    <button onClick={sendMessage}>Send</button>
                    <p>Number of active connections: {connectionCount}</p> {/* Display connection count */}
                    <p>Minecraft server is { serverStatus ? 'connected' : 'not connected' }</p>
                </div>
            )}
            {!currentUser && (
                <div>
                    <p>Please create an account to access the chat.</p>
                </div>
            )}
            {currentUser && !currentUser.isVerified && (
                <div>
                    <p>Please verify your account to access the chat.</p>
                </div>
            )}
        </>
    );
}

export default LiveChat;
