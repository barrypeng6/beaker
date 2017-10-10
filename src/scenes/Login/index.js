import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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
    },
    onCancelLogin: () => {
      dispatch({type: 'LOGIN_CANCEL'});
    }
  };
}

class Login extends Component {
    render() {
      const { isLogin, isLogining, onLogin, onCancelLogin, error } = this.props;
      const { from } = this.props.location.state || { from: { pathname: '/' } };
      return (
        isLogin ? <Redirect to={from}/>
        : <div>
          <p>You must log in to view the page at {from.pathname}</p>
          {isLogining ? <span>
              {'loading...'}
              <button onClick={() => {
                  onCancelLogin();
                }}
              >cancel</button>
            </span>
            : <button onClick={() => {
                onLogin('annie@meepshop.com', '123456');
              }}
            >Log in</button>}
            <div style={{color: 'red'}}>{error}</div>
        </div>
      );
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Login);