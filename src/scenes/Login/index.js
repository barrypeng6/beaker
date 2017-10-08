import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginFlow } from '../../actions'

const mapStateToProps = (state) => {
  return {
    loginStatus: state.loginStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: () => {
      dispatch(loginFlow())
    }
  };
}

class Login extends Component {
    _login = () => {
      console.log('login request');
      this.props.onLogin();
    }
  
    render() {
      const { from } = this.props.location.state || { from: { pathname: '/' } };
      return (
        this.props.loginStatus ? <Redirect to={from}/>
        : <div>
          <p>You must log in to view the page at {from.pathname}</p>
          <button onClick={this._login}>Log in</button>
        </div>
      );
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Login);