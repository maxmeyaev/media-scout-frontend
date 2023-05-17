import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Movies from './Components/Movies';
import { resetUserSession } from './service/AuthService';
import { Button } from '@mui/material';
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
    <div className='profile-wrapper'>
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
    </div>
  );
};

export default Profile;
