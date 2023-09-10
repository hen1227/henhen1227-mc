import React, {useState} from 'react';
import Shop from "../components/Shop";
import DailyShop from "../components/DailyShop";
import '../components/Shop.css';
import {useAuth} from "../auth/AuthContext";
import {Link} from "react-router-dom";


const ShopPage = () => {
    const { currentUser } = useAuth();
    const [isEditing, setIsEditing] = useState(false);

    const handleToggleEditing = () => {
        setIsEditing(!isEditing);
    }

    return (
        <>
            <div className="main-container">
                {/*<div className="details-container">*/}
                    <div className={"user-account"}>
                        { currentUser && (
                            <>
                                <h3>{currentUser.username}</h3>
                                <img src={currentUser.avatar} alt="avatar" className={"avatar"} />
                                <p>Balance: {currentUser.points} points</p>
                            </>
                        )}
                    </div>
                {/*</div>*/}
                <h1 style={{paddingTop:"120px"}}>Shop</h1>
                <div>
                    <DailyShop isEditing={isEditing} />
                    <Shop isEditing={isEditing} />
                </div>
                { currentUser && currentUser.isOp && (
                    <>
                    <h3>Admin Controls</h3>
                    <div className="shop">
                        <div className={`shop-card`}>
                                <h2>Create New Item</h2>
                                <p> </p>

                                <Link to={"/admin/createItem"} className="card-bottom"><button>Create</button></Link>
                        </div>
                        <div className={`shop-card`}>
                            <div className="inner">
                                <h2>Edit Items</h2>
                                <p>Be careful!</p>

                                <button onClick={handleToggleEditing} className="card-bottom">Toggle Edit Mode</button>
                            </div>
                        </div>
                    </div>
                    </>
                )}
            </div>
        </>
    );
};

export default ShopPage;
