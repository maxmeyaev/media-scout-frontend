import React from 'react';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import HomePageMovies from './HomePageMovies';

export default function App () {
  return (
    <Routes>
      <Route path='/' element={ <Navbar />} />
      <Route path='/login' element={ <Login />} />
      <Route path='/home' element={ <HomePageMovies />} />
    </Routes>
  );
}
