import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import MiniDrawer from './MiniDrawer';

const PrivateRoute = ({ component: Component, isLogin, onLogout }) => (
  <Route render={(props) => {
    return (
      // 判斷是否登入，如果未登入則導到/login
      isLogin ? (
        <div>
          <MiniDrawer onLogout={onLogout}/>
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