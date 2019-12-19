import React from 'react';
import styled from'@emotion/styled';

const Box =styled.div`
  width:200px;
  height:200px;
  background-color:#76a7a8; 
  zindex:1;
  border-radius:50px;
`;

const Img = styled.img`
  height:100px;
`;

const Artwork =({url,info,})=>(

  <Box>
    <Img src={url} alt={url}/>
    <h1> hi man</h1>
  </Box>
);
export default Artwork;