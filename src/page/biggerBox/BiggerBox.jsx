import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const BiggerBox = () => {
  const [isOpen, setIsOpen] = useState('false');
  return (
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
