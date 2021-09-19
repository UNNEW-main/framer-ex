import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import styled from 'styled-components';
import { Layout } from '../../components/Layout';

export const UseViewportScroll = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 2, 1]);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [-200, 0, 200]);
  return (
    <Layout height={'200vh'}>
      <Wrapper
        style={{
          scale,
        }}
      />
      <Wrapper2
        style={{
          x,
          y: -400,
        }}
      />
    </Layout>
  );
};

const Wrapper = styled(motion.div)`
  position: absolute;

  width: 200px;
  height: 200px;
  background-color: white;
`;
const Wrapper2 = styled(motion.div)`
  position: fixed;
  width: 200px;
  height: 200px;
  background-color: orange;
`;
