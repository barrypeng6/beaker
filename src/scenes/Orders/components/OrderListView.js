import React from 'react';
import { Link } from 'react-router-dom';
import { SideBar, Wrapper, AppBar, MainContent } from '../../../components';
import styled from 'styled-components';

const OrderListView = ({match}) => (
  <Container>
    <SideBar>orders filter</SideBar>
    <Wrapper>
      <AppBar>
        Orders
        <Link to={`${window.location.pathname}/new`}>
          <button>create</button>
        </Link>
      </AppBar>
      <MainContent>
        <ul>
          <li><Link to={`${match.url}/1`}>__1__</Link></li>
          <li><Link to={`${match.url}/2`}>__2__</Link></li>
        </ul>
      </MainContent>
    </Wrapper>
  </Container>
);

const Container = styled.div`
  position: absolute;
  z-index: 89;
  left: 60px;
  width: 100%;
  height: 100%;
  background-color: #ddd;
`;

export default OrderListView;