import React from 'react';
import styled from 'styled-components';

const SideBar = ({ children }) => <Container>{children}</Container>;

const Container = styled.div`
  position: absolute;
  width: 205px;
  height: 100%;
`;

export default SideBar;