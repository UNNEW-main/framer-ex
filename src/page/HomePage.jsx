import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout';

export const HomePage = () => {
  return (
    <Layout height={'100vh'}>
      <ListWrapper animate={{ scale: 2 }}>
        <LinkStyle to="/biggerBox">Bigger Box</LinkStyle>
        <LinkStyle to="/rotatingBox">Rotating Box</LinkStyle>
        <LinkStyle to="/UseMotionValue">useMotionValue</LinkStyle>
        <LinkStyle to="/useTransform">useTransform</LinkStyle>
        <LinkStyle to="/useViewportScroll">useViewportScroll</LinkStyle>
      </ListWrapper>
    </Layout>
  );
};

const ListWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LinkStyle = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 10px;
  background-color: white;
  width: 150px;
  height: 20px;
  border-radius: 30px;
  padding: 0;
  margin-bottom: 10px;
  cursor: pointer;
`;
