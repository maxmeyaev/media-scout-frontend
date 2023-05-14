import React, { useState, useEffect } from 'react';
import MovieCard from './Components/MovieCard';
import axios from 'axios';
import PaginationNum from './Components/Pagination';
import Box from '@mui/material/Box';

const HomePageMovies = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const fetchHomePageMovies = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
    setContent(data.results);
    console.log(data);
  };
  useEffect(() => {
    window.scroll(0, 0);
    fetchHomePageMovies();
  }, [page]);
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '20px' }}>
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
      <Box>
        <PaginationNum setPage={setPage}/>
      </Box>
    </Box>
  );
};

export default HomePageMovies;
