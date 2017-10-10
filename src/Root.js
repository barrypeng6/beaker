import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PrivateRoute, NoMatchRoute } from './components';
import { Login, Home, Orders } from './scenes';
import { connect } from 'react-redux';
import { checkLoginRequest, logoutRequest } from './actions';

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
        <div>
          <Switch>
            <Route path="/login" component={Login}/>
            <PrivateRoute exact path="/" component={Home} isLogin={isLogin} onLogout={onLogout}/>
            <PrivateRoute exact path="/orders" component={Orders} isLogin={isLogin}  onLogout={onLogout}/>
            <NoMatchRoute/>
          </Switch>
        </div>
      </Router>
    </Provider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);