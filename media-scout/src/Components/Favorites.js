// import React from 'react';
// import { Box, Typography } from '@mui/material';

// const favorites = () => {
//   return (
//     <Box sx={{ padding: '16px' }}>
//       <Typography variant="h4" sx={{ marginBottom: '16px' }}>My Favorites</Typography>
//       <h1>hello</h1>
//       {/* favorite content here */}
//     </Box>
//   );
// };
// export default favorites;
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import MovieCard from '../Components/MovieCard';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const token = sessionStorage.getItem('token');
  const user = JSON.parse(sessionStorage.getItem('user'));
  const handleFavoriteClick = async (id) => {
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
      fetchFavorites();
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  };
  const fetchMovieFromId = (movieIds) => {
    Promise.all(movieIds.map(movieId => {
      console.log(movieId);
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/' + parseInt(movieId),
        params: { api_key: '60f70e6b520adc59900dab661450321b' }
      };
      return axios.request(options).then(function (response) {
        console.log(response.data);
        return response.data;
      }).catch(function (error) {
        console.error(error);
      });
    })).then((movies) => {
      setFavorites(movies);
    });
  };
  const fetchFavorites = async () => {
    const options = {
      method: 'GET',
      url: 'https://uqpgy0s4x5.execute-api.us-east-2.amazonaws.com/prod/getmovies',
      headers: {
        'x-api-key': '8F6Dw9NrNn8XhHUtHErDk8xmXxBi2Bt691q0SSbw',
        token: token,
        username: user.username
      }
    };
    axios.request(options).then(function (response) {
      fetchMovieFromId(response.data.movies);
    }).catch(function (error) {
      console.error(error);
    });
  };
  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <Box sx={{ padding: '16px' }}>
      <Typography variant="h4" sx={{ marginBottom: '16px' }}>My Favorites</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: '80%', margin: '0 auto', justifyContent: 'space-between' }}>
        {favorites && favorites.map((c) => (
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
            />
          )
        ))}
      </Box>
    </Box>
  );
};

export default Favorites;
