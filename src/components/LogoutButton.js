import React from 'react';
import { withRouter } from 'react-router-dom';

const LogoutButton = withRouter(({ history, onLogout }) => (
    <p>
      Welcome! <button onClick={() => {
        onLogout()
      }}>Sign out</button>
    </p>
));

export default LogoutButton;