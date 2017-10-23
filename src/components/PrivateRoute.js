import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import NavigationBar from './NavigationBar';

const PrivateRoute = ({ path, component: Component, isLogin, onLogout }) => (
  <Route path={path} render={(props) => {
    return (
      // 判斷是否登入，如果未登入則導到/login
      isLogin ? (
        <div>
          <NavigationBar onLogout={onLogout}/>
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