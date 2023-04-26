/* eslint-disable camelcase */
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// eslint-disable-next-line no-unused-vars
import { Button, CardActionArea, CardActions } from '@mui/material';

// eslint-disable-next-line no-unused-vars
const img_size_500 = 'https://image.tmdb.org/t/p/w500';
// eslint-disable-next-line no-unused-vars
const img_size_300 = 'https://image.tmdb.org/t/p/w300';

const MovieCard = ({ title, id, poster, overview, voteAvg, date, mediaType, video }) => {
  return (
    <Card sx={{
      display: 'flex',
      width: 300,
      height: 'auto',
      flexDirection: 'column',
      padding: '10px',
      position: 'relative'
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={`${img_size_500}/${poster}`}
          alt='poster'
        />
        <CardContent>
          <Typography variant='h5'>
            {title}
          </Typography>
          <Typography variant='body2'>
            {overview}
          </Typography>
          <Typography variant='h6'>
            {voteAvg}
          </Typography>
          <Typography variant='h6'>
            {date}
          </Typography>
          <Typography variant='h6'>
            {mediaType}
          </Typography>
          <Typography variant='h6'>
            {video}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
