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

  useEffect(() => {
    const fetchFavorites = async () => {
      // const token = localStorage.getItem('token');
      // const { data } = await axios.get('https://uqpgy0s4x5.execute-api.us-east-2.amazonaws.com/prod/getmovies', {
      //   headers: {
      //     Authorization: `Bearer ${token}`
      //   }
      // });
      // const options = {
      //   method: 'GET',
      //   url: 'https://uqpgy0s4x5.execute-api.us-east-2.amazonaws.com/prod/getmovies',
      //   headers: { 'x-api-key': '8F6Dw9NrNn8XhHUtHErDk8xmXxBi2Bt691q0SSbw' },
      //   data: {
      //     username: 'testans',
      //     token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RhbnMiLCJuYW1lIjoiYW5zIiwiZW1haWwiOiJ0ZXN0MTIzQGdtYWlsLmNvbSIsImlhdCI6MTY4NDAxMzI2MCwiZXhwIjoxNjg0MDE2ODYwfQ.oJn74vqmgn9Yczo-CnssvrUiGEBdvjctT9SPs_x_BL0'
      //   }
      // };

      // axios.request(options).then(function (response) {
      //   console.log(response.data);
      //   setFavorites(response.data);
      // }).catch(function (error) {
      //   console.error(error);
      // });
      axios.get('https://uqpgy0s4x5.execute-api.us-east-2.amazonaws.com/prod/getmovies', {
        params: {
          username: 'testans',
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RhbnMiLCJuYW1lIjoiYW5zIiwiZW1haWwiOiJ0ZXN0MTIzQGdtYWlsLmNvbSIsImlhdCI6MTY4NDAxMzI2MCwiZXhwIjoxNjg0MDE2ODYwfQ.oJn74vqmgn9Yczo-CnssvrUiGEBdvjctT9SPs_x_BL0'
        },
        headers: {
          'x-api-key': '8F6Dw9NrNn8XhHUtHErDk8xmXxBi2Bt691q0SSbw'
        }
      })
        .then(response => {
          setFavorites(response.data);
        });
      console.log(setFavorites);
    };
    fetchFavorites();
  }, []);

  return (
    <Box sx={{ padding: '16px' }}>
      <Typography variant="h4" sx={{ marginBottom: '16px' }}>My Favorites</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: '800px', margin: '0 auto', justifyContent: 'space-between' }}>
        {favorites.map((favorite) => (
          <div key={favorite.id} style={{ position: 'relative', margin: '1px', width: '200px' }}>
            <MovieCard
              id={favorite.movieId}
              poster={favorite.poster}
              title={favorite.title}
              overview={favorite.overview}
              voteAvg={favorite.voteAverage}
              date={favorite.date}
              mediaType={favorite.mediaType}
              video={favorite.video}
            />
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default Favorites;
