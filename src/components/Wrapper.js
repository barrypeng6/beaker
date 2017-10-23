import React from 'react';
import styled from 'styled-components';

const Wrapper = ({ children }) => <Container>{children}</Container>;

const Container = styled.div`
  position: absolute;
  z-index: 79;
  left: 205px;
  width: 100%;
  height: 100%;
  background-color: #ddd;
`;

export default Wrapper;