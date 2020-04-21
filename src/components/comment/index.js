import React,{Component} from 'react';

export default class Commentpage extends Component{
  componentDidMount(){
    this.props.databaseRefc.on('value',snapshot =>{ 
      console.log(snapshot.val())
    })
  }
  render(){
    return(
      <div>
        <h1>hi there comments</h1>
      </div>
    )
  }
}