import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, MainContent } from '../../../components';
import styled from 'styled-components';

const OrderCreateView = () => (
  <Container>
    <AppBar>
      New
      <Link to={`/orders`}>
        <button>back</button>
      </Link>
    </AppBar>
    <MainContent>
      do something...
    </MainContent>
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

export default OrderCreateView;