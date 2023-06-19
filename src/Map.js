import React, { useRef, useEffect, useState } from 'react';
import Parallax from 'parallax-js';
import './Map.css'

import map from './emirates_hills.svg';
import roseleaf from './roseleaf.jpeg';
import gallery from './gallery.jpeg';
import shakespeare from './shakespeare.jpeg';

const locations = [
    {
        name: "Roseleaf Cafe", 
        distance: 8.1, 
        image: roseleaf,
        description: "The Roseleaf Cafe, is a cafe in the Emirates Golf Club. It's Dubai's best-loved indie cafe & bakery."
    }, {
        name: "Faisal Ali Qane",
        distance: 7.6,
        image: gallery,
        description: "Faisal Ali Qane is an art gallery in Emirates Hills. View a vast collection of historical paintings."
    }, {
        name: "Shakespeare & Co.",
        distance: 3.9,
        image: shakespeare,
        description: "Shakespeare & Co. is a cafe restaurant in Meadows Souk. Experience Shakespearean ambience."
    }
]

function Map() {
    const sceneRef = useRef(null);

    const [locationID, setLocationID] = useState(0)
    const location = locations[locationID]

    function increment_location() {
        if (locationID + 1 < locations.length) {
            setLocationID(locationID + 1);
        }
    }

    function decrement_location() {
        if (locationID - 1 >= 0) {
            setLocationID(locationID - 1);
        }
    }


    useEffect(() => {
        const parallaxInstance = new Parallax(sceneRef.current);

        return () => {
            parallaxInstance.destroy();
        };
    }, []);

    return (
        <div className="Map">
            <div ref={sceneRef}>
                <div data-depth="-0.1" className='layer'>
                    <img src={map} alt="Map" className='map' />
                </div>
            </div>
            <a href="/" className="return">Return to Dashboard</a>
            <div className="location">
                <header>
                    <a className='caret' href="#" onClick={ decrement_location }>&lt;</a>
                    <div className="location-name">
                        <h2>{ location["name"] }</h2>
                        <h3>{ location["distance"] }km away</h3>
                    </div>
                    <a className='caret' href="#" onClick={ increment_location }>&gt;</a>
                </header>
                <img src={ location["image"] } alt="" />
                <p className='description'>{ location["description"] }</p>
                <a href="#" className="reserve">Reserve a spot</a>
            </div>
        </div>
    );
};

export default Map;