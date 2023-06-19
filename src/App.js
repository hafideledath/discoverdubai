import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import Map from './Map';
import Itinerary from './Itinerary';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/map" element={<Map />} />
          <Route path="/itinerary" element={<Itinerary />} />
        </Routes>
        <a className="sign-out" href="#">Sign out</a>
      </div>
    </Router>
  );
};

export default App;