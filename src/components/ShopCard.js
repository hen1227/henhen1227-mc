import React, { useEffect, useState } from "react";
import "./Shop.css"
import {useAuth} from "../auth/AuthContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ShopCard({ item, isFlippable = false, isEditing = false }) {
    const { currentUser } = useAuth();
    const [isFlipped, setIsFlipped] = useState(false);

    const handleDelete = async () => {
        if (!window.confirm('Are you sure you want to delete this item?')) {
            return;
        }

        try {
            const response = await fetch(`http://localhost:4001/minecraft/shopItems/${item.id}`, {
                headers: {
                    'Authorization': `Bearer ${currentUser.token}`
                },
                method: 'DELETE',
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Failed to delete item:', errorData);
                toast.error('Error: ' + (errorData.message || 'Failed to delete item'));
                return;
            }

            toast.success('Item deleted successfully');
            window.location.reload();
        } catch (error) {
            toast.error('An error occurred while deleting the item');
            console.error('An error occurred while deleting the item:', error);
        }
    };

    const handlePurchase = async () => {
        if (!currentUser) {
            toast.error('You need to be logged in to purchase items');
            return;
        }
        if (currentUser.points < item.cost) {
            toast.error('You do not have enough points to purchase this item');
            return;
        }
        if(!currentUser.isVerified){
            toast.error('You need to verify your account to purchase items');
            return;
        }
        try {
            const userId = currentUser.id;
            const itemId = item.id;
            const response = await fetch('http://localhost:4001/minecraft/purchase', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${currentUser.token}`
                },
                body: JSON.stringify({ userId, itemId }),
            });

            // If the server response is not ok, throw an error
            if (!response.ok) {
                toast.error("Error occurred while making purchase (" + response.status + ")");
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data.error) {
                toast.error('Error: ' + data.error);
            } else {
                toast.success('Purchase successful');
                toast.success('You can find your item at: (' + data.purchase.location.x + ', ' + data.purchase.location.z + ')! Happy Searching!', {autoClose: false});
            }
        } catch (error) {
            toast.error(error);
            console.error('An error occurred while making the purchase:', error);
        }
    }


    useEffect(() => {
        if (isFlippable) {
            const timeoutId = setTimeout(() => {
                setIsFlipped(true);
            }, 500); // delay before card flip

            return () => clearTimeout(timeoutId); // cleanup on unmount
        }
    }, [isFlippable]);

    return (
        <div className={`shop-card ${item.rarity}`}>
            {currentUser && currentUser.isOp && isEditing && (
                <button className="delete-button" onClick={handleDelete}>
                    Delete
                </button>
            )}
            <div className="card-top">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
            </div>
            <div className="card-bottom">
                <p className={`shop-cost ${item.discounted ? "crossed-out" : ""}`}>Cost: {item.cost} points</p>
                {item.discounted && <p className={`shop-cost`}>Cost: {Math.ceil(item.cost / 2)} points</p>}
                {item.discounted && <p>Daily Discount!</p>}
                <button onClick={handlePurchase}>Buy</button>
                <p>{item.uniqueId}</p>
            </div>
        </div>
    );
}

export default ShopCard
