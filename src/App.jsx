import React, { useState } from 'react';
import {
  BiggerBox,
  HomePage,
  Header,
  RotatingBox,
  UseMotionValue,
  UseTransform,
  UseViewportScroll,
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
        <Route path="/UseMotionValue" component={UseMotionValue} />
        <Route path="/useTransform" component={UseTransform} />
        <Route path="/useViewportScroll" component={UseViewportScroll} />
      </Section>
    </BrowserRouter>
  );
};

export default App;

const Section = styled.div`
  display: flex;
  justify-content: center;
  /* 
  width: 100vw;
  height: 200vh; */
  background: linear-gradient(250deg, #7b2ff7, #f107a3);
  background-repeat: no-repeat;
`;
