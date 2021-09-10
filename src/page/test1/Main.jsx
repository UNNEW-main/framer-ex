import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Main = () => {
  return (
    <Wrapper
      initial={{ x: '100vw' }}
      animate={{ x: 'calc(10vw - 50%)' }}></Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 200px;
  height: 200px;
`;
