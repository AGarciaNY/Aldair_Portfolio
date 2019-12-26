import React,{Component} from 'react';
import styled from '@emotion/styled';

const Holder = styled.div`
height:500px;
`;

const Hone = styled.h1`
  text-align: center;
  color:white;
`;

export default class ArtWork extends Component{

    render(){
      return(
        <Holder>
            <Hone>Coming Soon</Hone>
        </Holder>
      );
    }
}
