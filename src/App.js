// put the npm pkg in 1st place
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// then put the import files
import { PrivateRoute, NoMatchRoute } from './components'
import fakeAuth from './api.js';
import Login from './scenes/Login';
import Home from './scenes/Home';

class App extends Component {
  async componentDidMount() {
    // get global data from api
    await fakeAuth.getStoreList();
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login}/>
          <PrivateRoute exact path="/" component={Home}/>
          <NoMatchRoute/>
        </Switch>
      </Router>
    );
  }
}

export default App;