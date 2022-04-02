import React from 'react';
import data from './myartwork';
import styled from '@emotion/styled';


const Holder =styled.div`
  margin: 20px;
  width: 225px;
  height: 250px;
  background: #353535;
  border-radius: 30px;
  position: relative;
`;

const HolderOne= styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
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

const ButtonOne = styled.button`
  
  position: absolute;
  width:175px;
  bottom: 10px;
  left:25px;
  z-index: 2;
  padding: 5px 30px;

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
    left:20px;
  }
  &:active{
    font-size: 14px;
    left:23px;
    bottom:8px;
  }
`;

const Holdertwo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding:30px 0;
`;


const LImageH= styled.div(
  {
    position: "sticky",
    width: "900px",
    height:"100%",
    top:"100px",
    padding:"30px 0",
    backgroundColor: "gray",
    justifyContent: "center"
  },
  props=>({
    display:props.display,
    top:props.top
  })
);

const LImage = styled.img`
  height:450px;
  border-style:double;
  border-width:10px;
  border-color:black;
`;
const LIButton=styled.button`
height:20px;
position:absolute;
top:10px;
left:20px;
background-color:black;
color:white;
opacity:0.5;
`;

const Stiky=styled.div`
width:600px;
padding:10px;
display: flex;
justify-content: center;

`;

export default class ArtWork extends React.Component {
  constructor() {
    super();
    this.state = {
      artlink: 'hi',
      SON:'none',
      PO:'0px'
      
    }
  }

  pickAPic=(page)=>{
    this.setState({
      artlink: page,
      SON:'flex',
      PO:'100px'
    });
    console.log(HolderOne.offsetHeight)
    
  }
  hideimage=()=>{
    this.setState({
      SON:'none'
    });
  }

  render() {

    let namesLiList = [];
    for (let i in data) {
      let nameString = data[i].id;
      let imagelink=data[i].image;
      namesLiList.push(
        <Holder key={i}>
            <Titel>{nameString}</Titel>
            <Image alt={imagelink} src={imagelink}/>
            <p>{this.state.num}</p>
            <ButtonOne showthis onClick={()=> this.pickAPic(imagelink)}>Click here for better view</ButtonOne>
        </Holder>
      );
    }

    return(
      <HolderOne>
        <Holdertwo>
          {namesLiList}
        </Holdertwo>
        <LImageH display={this.state.SON} >
          <Stiky >
          <LIButton onClick={()=> this.hideimage()}>X</LIButton>
          <LImage src={this.state.artlink} alt={this.state.artlink}/>
          </Stiky>
        </LImageH>
      </HolderOne>
    );
  }
}