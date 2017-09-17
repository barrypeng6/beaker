import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import fakeAuth from '../../api.js';

class Login extends Component {
    state = {
      redirectToReferrer: false,
      data: {}
    }
  
    // 內部使用的function 字首加底線（_）
    _login = () => {
      fakeAuth.authenticate((data) => {
        this.setState({ redirectToReferrer: true, data })
      })
    }
  
    render() {
      const { from } = this.props.location.state || { from: { pathname: '/' } };
      const { redirectToReferrer } = this.state;
      console.log(fakeAuth.isAuthenticated)
      return (
        redirectToReferrer && fakeAuth.isAuthenticated ? <Redirect to={from}/>
        : <div>
          <p>You must log in to view the page at {from.pathname}</p>
          <button onClick={this._login}>Log in</button>
        </div>
      );
    }
  }

  export default Login;