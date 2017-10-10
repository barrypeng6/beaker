import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const NoMatchRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
      <Redirect to={{
        pathname: '/'
      }}/>
  )}/>
)

export default NoMatchRoute;