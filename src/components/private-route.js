import React, { Component } from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';

import { connect } from 'react-redux';
import { checkLoginStatus } from '../actions';

const mapStateToProps = (state) => {
  return {
    loginStatus: state.loginStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckLogin: () => {
        dispatch(checkLoginStatus())
    }
  };
}

class PrivateRoute extends Component {
  componentDidMount() {
    this.props.onCheckLogin();
  }
  render() {
    console.log(this.props)
    const { component: Component, loginStatus } = this.props;
    return (
      <Route render={(props) => {
        return (
          loginStatus ? (
            <Component {...props}/>
          ) : (
            <Redirect to={{
              pathname: '/login',
              state: { from: props.location }
            }}/>
          )
        );
      }}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);