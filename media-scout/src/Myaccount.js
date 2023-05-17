import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Movies from './Components/Movies';
import { resetUserSession } from './service/AuthService';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, Card, CardMedia, Avatar, Typography, CardContent, Divider } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

const Profile = (props) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState('');
  //  const user = getUser();
  //  const name = user !== 'undefined' && user ? user.name : '';y
  const logoutHandler = () => {
    resetUserSession();
    navigate('/login');
  };

  useEffect(() => {
    setUsername(JSON.parse(sessionStorage.getItem('user')));
    setEmail(JSON.parse(sessionStorage.getItem('email')));
  }, []);

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '1em' }}>
        <Card sx={{ width: 500, height: 500, paddingTop: '1em' }}>
          <Typography sx={{ display: 'flex', justifyContent: 'center' }} variant='h5' >
            Account Overview
          </Typography>
          <CardMedia sx={{ display: 'flex', justifyContent: 'center', paddingTop: '1em' }}>
            <Avatar sx={{ bgcolor: '#4caf50' }}>MS</Avatar>
          </CardMedia>
          <CardContent>
            <Typography sx={{ display: 'flex', justifyContent: 'center', paddingTop: '0.5em' }}variant='h5'>{username && username?.name}</Typography>
            <Typography sx={{ display: 'flex', justifyContent: 'center', paddingY: '0.5em' }}variant='h5'>{email && email?.email}{username?.email}</Typography>
            <Divider/>
          </CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/">
              <Button variant='outlined' endIcon={<EditIcon/>} >
              Edit Profile</Button>
            </Link>
          </Box>
          <Box sx={{ paddingX: '1em', paddingY: '1em' }}>
            <Card>
              <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
                <Link to="/favorites">
                  <Button variant='outlined' color='error' endIcon={<FavoriteIcon />} >Favorites</Button>
                </Link>
              </CardContent>
            </Card>
          </Box>
        </Card>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingY: '1em' }}>
        <Button variant="outlined" color="error" onClick={logoutHandler}>
                Logout
        </Button>
      </Box>
      {/* <div className='profile-wrapper'>
        <div className="container">
          <h1>Account Overview</h1>
          <div className="profile-content">
            <div className="profile-content-info">
              <div className="box profile-info">
                <div className="box user-name">
                  <h2>{username && username?.name}</h2>
                  <h2>{email && email?.email}</h2>
                  <Link to="/" className='btn btn-primary'>Edit Profile</Link>
                </div>
                <div className="box user-email">
                  <h5>Email Address</h5>
                  <p>{username?.email}</p>
                </div>
              </div>
              <div className="profile-links">
                <ul>
                  <li>
                    <Link to="/favorites">Favorites</Link>
                  </li>
                </ul>
              </div>
              <Button variant="outlined" color="error" onClick={logoutHandler}>
              Logout
              </Button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Profile;
