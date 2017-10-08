import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginFlow } from '../../actions'

const mapStateToProps = (state) => {
  return {
    isLogining: state.loginStatus.isLogining,
    isLogin: state.loginStatus.isLogin
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
    render() {
      const { isLogin, isLogining, onLogin } = this.props;
      const { from } = this.props.location.state || { from: { pathname: '/' } };
      return (
        isLogin ? <Redirect to={from}/>
        : <div>
          <p>You must log in to view the page at {from.pathname}</p>
          {isLogining ? <span>loading...</span>
            : <button onClick={() => {
                onLogin();
              }}
            >Log in</button>}
        </div>
      );
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Login);