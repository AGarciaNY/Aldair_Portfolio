import React from 'react';
import styled from '@emotion/styled';

const Title = styled.p`
  text-align: center;
  color: white;
`;
const Holder = styled.div`
  width: 50%;
`;
const AboutMe = () => (
        <Holder>
          <Title>About me</Title>
        </Holder>
);

export default AboutMe;
