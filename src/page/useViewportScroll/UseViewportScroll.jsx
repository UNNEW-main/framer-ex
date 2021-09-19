import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import styled from 'styled-components';
import { Layout } from '../../components/Layout';

export const UseViewportScroll = () => {
  const { scrollY, scrollYProgress } = useViewportScroll();
  // useTransform(motionValue, from, to);
  console.log(scrollYProgress);
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <Layout height={'200vh'}>
      <Wrapper
        style={{
          scale,
        }}></Wrapper>
    </Layout>
  );
};

const Wrapper = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
`;
