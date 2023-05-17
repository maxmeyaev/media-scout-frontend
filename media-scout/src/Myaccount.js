import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Movies from './Components/Movies';
import { resetUserSession } from './service/AuthService';
import Avatar from './images/defaultuserprofile.png';
import { Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

const Profile = (props) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  //  const user = getUser();
  //  const name = user !== 'undefined' && user ? user.name : '';y
  const logoutHandler = () => {
    resetUserSession();
    navigate('/login');
  };

  useEffect(() => {
    setUsername(JSON.parse(sessionStorage.getItem('user')));
    document.body.style.backgroundColor = '#e3e3e3';
  }, []);

  return (
    <div className='profile-wrapper'>
      <div className="container">
        <div className="card mx-auto">
          <div className="upper">
            <img src="https://i.imgur.com/Qtrsrk5.jpg" className="img-fluid" />
          </div>
          <div className="user text-center">
            <div className="profile">
              <img src={Avatar} className="rounded-circle" width="80" />
            </div>
          </div>
          <div className="mt-5 text-center">
            <h4 className="mb-0">{username && username?.name}</h4>
            <span className="text-muted d-block mb-2">{username?.email}</span>
            <div className="d-flex justify-content-center align-items-center mt-4 px-4">
              <div className="stats">
                <Link to="/favorites"><h6 className="mb-0">Favorites</h6></Link>
                <span>{sessionStorage.getItem('favorites')}</span>
              </div>
            </div>
          </div>
          <Button variant="outlined" color="error" onClick={logoutHandler}>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
