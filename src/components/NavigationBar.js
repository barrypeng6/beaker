import React from 'react';
import { Link } from 'react-router-dom';

import List, { ListItem, ListItemIcon } from 'material-ui/List';
import { Home, InsertDriveFile, Inbox } from 'material-ui-icons';

import styled from 'styled-components';

const routes = [
  {
    label: 'Home',
    path: '/',
    icon: <Home/>
  },
  {
    label: 'Orders',
    path: '/orders',
    icon: <InsertDriveFile/>
  }
];

const NavigationBar = ({ onLogout }) => (
  <Container>
    <List>
      {routes.map( route => (
        <ListItem
          button
          key={route.label}
        >
          <Link to={route.path}>
            <ListItemIcon>
              {route.icon}
            </ListItemIcon>
          </Link>
        </ListItem>
      ))}
      <ListItem
        button
        onClick={onLogout}
      >
        <ListItemIcon>
          <Inbox/>
        </ListItemIcon>
      </ListItem>
    </List>
  </Container>
);

const Container = styled.div`
  position: absolute;
  z-index: 99;
  width: 60px;
  height: 100%;
  background-color: skyblue;
`;

export default NavigationBar;