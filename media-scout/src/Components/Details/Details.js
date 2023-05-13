/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardActionArea, CardMedia, CardContent, Box, Typography, Paper, Container, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';

// eslint-disable-next-line no-unused-vars
const img500 = 'https://image.tmdb.org/t/p/w500';

export default function Details () {
  // Movie details fetch
  // eslint-disable-next-line no-unused-vars
  const [movieDetail, setMovieDetail] = useState({});
  const movieId = useParams();
  useEffect(() => {
    const getMovie = async () => {
      const result = await fetch(`https://api.themoviedb.org/3/movie/${movieId.id}?api_key=${process.env.REACT_APP_API_KEY}`);
      const data = await result.json();
      setMovieDetail(data);
    };
    getMovie();
  }, []);

  const { title, poster_path, overview, vote_average, release_date } = movieDetail;
  // Movie cast fetch
  const [movieCast, setMovieCast] = useState([]);
  const fetchCast = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId.id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=credits`);
    console.log(data.credits.cast);
    setMovieCast(data.credits.cast.slice(0, 5));
  };
  useEffect(() => {
    fetchCast();
  }, []);
  return (
    <Container maxWidth="xl">
      <Card sx={{
        display: 'flex',
        padding: '20px'
      }}>
        <CardActionArea>
          <Box sx={{ display: 'flex' }}>
            <Paper sx={{ display: 'flex-start' }}>
              <CardMedia
                component="img"
                image={`${img500}/${poster_path}`}
                alt='poster'
                sx={{ width: '20vw' }}
              />
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '40px' }}>
                  <Typography variant='h5' sx={{ width: '10px', paddingLeft: '3px', color: '#4caf50' }}>
                    {Number(vote_average).toFixed(1)}
                  </Typography>
                </Box>
                <Rating
                  value={4.5}
                  readOnly
                  precision={0.5}
                  size='small'
                  sx={{ paddingLeft: '1em' }}
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit"/>}
                />
                <Typography variant="subtitle1" sx={{ paddingLeft: '8.5em' }}>
                  {release_date}
                </Typography>
              </Box>
            </Paper>
            <Box>
              <Typography
                variant='h4'
                sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
                {title}
              </Typography>
              <CardContent>
                <Typography variant='h5' sx={{ paddingY: '1em' }}>
                  Overview
                </Typography>
                <Typography variant='h6'>
                  {overview}
                </Typography>
              </CardContent>
              <Box sx={{ paddingLeft: '1em', display: 'flex' }}>
                {movieCast && movieCast.map((actor) =>
                  (<Card key={actor.id} sx={{ padding: '0.5em' }}>
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`https://en.wikipedia.org/wiki/${actor.name}`}>
                      <CardMedia
                        component="img"
                        image={`${img500}/${actor.profile_path}`}
                        alt='picture'
                        sx={{ width: '10vw' }}
                      />
                      <CardContent>
                        <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'center' }}>
                          {actor.name}
                        </Typography>
                        <Typography variant='subtitle1' sx={{ display: 'flex', justifyContent: 'center' }}>
                          {actor.character}
                        </Typography>
                      </CardContent>
                    </Link>
                  </Card>
                  ))
                }
              </Box>
            </Box>
          </Box>
        </CardActionArea>
      </Card>
    </Container>
  );
}
