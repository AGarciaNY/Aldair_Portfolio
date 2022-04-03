import React, {Component} from 'react';
import styled from '@emotion/styled';

const Navcontainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 6;
  height: 100px;
  display: flex;

  background: linear-gradient(black,black,#4c4c4c, transparent);
  color: white;
  
  @media only screen and (max-width: 750px) {
    position:static;
    height:150px;
  }
`;

const MyName = styled.p`
  position: relative;
  top: 30px;
  left: 30px;
  font-size: 30px;
  font-weight: 700;
  margin:0;
  @media only screen and (max-width: 750px) {
    width: 100%;
    position: static;
    padding:20px 0 0 0;
    text-align: center;
  }
`;

const LinkHolder = styled.div`
  position: absolute;
  right: 150px;
  top: 40px;
  @media only screen and (max-width: 750px) {
    top: 80px;
    right: 110px;
  }
`;

const Links = styled.button`
  border: 0;
  width: 100px;

  background: transparent;
  text-decoration: none;
  color: white;
  font-size: 16px;
  text-align: center;

  &:hover{
    font-size: 18px;
  }

  @media only screen and (max-width: 750px) {
    width:80px;
    font-size: 14px;
    &:hover{
      font-size: 15px;
    }
  }
`;

const DropDown = styled.div`
  position: relative;
  width:100px;
  left: 300px;
  text-align: center;
  top: -22px;
  z-index: 100;

  &:hover div{
    display: block;
  }
  @media only screen and (max-width: 750px) {
    left:240px;

  }
`;

const DropButton = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
  color: white;
  font-size: 16px;
  z-index: 100;
  &:hover{
    font-size: 18px;
  }
  @media only screen and (max-width: 750px) {
    width: 80px;
    font-size: 14px;
    &:hover{
      font-size: 15px;
    }
  }
`;

const DropdownHolder=styled.div`
  position: relative;
  left: -20px;
  display: none;
  background: transparent;
  min-width: 140px;
  border-radius: 20px;
  padding: 8px 0 0;
  z-index: 100;
  @media only screen and (max-width: 750px) {
    left: -30px;
  }
`;



const TextFont = styled.button`
  width: 140px;
  height: 30px;
  display: block;
  margin: 3px 0;

  background: silver;
  z-index: 30;
  border-radius: 20px;
  text-decoration: none;
  color: white;
  font-size: 15px;

  &:hover{
    position: relative;
    margin: 5px 0;
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
          {/* <DropDown>
            <DropButton>Dropdown</DropButton>
            <DropdownHolder>
              <TextFont onClick={() => this.props.changepage('comments')}>comment here</TextFont>
              <TextFont onClick={() => this.props.changepage('MypastWork')}>Link 2</TextFont>
              <TextFont>Link 3</TextFont>
            </DropdownHolder>
          </DropDown> */}
      </LinkHolder>
    </Navcontainer>
    );
  }

}