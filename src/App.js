import React from 'react';
import { Main } from './page/index';
import styled from 'styled-components';

const App = () => {
  return (
    <Section>
      <Main />
    </Section>
  );
};

export default App;

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(250deg, #7b2ff7, #f107a3);
  background-repeat: no-repeat;
`;
