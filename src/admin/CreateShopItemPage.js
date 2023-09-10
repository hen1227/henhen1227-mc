import React, {useState} from "react";
import "./AdminForms.css"
import {useNavigate} from "react-router-dom";
import {useAuth} from "../auth/AuthContext";


const possibleFlags = ["HIDE_ARMOR_TRIM", "HIDE_ATTRIBUTES", "HIDE_DESTROYS", "HIDE_DYE", "HIDE_ENCHANTS", "HIDE_PLACED_ON", "HIDE_POTION_EFFECTS", "HIDE_UNBREAKABLE"];
// Weirdly named by spigot: https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/enchantments/Enchantment.html
const possibleEnchantments = ["ARROW_DAMAGE", "ARROW_FIRE", "ARROW_INFINITE", "ARROW_KNOCKBACK", "BINDING_CURSE", "CHANNELING",
    "DAMAGE_ALL", "DAMAGE_ARTHROPODS", "DAMAGE_UNDEAD", "DEPTH_STRIDER", "DIG_SPEED", "DURABILITY", "FIRE_ASPECT", "FROST_WALKER",
    "IMPALING", "KNOCKBACK", "LOOT_BONUS_BLOCKS", "LOOT_BONUS_MOBS", "LOYALTY", "LUCK", "LURE", "MENDING", "MULTISHOT", "OXYGEN",
    "PIERCING", "PROTECTION_ENVIRONMENTAL", "PROTECTION_EXPLOSIONS", "PROTECTION_FALL", "PROTECTION_FIRE", "PROTECTION_PROJECTILE",
    "QUICK_CHARGE", "RIPTIDE", "SILK_TOUCH", "SOUL_SPEED", "SWEEPING_EDGE", "THORNS", "VANISHING_CURSE", "WATER_WORKER"];
const possibleRarities = ["Common", "Uncommon", "Rare", "Epic", "Legendary"];


