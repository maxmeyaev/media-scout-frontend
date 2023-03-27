import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';


export default function App () {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/"  element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </Router>
  );
}
