import React from 'react';
import data from './myprojects';
import styled from '@emotion/styled';

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  height: 140px;
`;

const Titel = styled.p`
  sposition: relitive;
  color: white;
  text-align: center;
  font-weight: bold;
  margin: 0;
  `;
const Information = styled.div`
  visibility: hidden;
  position: relitive;
  top: 0;
`;

const Button1 = styled.a`
  position: relitive;
  right: 20px;
  bottom: 2px;
  background-color: silver;
  border-radius: 20px;
  visibility: hidden;
  cursor: pointer;
`;

const Holder =styled.div`
  margin: 30px;
  width: 300px;
  height: 200px;
  background: #353535;
  border-radius: 30px;
  position: relitive;
  &:hover{
    &>img{
      visibility: hidden;
    }
    &>div{
      visibility: visible;
    }
    
    &>button{
      visibility: visible;
    }
`;
const TitleHolder = styled.div`
  position: relitive;
  top: -25px;
  width: 300px;
`;
const Data = styled.p`
position: absolute;
  color: white;
  font-size: 12px;
  text-indent: 50px;
  padding: 0 10px 0;
  width: 280px;
`;
const Holdertwo = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;
class NamesList extends React.Component {
  render() {
    let namesLiList = [];
    for (let i in data) {
      let nameString = data[i].id;
      let link=data[i].link;
      let infodata=data[i].info;
      let imagelink=data[i].image;
      console.log(imagelink);
      namesLiList.push(
        <Holder key={i}>
          <TitleHolder> 
            <Titel>{nameString}</Titel>
          </TitleHolder>
          <Button1 href={link}></Button1>
          <Information>
            <Data>{infodata}</Data>
          </Information>
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