import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import asyncComponent from './components/AsyncComponent';
import { PrivateRoute, NoMatchRoute } from './components';
import { connect } from 'react-redux';
import { checkLoginRequest, logoutRequest } from './actions';

const Home = asyncComponent(() => import('./scenes/Home'));
const Login = asyncComponent(() => import('./scenes/Login'));
const Orders = asyncComponent(() => import('./scenes/Orders'));

const mapStateToProps = (state) => {
  return {
    isChecking: state.loginStatus.isChecking,
    isLogin: state.loginStatus.isLogin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckLogin: () => {
      dispatch(checkLoginRequest())
    },
    onLogout: () => {
      dispatch(logoutRequest());
    }
  };
}

class Root extends Component {
  componentDidMount() {
    !this.props.isLogin && this.props.onCheckLogin();
  }
  render() {
    const { store, isLogin, isChecking, onLogout } = this.props;
    return (
      isChecking ? <div>Loading...</div> :
      <Provider store={store}>
        <Router>
            <Switch>
              <Route path="/login" component={Login}/>
              <PrivateRoute exact path="/" component={Home} isLogin={isLogin} onLogout={onLogout}/>
              <PrivateRoute exact path="/orders" component={Orders} isLogin={isLogin}  onLogout={onLogout}/>
              <NoMatchRoute/>
            </Switch>
        </Router>
      </Provider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);
