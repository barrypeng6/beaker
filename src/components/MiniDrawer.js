import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';

const routes = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Orders',
    path: '/orders'
  }
];

const MiniDrawer = ({ onLogout }) => (
  <div>
    MiniDrawer
    <ul>
      {routes.map( route => (
        <li key={route.label}><Link to={route.path}>{route.label}</Link></li>
      ))}
    </ul>
    <LogoutButton onLogout={onLogout} />
  </div>
);

export default MiniDrawer;