import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Layout } from '../../components/Layout';
export const BiggerBox = () => {
  const [isOpen, setIsOpen] = useState('false');
  return (
    <Layout height={'100vh'}>
      <Wrapper
        layout
        animate={{ scale: 2 }}
        whileTap={isOpen === 'false' ? { scale: 1.8 } : { scale: 2.2 }}
        onClick={() =>
          isOpen === 'true' ? setIsOpen('false') : setIsOpen('true')
        }
        data={isOpen}>
        {isOpen === 'false' ? '> _ <' : 'O ~ O'}
      </Wrapper>
    </Layout>
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
  font-size: 20px;
  ${({ data }) =>
    data === 'true' && `width: 200px; height: 200px; font-size: 30px; `}
  cursor: pointer;
`;
