import React from 'react';
import styled from 'styled-components';

const AppBar = ({ children }) => <Container>{children}</Container>;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 30px;
  background-color: darkcyan;
`;

export default AppBar;