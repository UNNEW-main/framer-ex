import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HomePage = () => {
  return (
    <ListWrapper animate={{ scale: 2 }}>
      <LinkStyle to="/biggerBox">Bigger Box</LinkStyle>
      <LinkStyle to="/rotatingBox">Rotating Box</LinkStyle>
    </ListWrapper>
  );
};
const ListWrapper = styled(motion.div)``;

const LinkStyle = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 10px;
  background-color: white;
  width: 100px;
  height: 20px;
  border-radius: 30px;
  padding: 0;
  margin-bottom: 10px;

  cursor: pointer;
`;
