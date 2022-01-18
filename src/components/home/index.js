import React from 'react';
import styled from '@emotion/styled';

import PortfolioPic from './home-items/port-image';
import AboutMe from './home-items/about-me';
import MyLerning from './home-items/my-learning'; 

const Contaner = styled.div`
  font-family: 'Merienda One', cursive;
`;

const Header = styled.h1`
  text-align: center;
`;

const HomeContent = styled.div`
  display: flex;
  flex-direction: row;
`;

const Aboutme = styled(AboutMe)`
  &:hover{
    
  }
`;

const Mylerning=styled(MyLerning)`
`;

const Home = () => (
    <Contaner >
      <PortfolioPic/>
      <Header>
          Hi I am Aldair
      </Header>
      <HomeContent>
        <Aboutme/>
        <Mylerning/>
      </HomeContent>
    </Contaner> 
);

export default Home;
