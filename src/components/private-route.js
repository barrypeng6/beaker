import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';
import SideBar from './side-bar';

const PrivateRoute = ({ component: Component, isLogin, onLogout }) => (
  <Route render={(props) => {
    return (
      isLogin ? (
        <div>
          <SideBar onLogout={onLogout}/>
          <Component {...props}/>
        </div>
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      )
    );
  }}/>
);

export default PrivateRoute;