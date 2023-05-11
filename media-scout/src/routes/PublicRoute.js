import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { getToken } from '../service/AuthService';

const PublicRoute = ({ component: Comment, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return !getToken()
          ? <Comment {...props} />
          : <Navigate to={ { pathname: '/myaccount' } } />;
      }}
    />
  );
};

export default PublicRoute;
