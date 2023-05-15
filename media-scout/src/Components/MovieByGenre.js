import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
// import axios from 'axios';

const MovieByGenre = ({ content, filtermovies }) => {
  const { genre } = useParams();
  const [moviesGenre, setmovies] = useState([]);
  // eslint-disable-next-line no-unused-vars
  // const fetchHomePageMovies = async () => {
  //   const { data } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`);
  //   setContent(data.results);
  //   console.log(data);
  // };
  useEffect(() => {
    setmovies(filtermovies(genre, content));
  }, [genre]);

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {moviesGenre.map((c) =>
        (<MovieCard
          key={c.id}
          id={c.id}
          poster={c.poster_path}
          title={c.title || c.name}
          overview={c.overview}
          voteAvg={c.vote_average}
          date={c.first_air_date || c.release_date}
          mediaType={c.media_type}
          video={c.video}
          genres={c.genres ? c.genres.map((genre) => genre.name).join(',') : '' }
        />))
      }
    </Box>
  );
};

export default MovieByGenre;
