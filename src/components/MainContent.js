import React from 'react';
import styled from 'styled-components';

const MainContent = ({ children }) => <Container>{children}</Container>;

const Container = styled.div`
  position: absolute;
  top: 30px;
  width: 100%;
  height: 100%;
  background-color: aliceblue;
`;

export default MainContent;