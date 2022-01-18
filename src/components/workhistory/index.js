import React, { Component } from 'react';
import styled from '@emotion/styled';

import data from './workexp';

const Holder=styled.div`
margin: 30px;
width: 400px;
height: 300px;
background: #353535;
border-radius: 30px;
position: relative ;
padding:10px;
`;
const Headther= styled.h1`
  margin: auto;
  color:white;
`;

const Holderone =styled.div`
  diplay:flex;
  color:white;
`;
const Holdertwo = styled.div`
  
  justify-content: center;
  padding:50px 0;
`;


export default class MypastWork extends Component{

  render() {
    let namesLiList = [];

    for (let i in data) {
      let nameString = data[i].id;
      let link=data[i].link;
      let infodata=data[i].info;
      let imagelink=data[i].image;
      let plocation=data[i].location;

      namesLiList.push(
        <Holder key={i}>
          <h1>{nameString}</h1>
          <p>located at {plocation}</p>
          <p>{infodata}</p>
          <button href={link} target="_blank">Click Here</button>
          <img alt={imagelink} src={imagelink} />
        </Holder>
      );
    }

    return(
      <Holderone>
      <Headther>this are my past work expiendc</Headther>
      <Holdertwo>
        <div>{namesLiList}</div>
      </Holdertwo>
      </Holderone>
    );
  }
}