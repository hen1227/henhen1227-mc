import React, { useEffect, useState } from "react";
import '../components/ShopCard';
import ShopCard from "./ShopCard";

function DailyShop({isEditing}) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4001/minecraft/dailyDiscounts')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <>
        <h3>Daily Discounts</h3>
        <div className="shop">
            {items.map((item) => (
                <ShopCard key={item.id} item={item} isFlippable={true} isEditing={isEditing}/>
            ))}
        </div>
        </>
    );
}

export default DailyShop
