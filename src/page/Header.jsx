import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Header = () => {
  return (
    <ButtonWrapper
      variants={button}
      initial="rest"
      whileHover="hover"
      whileTap="pressed">
      <HomeButton to="/">Home</HomeButton>
    </ButtonWrapper>
  );
};
const button = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
  pressed: { scale: 0.9 },
};

const ButtonWrapper = styled(motion.div)`
  position: fixed;
  top: 30px;
  left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 20px;
  background: rgba(0, 0, 0, 0.4);
  width: 100px;
  height: 80px;
  border-radius: 10px;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

const HomeButton = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 100%;
  height: 100%;
  color: white;
`;
