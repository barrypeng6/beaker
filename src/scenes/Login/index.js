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

class Login extends Component {
    render() {
      const { isLogin, isLogining, onLogin, error } = this.props;
      const { from } = this.props.location.state || { from: { pathname: '/' } };
      return (
        isLogin ? <Redirect to={from}/>
        : <div>
          <p>You must log in to view the page at {from.pathname}</p>
          {isLogining ? <span>{'is logging...'}</span>
            : <button onClick={() => {
                onLogin('annie@meepshop.com', '123456s');
              }}
            >Log in</button>}
            <div style={{color: 'red'}}>{error}</div>
        </div>
      );
    }
  }

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));