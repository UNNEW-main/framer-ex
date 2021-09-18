import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import styled from 'styled-components';

export const UseTransform = () => {
  const x = useMotionValue(0);
  const xRange = [0, 100, 250, 300];
  const opacityRange = [0, 1, 1, 0];
  const opacity = useTransform(x, xRange, opacityRange);

  return (
    <Wrapper
      animate={{ x: 300 }}
      style={{ opacity, x }}
      transition={{ repeat: Infinity }}
    />
  );
};

const Wrapper = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
`;
