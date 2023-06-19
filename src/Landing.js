import React, { useRef, useEffect, useState } from 'react';

import Parallax from 'parallax-js';
import './Landing.css';

import cloud from './cloud.svg';
import sun from './sun.svg';
import cityline from './cityline.svg';
import dubailine from './dubailine.svg';

import map from './map.svg';
import calendar from './calendar.svg';

const name = "Peter Zhou"

let date = new Date();

const day = date.getUTCDate();

const daystate = date.getHours() < 12 ? 'morning' : 'afternoon';

function Landing() {
    const sceneRef = useRef(null);

    const [currentTime, setTime] = useState(date.toLocaleTimeString());

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setTime(time);
    }

    setInterval(updateTime, 1000);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneRef.current);

        return () => {
            parallaxInstance.destroy();
        };
    }, []);

    return (
        <div className={"Landing " + daystate}>
            <div ref={sceneRef} className="container">
                <div className="layer" data-depth="-0.05">
                    <img src={sun} className="sun" alt="Sun" />
                </div>
                <div className="layer" data-depth="-0.1">
                    <img src={cloud} className="cloud" style={{ marginTop: 'bottom', display: 'block' }} alt="Cloud" />
                </div>
                <div className="layer" data-depth="-0.1">
                    <img src={cityline} className="cityline" alt="Cityline" />
                </div>
                <div className="layer" data-depth="-0.15">
                    <img src={dubailine} className="dubailine" alt="Dubailine" />
                </div>
            </div>
            <div className="left-module">
                <h1 className='greeting'>Good {daystate}, {name}</h1>
            </div>
            <div className="right-module">
                <h1 className='logo'>discoverDubai</h1>
                <h2 className='time'>{currentTime}</h2>
            </div>
            <div className="card-container">
                <a className="card-link" href="/map">
                    <div className="card close-places">
                        <img src={map} alt="map" />
                        <div className="card-header">
                            <h3>Places near you</h3>
                            <h4>Emirates Hills</h4>
                        </div>
                        <p>Explore places of interest near <b>Emirates Hills</b>. You may enjoy the <b>Roseleaf Cafe</b> and <b>Faisal Ali Qane Art Gallery</b>.<br />
                            <span className="more">See more...</span></p>
                    </div>
                </a>
                <a className="card-link" href="/itinerary">
                    <div className="card current-events">
                        <img src={calendar} alt="calendar" />
                        <div className="card-header">
                            <h3>Today's itinerary</h3>
                            <h4>June {day}th</h4>
                        </div>
                        <p><b>The Coffee Club</b> has a new 35AED breakfast deal. <b>RAW Coffee</b> has a new menu item.<br />
                            <span className="more">See more...</span></p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Landing;