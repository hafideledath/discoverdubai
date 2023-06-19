import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import Map from './Map';
import Itinerary from './Itinerary';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Routes>
          <Route path="/" Component={Landing} />
          <Route path="/map" Component={Map} />
          <Route path="/itinerary" Component={Itinerary} />
        </Routes>
        <a className="sign-out" href="#">Sign out</a>
      </div>
    </BrowserRouter>
  );
};

export default App;