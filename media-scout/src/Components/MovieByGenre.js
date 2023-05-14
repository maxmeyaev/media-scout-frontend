import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';

const MovieByGenre = ({ content, filtermovies }) => {
  const { genre } = useParams();
  const [movieGenre, setMovieGenre] = useState([]);
  useEffect(() => {
    setMovieGenre(filtermovies(genre, content));
  }, [genre]);

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '20px' }}>
      {movieGenre.map((c) =>
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
