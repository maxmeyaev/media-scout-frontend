/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, CardActionArea, CardMedia, CardContent, Box, Typography, Paper, Container, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';

const img500 = 'https://image.tmdb.org/t/p/w500';

export default function Details () {
  // Movie details fetch
  // eslint-disable-next-line no-unused-vars
  const [movieDetail, setMovieDetail] = useState({});
  const [streamingPlatforms, setStreamingPlatforms] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const movieId = useParams();
  // Gets the id of the movie
  const getMovie = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId.id}?api_key=${process.env.REACT_APP_API_KEY}`);
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
  };
  const fetchRecommendations = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId.id}/similar?api_key=${process.env.REACT_APP_API_KEY}`);
    setRecommendations(data.results.slice(0, 4));
  };
  const { title, poster_path, overview, vote_average, release_date } = movieDetail;
  // Movie cast fetch
  const [movieCast, setMovieCast] = useState([]);
  const fetchCast = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId.id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=credits`);
    setMovieCast(data.credits.cast.slice(0, 5));
  };
  useEffect(() => {
    fetchCast();
    getMovie();
    fetchRecommendations();
  }, [movieId]);

  const platformImg = (platform_name) => {
    if (platform_name === 'Amazon Instant Video') {
      return <img src='https://m.media-amazon.com/images/I/413+SVFO39L.png' width="20" height="60" />;
    } else if (platform_name === 'iTunes') {
      return <img src='https://cdn-icons-png.flaticon.com/512/1384/1384061.png' width="20" height="60" />;
    } else if (platform_name === 'Google Play') {
      return <img src='https://image.similarpng.com/very-thumbnail/2021/09/Google-play-icon-design-on-transparent-background-PNG.png' width="20" height="60" />;
    } else if (platform_name === 'Disney+') {
      return <img src='https://play-lh.googleusercontent.com/xoGGYH2LgLibLDBoxMg-ZE16b-RNfITw_OgXBWRAPin2FZY4FGB9QKBYApR-0rSCkQ' width="20" height="60" />;
    } else if (platform_name === '') {
      return <h5>This movie is not available on streaming services</h5>;
    }
  };
  return (
    <Container maxWidth={1200}>
      <Card sx={{
        display: 'flex',
        padding: '20px'
      }}>
        <CardActionArea>
          <Box sx={{ display: 'flex' }}>
            <Paper sx={{ display: 'flex-start', height: '620px', borderRadius: '10px' }}>
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
              <Box sx={{ paddingLeft: '1em', display: 'flex', justifyContent: 'center' }}>
                {movieCast && movieCast.map((actor) =>
                  (<Card key={actor.id} sx={{ padding: '0.5em', borderRadius: '10px', margin: '0.5em' }}>
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
              <Box sx={{ paddingX: '1em', paddingY: '0.5em', display: 'flex' }}>
                <Card sx={{ padding: '0.5em', width: '100%', borderRadius: '10px' }}>
                  <Typography variant="h5">Streaming Platforms:</Typography>
                  <CardContent sx={{ display: 'flex', flexDirection: 'row' }}>
                    {streamingPlatforms.map((platform) => (
                      <Box key={platform.id}>
                        <Typography sx={{ display: 'flex', padding: '1em', justifyContent: 'space-between' }}>{`${platform.display_name}`}</Typography>
                        <Box sx={{ padding: '1em' }}>
                          {platformImg(platform.display_name)}
                        </Box>
                      </Box>
                    ))}
                  </CardContent>
                </Card>
              </Box>
              <Box sx={{ paddingX: '1em', paddingY: '0.5em', display: 'flex' }}>
                <Card sx={{ padding: '0.5em', width: '100%', borderRadius: '10px' }}>
                  <Typography variant="h5">Recommendations:</Typography>
                  <CardContent sx={{ display: 'flex', flexDirection: 'row' }}>
                    {recommendations.map((recommendation) => (
                      <Card key={recommendation.id} sx={{ padding: '0.5em', borderRadius: '10px', margin: '0.5em' }}>
                        <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/details/${recommendation.id}`}>
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <CardMedia
                              component="img"
                              image={`${img500}/${recommendation.poster_path}`}
                              alt='poster'
                            />
                          </Box>
                          <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                              {recommendation.title}
                            </Typography>
                          </CardContent>
                          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography variant='h5' sx={{ color: '#4caf50' }}>
                              {Number(recommendation.vote_average).toFixed(1)}
                            </Typography>
                          </Box>
                        </Link>
                      </Card>
                    ))}
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </Box>
        </CardActionArea>
      </Card>
    </Container>
  );
}
