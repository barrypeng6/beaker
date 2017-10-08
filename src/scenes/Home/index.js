import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutFlow } from '../../actions';

const mapStateToProps = (state) => {
  return {
    loginStatus: state.loginStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => {
      dispatch(logoutFlow());
    }
  };
}

class Home extends Component {
    render() {
      const { loginStatus, onLogout } = this.props;
      return <div>
        <AuthButton loginStatus={loginStatus} onLogout={onLogout} />
          <h1>Home</h1>
      </div>;
    }
}

const AuthButton = withRouter(({ history, loginStatus, onLogout }) => (
  loginStatus ? (
    <p>
      Welcome! <button onClick={() => {
        onLogout()
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
));

export default connect(mapStateToProps, mapDispatchToProps)(Home);