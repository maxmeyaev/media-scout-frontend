import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { getToken } from '../service/AuthService';

const PrivateRoute = ({ component: Comment, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return getToken()
          ? <Comment {...props} />
          : <Navigate to={ { pathname: '/login' } } />;
      }}
    />
  );
};

export default PrivateRoute;
