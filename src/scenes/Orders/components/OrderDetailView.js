import React from 'react';
import { Link } from 'react-router-dom';
import { SideBar, Wrapper, AppBar, MainContent } from '../../../components';
import styled from 'styled-components';

const OrderDetailView = ({match}) => (
  <Container>
    <SideBar>order activity</SideBar>
    <Wrapper>
      <AppBar>
        {`order - ${match.params.id}`}
        <Link to={`/orders`}>
          <button>back</button>
        </Link>
      </AppBar>
      <MainContent>
        {`order detial - ${match.params.id}`}
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
`;

export default OrderDetailView;