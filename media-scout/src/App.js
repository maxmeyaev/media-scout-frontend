import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './Components/Navbar';
import Kids from './Components/Kids';
import HomePageMovies from './HomePageMovies';
import Movie from './Components/Movie';
import TVshows from './Components/TVshows';
import RecentlyAdd from './Components/RecentlyAdd';
import Profile from './Components/Profile';
import Login from './Components/Login';

export default function App () {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePageMovies />}/>
        <Route path='/login' element={ <Login />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path='/kids' element={ <Kids />} />
        <Route path='/movie' element={ <Movie />} />
        <Route path='/tvshows' element={ <TVshows />} />
        <Route path='/recentlyAdd' element={ <RecentlyAdd />} />
      </Routes>
    </div>
  );
}
