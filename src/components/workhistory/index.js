import React, { Component } from 'react';
import styled from '@emotion/styled';

import data from './workexp';

const Holder=styled.div`
  margin: 30px;
  width: 570px;
  height: 370px;
  background: #353535;
  border-radius: 30px;
  position: relative ;
  padding:5px 30px;
`;

const Data= styled.p`
  
`;
const Headther= styled.h1`
  margin: auto;
  color:white;
`;

const Holderone =styled.div`
  position: relative;
  color: white;
`;
const Holdertwo = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
padding: 50px 0;

`;

const WorkData =styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

const CompanyNmae=styled.h1`
  margin:10px 0;
  width:180px;
  
`;

const Location = styled.p`
  position: relative;
  top:10px;
  left:20px;
  
  width:180px;
`;
const Image=styled.img`
  height:100px;
`;

const ImageHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  top:10px;
  left:50px;
  width:160px;
  height: 100px;
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
      let timeofwork=data[i].time;

      namesLiList.push(
        <Holder key={i}>
          <WorkData>
            <CompanyNmae>{nameString}</CompanyNmae>
            <Location>located at {plocation}</Location>
            <ImageHolder>
            <Image alt={imagelink} src={imagelink} />
            </ImageHolder>
          </WorkData>
          <p>{timeofwork}</p>
          <Data>{infodata}</Data>
          <button href={link} target="_blank">Click Here</button>
          
        </Holder>
      );
    }

    return(
      <Holderone>
      <Headther>this are my past work expiendc</Headther>
      <Holdertwo>
        {namesLiList}
      </Holdertwo>
      </Holderone>
    );
  }
}