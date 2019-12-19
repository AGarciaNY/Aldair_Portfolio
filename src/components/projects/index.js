import React,{Component} from 'react';
import styled from '@emotion/styled';
import Cube from './projects-items/cube';

const Title=styled.p`
  color:white;
  font-weight:bold;
  font-size:20px;
  text-align:center;
`;

export default class Projects extends Component{

    render(){
      return(
        <div>
          <Title>
          Here are some projects that I've worked on with my partners and some that I worked on my own.
          </Title>
          <Cube/>
        </div>
      );
    }
}
