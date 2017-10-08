import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutRequest } from '../../actions';

const mapStateToProps = (state) => {
  return {
    isLogin: state.loginStatus.isLogin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => {
      dispatch(logoutRequest());
    }
  };
}

const Home = ({ isLogin, onLogout }) => (
  <div>
    <LogoutButton isLogin={isLogin} onLogout={onLogout} />
    <h1>Home</h1>
  </div>
);

const LogoutButton = withRouter(({ history, isLogin, onLogout }) => (
  isLogin ? (
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