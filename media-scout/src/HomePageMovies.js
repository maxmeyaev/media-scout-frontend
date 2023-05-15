// import React, { useState, useEffect } from 'react';
// import MovieCard from './Components/MovieCard';
// import Box from '@mui/material/Box';
// import axios from 'axios';

// const HomePageMovies = () => {
//   // eslint-disable-next-line no-unused-vars
//   const [content, setContent] = useState([]);

//   const fetchHomePageMovies = async () => {
//     const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`);
//     setContent(data.results);
//     console.log(data);
//   };
//   useEffect(() => {
//     fetchHomePageMovies();
//   }, []);

//   return (
//     <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
//       {content && content.map((c) =>
//         (<MovieCard
//           key={c.id}
//           id={c.id}
//           poster={c.poster_path}
//           title={c.title || c.name}
//           overview={c.overview}
//           voteAvg={c.vote_average}
//           date={c.first_air_date || c.release_date}
//           mediaType={c.media_type}
//           video={c.video}
//         />))
//       }
//     </Box>
//   );
// };

// export default HomePageMovies;

// import React, { useState, useEffect } from 'react';
// import MovieCard from './Components/MovieCard';
// import Box from '@mui/material/Box';
// import axios from 'axios';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import { Button } from '@mui/material';

// const HomePageMovies = () => {
//   const [content, setContent] = useState([]);

//   const fetchHomePageMovies = async () => {
//     const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`);
//     setContent(data.results);
//     console.log(data);
//   };

//   useEffect(() => {
//     fetchHomePageMovies();
//   }, []);

//   const handleFavoriteClick = (id) => {
//     // Do something to add the movie to the user's favorites
//     console.log(`Movie ${id} favorited!`);
//   };

//   return (
//     <Box sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: '800px', margin: '0 auto', justifyContent: 'space-between' }}>
//       {content && content.map((c) =>
//         (<div key={c.id} style={{ position: 'relative', margin: '1px', width: '200px' }}>
//           <MovieCard
//             id={c.id}
//             poster={c.poster_path}
//             title={c.title || c.name}
//             overview={c.overview}
//             voteAvg={c.vote_average}
//             date={c.first_air_date || c.release_date}
//             mediaType={c.media_type}
//             video={c.video}
//           />
//           <div style={{ position: 'absolute', bottom: '0px', right: '0px', cursor: 'pointer', top: '10px', left: '10px' }}>
//             <Button onClick={() => handleFavoriteClick(c.id)} style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
//               <FavoriteIcon color="secondary"/>
//             </Button>
//           </div>
//         </div>)
//       )}
//     </Box>
//   );
// };

// export default HomePageMovies;
import React, { useState, useEffect } from 'react';
import MovieCard from './Components/MovieCard';
import Box from '@mui/material/Box';
import axios from 'axios';

const HomePageMovies = () => {
  const [content, setContent] = useState([]);
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});

  const fetchHomePageMovies = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`);
    setContent(data.results);
  };

  useEffect(() => {
    setToken(sessionStorage.getItem('token'));
    setUser(JSON.parse(sessionStorage.getItem('user')));
    fetchHomePageMovies();
  }, []);

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
    </Box>
  );
};

export default HomePageMovies;
// import React, { useState, useEffect } from 'react';
// import MovieCard from './Components/MovieCard';
// import Box from '@mui/material/Box';
// import axios from 'axios';

// const HomePageMovies = () => {
//   const [content, setContent] = useState([]);
//   const [token, setToken] = useState('');
//   const [user, setUser] = useState({});

//   const fetchHomePageMovies = async () => {
//     const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`);
//     setContent(data.results);
//   };

//   useEffect(() => {
//     setToken(sessionStorage.getItem('token'));
//     setUser(JSON.parse(sessionStorage.getItem('user')));
//     fetchHomePageMovies();
//   }, []);

//   const handleFavoriteClick = async (id) => {
//     console.log(token);
//     const isFavorited = user.favorites.includes(id);
//     console.log(isFavorited);

//     const options = {
//       method: isFavorited ? 'DELETE' : 'POST',
//       url: isFavorited
//         ? 'https://uqpgy0s4x5.execute-api.us-east-2.amazonaws.com/prod/userremovemovie'
//         : 'https://uqpgy0s4x5.execute-api.us-east-2.amazonaws.com/prod/useraddmovie',
//       headers: { 'x-api-key': '8F6Dw9NrNn8XhHUtHErDk8xmXxBi2Bt691q0SSbw' },
//       data: {
//         username: user.username,
//         movieID: id,
//         token: token
//       }
//     };
//     axios.request(options).then(function (response) {
//       console.log(response.data);
//       // Update the user state based on whether the movie is being favorited or unfavorited
//       setUser(prevState => {
//         if (isFavorited) {
//           return {
//             ...prevState,
//             favorites: prevState.favorites.filter(favoriteId => favoriteId !== id)
//           };
//         } else {
//           return {
//             ...prevState,
//             favorites: [...prevState.favorites, id]
//           };
//         }
//       });
//     }).catch(function (error) {
//       console.error(error);
//     });
//   };

//   return (
//     <Box sx={{ display: 'flex', flexWrap: 'wrap', maxWidth: '80%', margin: '0 auto', justifyContent: 'space-between' }}>
//       {content && content.map((c) =>
//         (
//           <MovieCard
//             id={c.id}
//             key={c.id}
//             poster={c.poster_path}
//             title={c.title || c.name}
//             overview={c.overview}
//             voteAvg={c.vote_average}
//             date={c.first_air_date || c.release_date}
//             mediaType={c.media_type}
//             video={c.video}
//             handleFavoriteClick={handleFavoriteClick}
//           />)
//       )}
//     </Box>
//   );
// };

// export default HomePageMovies;
