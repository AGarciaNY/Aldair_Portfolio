import React, {Component} from 'react';
import styled from '@emotion/styled';

const Navcontainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 6;
  height: 100px;
  background: linear-gradient(black,black,#4c4c4c, transparent);
  color: white;
  padding-top: 30px;
  display: flex;
`;

const MyName = styled.h1`
  margin: 0 0 0 40px;
  font-size: 30px
`;

const LinkHolder = styled.div`
  position: absolute;
  right: 150px;
  padding-top: 10px;
`;
const Links = styled.button`
  border: 0;
  width:100px;

  background: transparent;
  text-decoration: none;
  color: white;
  font-size: 16px;
  
  &:hover{
    font-size: 18px;
    padding-left: 22px;
  }
`;

const DropDown = styled.div`
  position: relative;
  left: 320px;
  top:-22px;
  z-index:100;
  &:hover div{
    display: block;
  }
`;

const DropButton = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
  color: white;
  font-size: 16px;
  z-index:100;
  &:hover{
    font-size: 18px;
  }
`;

const DropdownHolder=styled.div`
  position: relative;
  left: -30px;
  display: none;
  background: transparent;
  min-width: 140px;
  border-radius: 20px;
  padding: 8px 0 0;
  z-index:100;
`;

const Text = styled.div`
  width: 140px;
  height: 30px;
  margin: 3px 0;
  position: relative;
  z-index: 300;
  
  &:hover{
    margin: 5px 0;
  }
`;

const TextFont = styled.button`
  width: 140px;
  height: 30px;
  display: block;
  background: silver;
  z-index: 300;
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
      <MyName>Aldair's Portfolio</MyName>
      <LinkHolder>
          <Links onClick={() => this.props.changepage('home')}>Home</Links>
          <Links onClick={() => this.props.changepage('artwork')}>Art Work</Links>
          <Links onClick={() => this.props.changepage('projects')}>Projects</Links>
          <DropDown>
            <DropButton>Dropdown</DropButton>
            <DropdownHolder>
              <Text><TextFont>Link 1</TextFont></Text>
              <Text><TextFont>Link 2</TextFont></Text>
              <Text><TextFont>Link 3</TextFont></Text>
            </DropdownHolder>
          </DropDown>
      </LinkHolder>
    </Navcontainer>
    );
  }

}