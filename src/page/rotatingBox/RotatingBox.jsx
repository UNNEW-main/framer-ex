import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
export const RotatingBox = () => {
  return (
    <Wrapper
      animate={{
        rotate: [0, 0, 270, 270, 0],
        scale: [1, 2, 2, 1, 1],
        borderRadius: ['15%', '15%', '50%', '50%', '15%'],
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        repeat: Infinity,
        times: [0, 0.2, 0.5, 0.8, 1],
        repeatDelay: 1,
      }}
    />
  );
};

const Wrapper = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 150px;
  height: 150px;
`;
