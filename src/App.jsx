import React from 'react';
import {
  BiggerBox,
  HomePage,
  Header,
  RotatingBox,
  ScrollView,
} from './page/index';
import styled from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Section>
        <Route path="/" exact component={HomePage} />
        <Route path="/biggerBox" component={BiggerBox} />
        <Route path="/rotatingBox" component={RotatingBox} />
        <Route path="/scrollView" component={ScrollView} />
      </Section>
    </BrowserRouter>
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
