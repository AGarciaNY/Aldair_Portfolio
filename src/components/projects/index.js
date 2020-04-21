import React from 'react';
import data from './myprojects';
import styled from '@emotion/styled';

const Holder =styled.div`
  margin: 30px;
  width: 300px;
  height: 200px;
  background: #353535;
  border-radius: 30px;
  position: relative ;

  &:hover{

    &>img{
      visibility: hidden;
    }

    &>p{
      visibility: visible;
    }
    
    &>a{
      visibility: visible;
    }
`;

const Titel = styled.p`
  text-align: center;
  color: white;
  font-weight: bold;
  margin: 10px;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  height: 140px;
`;

const Button1 = styled.a`
  position: absolute;
  right: 20px;
  bottom: 10px;
  z-index: 2;
  padding: 0 10px;
  font-size: 14px;

  color: black;
  background-color: silver;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  &:hover{
    font-size: 18px;
    right:10px;
    bottom:5px;
  }
  &:active{
    font-size: 16px;
    right:12px;
    bottom:7px;
  }
`;

const Data = styled.p`
  visibility: hidden;
  position: absolute;
  padding: 0 20px ;
  margin: 0;

  color: white;
  font-size: 12px;
  font-family: cursive;
  text-align: center;
`;

const Holdertwo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding:50px 0;
`;

class NamesList extends React.Component {

  render() {

    let namesLiList = [];

    for (let i in data) {
      let nameString = data[i].id;
      let link=data[i].link;
      let infodata=data[i].info;
      let imagelink=data[i].image;

      namesLiList.push(
        <Holder key={i}>
          <Titel>{nameString}</Titel>
          <Data>{infodata}</Data>
          <Button1 href={link} target="_blank">Click Here</Button1>
          <Image alt={imagelink} src={imagelink} />
        </Holder>
      );
    }

    return(
      <Holdertwo >
        {namesLiList}
      </Holdertwo>
    );
  }
}

export default NamesList;
