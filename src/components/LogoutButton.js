import React from 'react';
import { withRouter } from 'react-router-dom';

const LogoutButton = withRouter(({ history, onLogout }) => (
  <button onClick={() => {
    onLogout()
  }}>Sign out</button>
));

export default LogoutButton;