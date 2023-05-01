import React from 'react';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import HomePageMovies from './HomePageMovies';
// import { Container } from '@mui/material';

export default function App () {
  return (
    <div className='app'>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={ <HomePageMovies />} />
          <Route path='/login' element={ <Login />} />
        </Routes>
      </div>
    </div>
  );
}
