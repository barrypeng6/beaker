import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PrivateRoute, NoMatchRoute } from './components';
import Login from './scenes/Login';
import Home from './scenes/Home';
import { connect } from 'react-redux';
import { checkLoginStatus } from './actions';

const mapStateToProps = (state) => {
  return {
    isChecking: state.loginStatus.isChecking,
    isLogin: state.loginStatus.isLogin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckLogin: () => {
        dispatch(checkLoginStatus())
    }
  };
}

class Root extends Component {
  componentDidMount() {
    !this.props.isLogin && this.props.onCheckLogin();
  }
  render() {
    const { store, isLogin, isChecking } = this.props;
    return (
      isChecking ? <div>Loading...</div> :
      <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login" component={Login}/>
          <PrivateRoute exact path="/" component={Home} isLogin={isLogin}/>
          <NoMatchRoute/>
        </Switch>
      </Router>
    </Provider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);