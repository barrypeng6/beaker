import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import fakeAuth from '../../api.js';

class Home extends Component {
    render() {
        return <div>
            <AuthButton/>
            <h1>Home</h1>
        </div>;
    }
}

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        console.log(history)
        fakeAuth.signout(() => history.push('/login'))
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
))

export default Home;