import React from 'react';
import data from './myartwork';
import styled from '@emotion/styled';

const Holder =styled.div`
  margin: 30px;
  width: 300px;
  height: 250px;
  background: #353535;
  border-radius: 30px;
  position: relative;
`;

const Titel = styled.p`
  color: white;
  text-align: center;
  font-weight: bold;
  margin: 10px 0;
`;

const Image = styled.img`
  display: block;
  margin:0 auto;
  height: 140px;
`;

const Button1 = styled.a`
  
  position: absolute;
  width:175px;
  bottom: 10px;
  left:52.5px;
  z-index: 2;
  padding: 5px 10px;

  color: black;
  background-color: silver;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;
  text-align: center;
  &:hover{
    font-size: 16px;
    width:185px;
    bottom:8px;
    left:50.5px;
  }
  &:active{
    font-size: 14px;
    left:52.5px;
    bottom:8px;
  }
`;

const Holdertwo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding:50px 0;
`;

export default class ArtWork extends React.Component {

  render() {

    let namesLiList = [];

    for (let i in data) {
      let nameString = data[i].id;
      let imagelink=data[i].image;

      namesLiList.push(
        <Holder key={i}>
            <Titel>{nameString}</Titel>
            <Image alt={imagelink} src={imagelink}/>
            <Button1 href={imagelink} target="_blank">Click here for better view</Button1>
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


