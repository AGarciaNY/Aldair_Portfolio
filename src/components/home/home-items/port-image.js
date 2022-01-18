import React from 'react';
import styled from '@emotion/styled';
import pig from '../../../img/project-pics/pig.png';

const ImageContaner = styled.div`
  display: flex;
  justify-content: center;
`;
const MyPic = styled.img`
  height: 200px;
  border-radius: 100%;
`;

const PortfolioPic = () => (
    <ImageContaner>
        <MyPic src={pig} alt=''/>
    </ImageContaner>
);
export default PortfolioPic;