import React, { useEffect, useState } from "react";
import ShopCard from "./ShopCard";

function Shop({isEditing}) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4001/minecraft/shopItems')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <>
        <h3>Assorted Goods</h3>
        <div className="shop">
            {items.map((item) => (
                <ShopCard key={item.id} item={item} isEditing={isEditing}/>
            ))}
        </div>
        </>
    );
}

export default Shop;
