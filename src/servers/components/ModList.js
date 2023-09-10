import React, { useState, useEffect } from 'react';
import '../Servers.css';


const ModList = (props) => {
    const [sortAZ, setSortAZ] = useState(true);
    const [search, setSearch] = useState('');
    const [links, setLinks] = useState([]);

    useEffect(() => {
        fetch(props.modListFile)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');
                const listItems = doc.querySelectorAll('li');

                const linkObjects = Array.from(listItems).map(li => {
                    const aElement = li.querySelector('a');
                    return {
                        url: aElement.getAttribute('href'),
                        name: aElement.textContent
                    };
                });

                setLinks(linkObjects);
            })
            .catch(err => {
                console.error('Error: ', err);
            });
    }, []);

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    }

    const handleSortChange = () => {
        setSortAZ(!sortAZ);
    }

    const getFilteredMods = () => {
        return links.filter((mod) => mod.name.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) => sortAZ ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
    }



    return (
        <div className={"details-container"}>
            <h3>Mods List</h3>
            <p>This is subject to change anytime</p>
        <div>
            <a href={props.downloadLink} className="download">Download Mod Pack v2</a>
            <br/>
            <input type="text" value={search} onChange={handleSearchChange} placeholder="Search Mods..." />
            <button onClick={handleSortChange}>{sortAZ ? "Sort A-Z" : "Sort Z-A"}</button>
            <ul>
                {getFilteredMods().map((mod, index) => (
                    <li key={index}><a href={mod.url}>{mod.name}</a></li>
                ))}
            </ul>
            <h4>{links.length} Mods Total</h4>
        </div>
        </div>
    );
};

export default ModList;