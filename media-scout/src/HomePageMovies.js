import React, { useState, useEffect } from 'react';
import MovieCard from './Components/MovieCard';
import Box from '@mui/material/Box';
import axios from 'axios';
import PaginationNum from './Components/Pagination';

const HomePageMovies = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});

  const fetchHomePageMovies = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`);
    setContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    setToken(sessionStorage.getItem('token'));
    setUser(JSON.parse(sessionStorage.getItem('user')));
    fetchHomePageMovies();
  }, [page]);

  const handleFavoriteClick = async (id) => {
    console.log(token);

    const options = {
      method: 'POST',
      url: 'https://uqpgy0s4x5.execute-api.us-east-2.amazonaws.com/prod/useraddmovie',
      headers: { 'x-api-key': '8F6Dw9NrNn8XhHUtHErDk8xmXxBi2Bt691q0SSbw' },
      data: {
        username: user.username,
        movieID: id,
        token: token
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: '80%', margin: '0 auto', justifyContent: 'space-between' }}>
      {content && content.map((c) =>
        (
          <MovieCard
            id={c.id}
            key={c.id}
            poster={c.poster_path}
            title={c.title || c.name}
            overview={c.overview}
            voteAvg={c.vote_average}
            date={c.first_air_date || c.release_date}
            mediaType={c.media_type}
            video={c.video}
            handleFavoriteClick={handleFavoriteClick}
          />)
      )}
      <Box>
        <PaginationNum setPage={setPage}/>
      </Box>
    </Box>
  );
};

export default HomePageMovies;
