import React from 'react';
import MovieCard from './Components/MovieCard';
import Box from '@mui/material/Box';

const HomePageMovies = ({ content }) => {
  // eslint-disable-next-line no-unused-vars
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {content && content.map((c) =>
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
        />))
      }
    </Box>
  );
};

export default HomePageMovies;
