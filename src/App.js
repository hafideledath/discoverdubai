import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import Map from './Map';
import Itinerary from './Itinerary';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import './App.css'

import { useAuthState } from 'react-firebase-hooks/auth';

firebase.initializeApp({
  apiKey: "AIzaSyDJ3M1axgd31Fd5Hz4rlqvzC2lWEtq7rEA",
  authDomain: "discoverdubai-1de93.firebaseapp.com",
  projectId: "discoverdubai-1de93",
  storageBucket: "discoverdubai-1de93.appspot.com",
  messagingSenderId: "59761132",
  appId: "1:59761132:web:4b2f5081964b9c418120c9",
  measurementId: "G-HL3K1T4G3F"
})

const auth = firebase.auth();

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div className='loading'>Loading...</div>; // Display a loading state
  }

  return (
    user ? ServeApp() : <SignIn />
  );
}

function ServeApp() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Routes>
          <Route path="/" Component={Landing} />
          <Route path="/map" Component={Map} />
          <Route path="/itinerary" Component={Itinerary} />
        </Routes>
        <a className="sign-out" onClick={() => auth.signOut()}>Sign out</a>
      </div>
    </BrowserRouter>
  );
};

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

    return <button onClick={signInWithGoogle} className='sign-in'>Sign in with Google</button>
}

export default App;