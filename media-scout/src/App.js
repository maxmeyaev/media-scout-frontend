import { Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
// import Kids from './Components/Kids';
import HomePageMovies from './HomePageMovies';
import Movie from './Components/Movie';
import TVshows from './Components/TVshows';
import RecentlyAdd from './Components/RecentlyAdd';
import Profile from './Components/Profile';
import Login from './Login';
import Discussion from './Components/Discussion';
import Drama from './Components/Drama';
import axios from 'axios';
import Register from './Register';
import MyAccount from './Myaccount';
// import PublicRoute from './routes/PublicRoute';
// import PrivateRoute from './routes/PrivateRoute';

export default function App () {
  const [content, setContent] = useState([]);
  const [genres, setGenres] = useState(null);

  const fetchHomePageMovies = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`);
    setContent(data.results);
    console.log(data);
  };
  const fetchGenre = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`);
    console.log(data);
    const formatedGenres = {};
    data.genres.forEach(element => {
      formatedGenres[element.name] = element.id;
    });
    console.log(formatedGenres);
    setGenres(formatedGenres);
  };
  useEffect(() => {
    fetchHomePageMovies();
    fetchGenre();
  }, []);
  if (genres) {
    const drama = content.filter((movie) => {
      return movie.genre_ids.includes(genres.horror);
    });
    console.log('drama', drama);
  }
  // console.log(genres);
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePageMovies content = {content} />}/>
        <Route path='/login' element={ <Login />} />
        <Route path='/register' element={ <Register/>} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path='/drama' element={ <Drama />} />
        <Route path='/movie' element={ <Movie />} />
        <Route path='/tvshows' element={ <TVshows />} />
        <Route path='/recentlyAdd' element={ <RecentlyAdd />} />
        <Route path='/discussion' element={ <Discussion />} />
        <Route path="/myaccount" element={<MyAccount/>}/>
      </Routes>
    </div>
  );
}
