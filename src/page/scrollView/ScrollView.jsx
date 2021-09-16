import React from 'react';
import { motion, useMotionValue } from 'framer-motion';
import styled from 'styled-components';

export const ScrollView = () => {
  const scale = useMotionValue(1);
  console.log(scale);
  return <Wrapper style={{ scale }}></Wrapper>;
};

const Wrapper = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  cursor: pointer;
`;
