/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Paper, Typography } from '@mui/material';

const img500 = 'https://image.tmdb.org/t/p/w500';

export default function Details () {
  const [movieDetail, setMovieDetail] = useState({});
  const [streamingPlatforms, setStreamingPlatforms] = useState([]);
  const movieId = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId.id}?api_key=${process.env.REACT_APP_API_KEY}`);
        const data = await response.json();
        console.log(data);
        setMovieDetail(data);

        const utellyUrl = `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup?country=us&source_id=${movieId.id}&source=tmdb`;
        const utellyHeaders = {
          'x-rapidapi-key': process.env.REACT_APP_UTELLY_API_KEY,
          'x-rapidapi-host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
        };
        const utellyResponse = await axios.get(utellyUrl, { headers: utellyHeaders });
        if (utellyResponse.data.collection.locations.length > 0) {
          const platformData = utellyResponse.data.collection.locations;
          setStreamingPlatforms(platformData);
        } else {
          setStreamingPlatforms([]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
  }, [movieId]);

  const { title, poster_path, overview } = movieDetail;

  return (
    <Container>
      <Card sx={{ display: 'flex', padding: '20px' }}>
        <CardActionArea>
          <Box sx={{ display: 'flex' }}>
            <Paper sx={{ display: 'flex-start' }}>
              <CardMedia component="img" image={`${img500}/${poster_path}`} alt="poster" sx={{ width: '20vw' }} />
            </Paper>
            <Box>
              <Typography>{title}</Typography>
              <CardContent>{overview}</CardContent>
              <Typography variant="h6">Streaming Platforms:</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {streamingPlatforms.map((platform) => (
                  <Box key={platform.id}>
                    <Typography>{`${platform.display_name}`}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </CardActionArea>
      </Card>
    </Container>
  );
}
