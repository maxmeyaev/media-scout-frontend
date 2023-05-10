/* eslint-disable camelcase */
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
// eslint-disable-next-line no-unused-vars
import { Button, CardActionArea, CardActions, autocompleteClasses, Container } from '@mui/material';

// eslint-disable-next-line no-unused-vars
const img_size_500 = 'https://image.tmdb.org/t/p/w500';
// eslint-disable-next-line no-unused-vars
const img_size_300 = 'https://image.tmdb.org/t/p/w300';

const MovieCard = ({ title, id, poster, overview, voteAvg, date, mediaType, video }) => {
  const roundVote = (voteAvg) => {
    return voteAvg.toFixed(1);
  };
  return (
    <Card sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 400,
      borderRadius: '2%',
      backgroundColor: '#121212',
      padding: '10px',
      marginTop: '20px',
      position: 'relative'
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={`${img_size_500}/${poster}`}
          alt='poster'
        />
        <CardContent>
          <Typography variant="h6" display="block" gutterBottom color={'white'}>
            {title}
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant='subtitle' color={'white'}>
              Date: {date}
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant='subtitle' color={'white'} paddingRight={'12px'}>
                {roundVote(voteAvg)}
              </Typography>
              <Rating
                value={4.5}
                readOnly
                precision={0.5}
                size='small'
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit"/>}
              />
            </div>

            {/* <Typography variant='subtitle' color={'white'}>
              {labels[voteAvg]}
            </Typography> */}
            {/* <Typography color={'dark'} variant='subtitle1' style={{ backgroundColor: 'yellow', borderRadius: '50%', width: '3em', height: '2em', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
              {voteAvg}
            </Typography> */}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
