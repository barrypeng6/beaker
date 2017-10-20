import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest } from '../../actions';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import styled from 'styled-components';

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
    />
  );
}

  class LoginContainer extends Component {
    constructor() {
      super();
      this.state = {
        account: '',
        password: ''
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
      const { isLogining, onLogin, error } = this.props;
      const { account, password } = this.state;
      return (
        <Container>
          <StyledDiv>
            <p>meepShop</p>
            <TextField
              id="account"
              label="Account"
              value={account}
              onChange={this._handleAccountInputChange}
              margin="normal"
            /><br/>
            <TextField
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={this._handlePasswordInputChange}
              margin="normal"
            /><br/>
            {isLogining ? <span>{'is logging...'}</span>
              : <Button
                  onClick={() => {
                    onLogin(account, password);
                  }} >Log in</Button>
            }
              <div style={{color: 'red'}}>{error}</div>
          </StyledDiv>
        </Container>
      );
    }
  }

  const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
  `;

  const StyledDiv = styled.div`
    padding: 20px;
  `;

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));