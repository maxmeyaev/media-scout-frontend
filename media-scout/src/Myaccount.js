import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Movies from './Components/Movies';
import { resetUserSession } from './service/AuthService';
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
                <Link to="/" className='btn btn-primary'>Edit Profile</Link>
              </div>
              <div className="box user-email">
                <h3>Email Address</h3>
                <p>{username?.email}</p>
                <Link to="/">Edit</Link>
              </div>
            </div>
            <div className="profile-links">
              <ul>
                <li>
                  <Link to="/favorites">Favorites</Link>
                </li>
              </ul>
            </div>
            <input type='button' value="Logout" onClick={logoutHandler} />
          </div>
          <Movies />
        </div>
      </div>
    </div>
  );
};

export default Profile;
