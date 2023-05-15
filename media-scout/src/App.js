import { Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import HomePageMovies from './HomePageMovies';
import Details from './Components/Details/Details';
import Movie from './Components/Movie';
import Login from './Login';
import Discussion from './Components/Discussion';
import MovieByGenre from './Components/MovieByGenre';
import axios from 'axios';
import Register from './Register';
import MyAccount from './Myaccount';
import Favorites from './Components/Favorites';
// import PublicRoute from './routes/PublicRoute';
// import PrivateRoute from './routes/PrivateRoute';

export default function App () {
  const [content, setContent] = useState([]);
  const [genres, setGenres] = useState(null);

  const fetchHomePageMovies = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`);
    setContent(data.results);
  };
  const fetchGenre = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`);
    const formatedGenres = {};
    data.genres.forEach(element => {
      formatedGenres[element.name] = element.id;
    });
    setGenres(formatedGenres);
  };
  useEffect(() => {
    fetchHomePageMovies();
    fetchGenre();
  }, []);
  const filtermovies = (genre, allmovies) => {
    return allmovies.filter((movie) => {
      return movie.genre_ids.includes(genres[genre]);
    });
  };
  // console.log(genres);
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePageMovies content = {content} />}/>
        <Route path='/login' element={ <Login />} />
        <Route path='/register' element={ <Register/>} />
        {/* <Route path="/profile" element={<Profile/>}/> */}
        <Route path='/movies/:id' element={ <Details />}/>
        <Route path='/moviesGenre/:genre' element={ <MovieByGenre content = {content} filtermovies = {filtermovies} />} />
        <Route path='/movie' element={ <Movie />} />
        <Route path='/discussion' element={ <Discussion />} />
        <Route path="/profile" element={<MyAccount/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </div>
  );
}
