import React from 'react';
import { motion, useMotionValue } from 'framer-motion';
import styled from 'styled-components';

export const UseMotionValue = () => {
  const motionValue = useMotionValue(1);
  return (
    <Wrapper style={{ translateX: motionValue }}>
      <motion.div
        style={{ translateX: motionValue }}
        animate={{
          translateX: 20,
          transition: {
            times: [0, 0.5, 1],
            yoyo: Infinity,
          },
        }}>
        👊
      </motion.div>
      <motion.div style={{ translateX: motionValue }}>😝</motion.div>
      <motion.div style={{ scaleX: -1, translateX: motionValue }}>
        👊
      </motion.div>
    </Wrapper>
  );
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
