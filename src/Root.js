import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PrivateRoute, NoMatchRoute } from './components';
import Login from './scenes/Login';
import Home from './scenes/Home';

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login" component={Login}/>
          <PrivateRoute exact path="/" component={Home}/>
          <NoMatchRoute/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default Root;