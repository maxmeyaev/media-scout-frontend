import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Kids from './Components/Kids';
import Movie from './Components/Movie';
import TVshows from './Components/TVshows';
import RecentlyAdd from './Components/RecentlyAdd';
import Profile from './Components/Profile';
import Login from './Components/Login';

export default function App () {
  return (
    <Routes>
      <Route path='/' element={ <Navbar />} />
      <Route exact path="/" element={<Home/>}/>
      <Route path='/login' element={ <Login />} />
      <Route path="/profile" element={<Profile/>}/>
      <Route path='/kids' element={ <Kids />} />
      <Route path='/movie' element={ <Movie />} />
      <Route path='/tvshows' element={ <TVshows />} />
      <Route path='/recentlyAdd' element={ <RecentlyAdd />} />
    </Routes>
  );
}
