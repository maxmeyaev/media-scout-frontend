/* eslint-disable camelcase */
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
// eslint-disable-next-line no-unused-vars
import { Button, CardActionArea, CardActions, autocompleteClasses } from '@mui/material';

// eslint-disable-next-line no-unused-vars
const img_size_500 = 'https://image.tmdb.org/t/p/w500';
// eslint-disable-next-line no-unused-vars
const img_size_300 = 'https://image.tmdb.org/t/p/w300';

const MovieCard = ({ title, id, poster, overview, voteAvg, date, mediaType, video, genres, handleFavoriteClick }) => {
  return (
    <Card sx={{
      padding: '10px',
      position: 'relative',
      margin: '10px',
      maxWidth: '400px'
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={`${img_size_500}/${poster}`}
          alt='poster'
          sx={{
            width: '400px',
            height: '400px',
            objectFit: 'fill',
            objectPosition: 'top'
          }}
        />
        <CardContent>
          <Typography variant='h5'>
            {title}
          </Typography>
          <Typography variant='body2'>
            {overview}
          </Typography>
          <Stack>
            <Rating>
              {voteAvg}
            </Rating>
          </Stack>
          <Typography variant='h6'>
            {date}
          </Typography>
          <Typography variant='h6'>
            {mediaType}
          </Typography>
          <Typography variant='h6'>
            {video}
          </Typography>
          <Typography >
            {genres}
          </Typography>
          <Button onClick={() => handleFavoriteClick(id)} style={{ display: 'block', textAlign: 'center', margin: '0 auto' }}>
            <FavoriteIcon color="secondary"/>
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
