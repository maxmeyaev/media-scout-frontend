/* eslint-disable camelcase */
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
// eslint-disable-next-line no-unused-vars
import { Button, CardActionArea, CardActions, autocompleteClasses, Container } from '@mui/material';

// eslint-disable-next-line no-unused-vars
const img_size_500 = 'https://image.tmdb.org/t/p/w500';
// eslint-disable-next-line no-unused-vars
const img_size_300 = 'https://image.tmdb.org/t/p/w300';

const MovieCard = ({ title, id, poster, overview, voteAvg, date, mediaType, video, genres, handleFavoriteClick }) => {
  const roundVote = (voteAvg) => {
    return voteAvg.toFixed(1);
  };
  return (
    <Card sx={{
      padding: '10px',
      position: 'relative',
      margin: '10px',
      maxWidth: '400px',
      backgroundColor: '#222'
    }}>
      <CardActionArea>
        <Link style={{ textDecoration: 'none' }} to={`/movies/${id}`}>
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
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
              </div>
            </div>
            {
              <Typography >
                {genres}
              </Typography>
            }
          </CardContent>
        </Link>
      </CardActionArea>
      <Button onClick={() => handleFavoriteClick(id)} style={{ display: 'block', textAlign: 'center', margin: '0 auto' }}>
        <FavoriteIcon color="secondary" />
      </Button>
    </Card>
  );
};

export default MovieCard;
