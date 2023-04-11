import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Kids from './Components/Kids';
import Movie from './Components/Movie';
import TVshows from './Components/TVshows';
import RecentlyAdd from './Components/RecentlyAdd';

export default function App () {
  return (
    <Routes>
      <Route path='/' element={ <Navbar />} />
      <Route path='/Home' element={ <Home />} />
      <Route path='/Kids' element={ <Kids />} />
      <Route path='/Movie' element={ <Movie />} />
      <Route path='/TVshows' element={ <TVshows />} />
      <Route path='/RecentlyAdd' element={ <RecentlyAdd />} />
    </Routes>
  );
}
