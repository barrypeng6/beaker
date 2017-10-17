import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest } from '../../actions'

const mapStateToProps = (state) => {
  return {
    isLogining: state.loginStatus.isLogining,
    isLogin: state.loginStatus.isLogin,
    error: state.loginStatus.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (email, password) => {
      dispatch(loginRequest(email, password));
    }
  };
}

const Login = ({ location, isLogin, isLogining, onLogin, error }) => {
  const { from } = location.state || { from: { pathname: '/' } };
  return (
    isLogin ? <Redirect to={from}/>
    : <LoginContainer
      isLogining={isLogining}
      onLogin={onLogin}
      error={error}
      from={from}
    />
  );
}

  class LoginContainer extends Component {
    constructor() {
      super();
      this.state = {
        account: 'annie@meepshop.com',
        password: '123456'
      }
    }

    _handleAccountInputChange = (e) => {
      const newAccount = e.target.value;
      this.setState(() => ({ account: newAccount }));
    }

    _handlePasswordInputChange = (e) => {
      const newPassword = e.target.value;
      this.setState(() => ({ password: newPassword }));
    }

    render() {
      const { from, isLogining, onLogin, error } = this.props;
      const { account, password } = this.state;
      return (
        <div>
          <p>You must log in to view the page at {from.pathname}</p>
          <input
            type="text"
            name={'account'}
            value={account}
            onChange={this._handleAccountInputChange}
          />
          <input
            type="password"
            name={'password'}
            value={password}
            onChange={this._handlePasswordInputChange}
          />
          {isLogining ? <span>{'is logging...'}</span>
            : <button onClick={() => {
                onLogin(account, password);
              }}
            >Log in</button>}
            <div style={{color: 'red'}}>{error}</div>
        </div>
      );
    }
  }

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));