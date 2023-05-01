import React from 'react';
import { Link } from 'react-router-dom';
import Movies from './Movies';

const Profile = () => {
  return (
    <div className='profile-wrapper'>
      <div className="container">
        <h1>Account Overview</h1>
        <div className="profile-content">
          <div className="profile-content-info">
            <div className="box profile-info">
              <div className="box user-name">
                <h2>Ans Choudhary</h2>
                <Link to="/" className='btn btn-primary'>Edit Profile</Link>
              </div>
              <div className="box user-email">
                <h3>Email Address</h3>
                <p>ans101@gmail.com</p>
                <Link to="/">Edit</Link>
              </div>
              <div className="box user-phone">
                <h3>Phone Number </h3>
                <p>+1 (234) 567 - 7890</p>
                <Link to="/">Edit Phone Number</Link>
              </div>
            </div>
            <div className="profile-links">
              <ul>
                <li>
                  <Link to="/">My Movies</Link>
                </li>
                <li>
                  <Link to="/">My Shows</Link>
                </li>
                <li>
                  <Link to="/">Favorites</Link>
                </li>
              </ul>
            </div>
          </div>
          <Movies />
        </div>
      </div>
    </div>
  );
};

export default Profile;
