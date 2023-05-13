/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardActionArea, CardMedia, CardContent, Box, Typography, Paper, Container } from '@mui/material';

// eslint-disable-next-line no-unused-vars
const img500 = 'https://image.tmdb.org/t/p/w500';

export default function Details () {
  // eslint-disable-next-line no-unused-vars
  const [movieDetail, setMovieDetail] = useState({});
  const movieId = useParams();
  useEffect(() => {
    const getMovie = async () => {
      const result = await fetch(`https://api.themoviedb.org/3/movie/${movieId.id}?api_key=${process.env.REACT_APP_API_KEY}`);
      const data = await result.json();
      console.log(data);
      setMovieDetail(data);
    };
    getMovie();
  }, []);
  // eslint-disable-next-line no-unused-vars
  const { title, id, poster_path, overview, vote_average, date, mediaType, video } = movieDetail;

  const [movieCast, setMovieCast] = useState({});
  useEffect(() => {
    const getCast = async () => {
      const cast = await fetch(`https://api.themoviedb.org/3/movie/${movieId.id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=credits`);
      const cast_data = await cast.json();
      setMovieCast(cast_data);
      console.log(cast_data);
    };
    getCast();
  }, []);
  const { adult, cast } = movieCast;
  return (
    <Container>
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
              <Typography variant='h6'>
                {Number(vote_average).toFixed(1)}
              </Typography>
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
            </Box>
            <Box>
              {adult} {cast}
            </Box>
            {/* <Box>
              <Grid>
                <Typography variant='h6'>{title} </Typography>
              </Grid>
            </Box> */}
          </Box>
        </CardActionArea>
      </Card>
    </Container>
  );
}
