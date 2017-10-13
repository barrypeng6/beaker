import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';

const SideBar = ({ onLogout }) => (
  <div>
    <ul style={{}}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/orders">Orders</Link></li>
    </ul>
    <LogoutButton onLogout={onLogout} />
  </div>
);

export default SideBar;