const CreateShopItemPage = () => {
    const [title, setTitle] = useState("");
    const [uniqueId, setUniqueId] = useState("");
    const [description, setDescription] = useState("");
    const [cost, setCost] = useState(0);
    const [rarity, setRarity] = useState("Common");
    const [material, setMaterial] = useState("");
    const [lore, setLore] = useState("");
    const [enchantments, setEnchantments] = useState([]);
    const [flags, setFlags] = useState([]);
    const [unbreakable, setUnbreakable] = useState(false);
    const [mendingAllowed, setMendingAllowed] = useState(false);
    const [repairAllowed, setRepairAllowed] = useState(true);

    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const {currentUser} = useAuth();

    const submitItem = async (event) => {
        event.preventDefault();

        const data = {
            title: title,
            uniqueId: uniqueId,
            description: description,
            cost: cost,
            rarity: rarity,
            // material: material,
            // lore: lore,
            // enchantments: enchantments,
            // flags: flags,
            // unbreakable: unbreakable,
            // mendingAllowed: mendingAllowed,
            // repairAllowed: repairAllowed,
        };

        try {
            const response = await fetch('http://localhost:4001/minecraft/shopItems', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${currentUser.token}`
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            navigate('/shop');
        } catch (error) {
            setErrorMessage("An error occurred. Please try again.");
        }
    };

    return (
        <div className="form-container main-container">
            <h2>Create new Shop Item</h2>
            <br />
            <form className="form-field" method="POST" onSubmit={submitItem}>
                <p className="form-tooltip">Unique ID <span className="tooltiptext">Used for images and plugin identification</span></p>
                <input type="text" placeholder="Unique_Item_ID" value={uniqueId} onChange={e => setUniqueId(e.target.value)} />

                <p className="form-tooltip">Item Title<span className="tooltiptext">In game and shop title</span></p>
                <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />

                <p className="form-tooltip">Description<span className="tooltiptext">Displayed on website</span></p>
                <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />

                {/*<p className="form-tooltip">Material<span className="tooltiptext">List found <a href="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html" target="_blank" rel="noreferrer">Here</a></span></p>*/}
                {/*<input type="text" placeholder="Material (e.g. ELYTRA)" value={material} onChange={e => setMaterial(e.target.value)} />*/}

                {/*<p className="form-tooltip">Item Lore<span className="tooltiptext">The purple text seen in-game</span></p>*/}
                {/*<input type="text" placeholder="Lore" value={lore} onChange={e => setLore(e.target.value)} />*/}

                <p className="form-tooltip">Cost<span className="tooltiptext">The number of points spent to acquire</span></p>
                <input type="number" placeholder="Cost" value={cost} onChange={e => setCost(e.target.value)} />

                <p className="form-tooltip">Rarity<span className="tooltiptext">Affects the border color in the shop</span></p>
                <select value={rarity} onChange={e => setRarity(e.target.value)}>
                    {possibleRarities.map(rarityOption => <option key={rarityOption}>{rarityOption}</option>)}
                </select>

                {/*<p className="form-tooltip">Addition Fields<span className="tooltiptext">Info about <a href="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/inventory/ItemFlag.html" target="_blank" rel="noreferrer">Item Flags</a> and <a href="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/enchantments/Enchantment.html" target="_blank" rel="noreferrer">Enchantments</a></span></p>*/}

                {/*<div className="form-field-group">*/}
                {/*    /!* Flags *!/*/}
                {/*    <div className="form-field">*/}
                {/*        {possibleFlags.map(flag => (*/}
                {/*            <div key={flag} className="form-field-inline">*/}
                {/*                <input type="checkbox" id={flag} name={flag} value={flag} onChange={e => setFlags(prev => e.target.checked ? [...prev, flag] : prev.filter(f => f !== flag))} />*/}
                {/*                <label htmlFor={flag}>{flag}</label>*/}
                {/*            </div>*/}
                {/*        ))}*/}
                {/*        <div key={"mendingAllowed"} className="form-field-inline">*/}
                {/*            <input type="checkbox" id={"mendingAllowed"} name={"mendingAllowed"} value={mendingAllowed} onChange={e => setMendingAllowed(true)} />*/}
                {/*            <label htmlFor={"mendingAllowed"} className="form-tooltip">Mending Allowed<span className="tooltiptext">Can it have the mending enchantment</span></label>*/}
                {/*        </div>*/}
                {/*        <div key={"repairAllowed"} className="form-field-inline">*/}
                {/*            <input type="checkbox" id={"repairAllowed"} name={"repairAllowed"} value={repairAllowed} onChange={e => setRepairAllowed(true)} />*/}
                {/*            <label htmlFor={"repairAllowed"} className="form-tooltip">Repair Allowed<span className="tooltiptext">Can it be repaired in an anvil</span></label>*/}
                {/*        </div>*/}
                {/*        <div key={"unbreakable"} className="form-field-inline">*/}
                {/*            <input type="checkbox" id={"unbreakable"} name={"unbreakable"} value={unbreakable} onChange={e => setUnbreakable(true)} />*/}
                {/*            <label htmlFor={"unbreakable"} className="form-tooltip">Unbreakable<span className="tooltiptext">Should this object take durability damage</span></label>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    /!* Enchantments *!/*/}
                {/*    <div className="form-field long">*/}
                {/*        {possibleEnchantments.map(enchant => (*/}
                {/*            <div key={enchant} className="form-field-inline">*/}
                {/*                <label htmlFor={enchant}>{enchant}</label>*/}
                {/*                <input type="number" id={enchant} name={enchant} min="0" onChange={e => setEnchantments(prev => ({ ...prev, [enchant]: Number(e.target.value) }))} />*/}

                {/*            </div>*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*</div>*/}
                <p>{errorMessage}</p>
                <button type="submit">Create Item</button>
            </form>
        </div>
    );
}
export default CreateShopItemPage;
