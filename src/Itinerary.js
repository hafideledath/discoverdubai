import React from 'react';
import './Itinerary.css';

const date = new Date();
const dayStr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][date.getDay()];
const dayNum = date.getUTCDate();

function Itinerary() {
    return (
        <div className="Itinerary">
            <a href="/" className="return">Return to Dashboard</a>
            <h2 className='events-header'>Events on { dayStr }, { dayNum }th June:</h2>
            <div className="events">
                <div className="event">
                    <p className="event-time">7:00AM</p>
                    <div className="info">
                        <h2 className="name">Seascape Soirée</h2>
                        <p className="description">A glamorous boat party featuring stunning views, lively music, and dancing.</p>
                    </div>
                    <a href="#" className="add">+ Add to calendar</a>
                </div>
                <div className="event">
                    <p className="event-time">9:00AM</p>
                    <div className="info">
                        <h2 className="name">Zen Morning Meditation</h2>
                        <p className="description">Start your day with a calming meditation session in a serene garden setting.</p>
                    </div>
                    <a href="#" className="add">+ Add to calendar</a>
                </div>
                <div className="event">
                    <p className="event-time">2:00PM</p>
                    <div className="info">
                        <h2 className="name">Chocolate Tasting</h2>
                        <p className="description">Indulge in a heavenly experience of rich chocolates from around the world.</p>
                    </div>
                    <a href="#" className="add">+ Add to calendar</a>
                </div>
            </div>
        </div>
    );
};

export default Itinerary;