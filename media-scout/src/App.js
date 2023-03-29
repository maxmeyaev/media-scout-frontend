import React from 'react';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';

export default function App () {
  return (
    <Routes>
      <Route path='/' element={ <Navbar />} />
      <Route path='/login' element={ <Login />} />
    </Routes>
  );
}
