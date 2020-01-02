import React, {Component} from 'react';
import styled from '@emotion/styled';

const Navcontainer = styled.div`
  height: 100px;
  background: linear-gradient(black,black,#4c4c4c, transparent);
  color: white;
  padding-top: 30px;
  display: flex;
`;

const NameHolder=styled.div`
  width: 300px;
`;
const MyName = styled.h1`
  margin: 0 0 0 40px;
  font-size: 30px
  width: 200px;
`;

const LinkHolder = styled.div`
  position: absolute;
  right: 0;
  display: block;
  padding-top: 10px;
  padding-right: 70px;
`;
const Links = styled.button`
  float: Right;
  background: transparent;
  border: 0;
  text-decoration: none;
  color: white;
  padding-left: 30px;
  font-size: 16px;
  
  &:hover{
    font-size: 18px;
    padding-left: 22px;
  }
`;

const DropDown = styled.div`
  padding-left: 30px;
  
  &:hover div{
    display: block;
  }
`;

const DropButton = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
  color: white;
  min-width: 140px;
  font-size: 16px;

  &:hover{
    font-size: 18px;
  }
`;

const DropdownHolder=styled.div`
  display: none;
  background: transparent;
  min-width: 140px;
  border-radius: 20px;
  padding: 8px 0 0;
`;



const Right=styled.li`
  list-style-type: none;
  float: right;
  z-index: 1;
`;

const Text = styled.div`
  width: 140px;
  height: 30px;
  margin: 3px 0;
  position: relative;
  z-index: 1;
  
  &:hover{
    margin: 5px 0;
  }
`;

const TextFont = styled.button`
  width: 140px;
  height: 30px;
  display: block;
  background: silver;
  z-index: 1;
  border-radius: 20px;
  text-decoration: none;
  color: white;
  font-size: 15px;

  &:hover{
    position: absolute;
    left: -10px;
    width: 160px;
    height: 35px;
    font-size: 18px;
  }
`;

export default class Nav extends Component{

  render(){

    return(

    <Navcontainer>
      <NameHolder>
        <MyName>Aldair's Portfolio</MyName>
      </NameHolder>
      <LinkHolder>
        <Right>
          <DropDown>
            <DropButton>Dropdown</DropButton>
            <DropdownHolder>
              <Text><TextFont>Link 1</TextFont></Text>
              <Text><TextFont>Link 2</TextFont></Text>
              <Text><TextFont>Link 3</TextFont></Text>
            </DropdownHolder>
          </DropDown>
        </Right>
        <Right>
          <Links onClick={() => this.props.changepage('projects')}>Projects</Links>
          <Links onClick={() => this.props.changepage('artwork')}>Art Work</Links>
          <Links onClick={() => this.props.changepage('home')}>Home</Links>
        </Right>
      </LinkHolder>
    </Navcontainer>
    );
  }

}