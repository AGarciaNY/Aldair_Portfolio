import React,{Component} from 'react';
import styled from '@emotion/styled';

const Holder =styled.div`
`;

export default class Commentpage extends Component{
  constructor() {
    super();
    this.state = {
      name: 'np',
      gmail:'np',
      comment:'np',
    }
  }
  pushdata=()=>{
    this.props.databaseRefc.push(
      {
        "name":{
        comment:"best game",
        Gmail:"testing@gmail.com"
        }
      }
    )
  }
  render(){
    return(
      <Holder>
        <h1>hi there comments</h1>
        <input></input>
        <input></input>
        <input></input>
        
        <button onClick={this.pushdata}>testing</button>
      </Holder>
    )
  }
}