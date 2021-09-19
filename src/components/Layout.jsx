import React from 'react';
import styled from 'styled-components';

export const Layout = ({ children, height }) => {
  return <Section height={height}>{children}</Section>;
};

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: ${(props) => props.height};
`;
