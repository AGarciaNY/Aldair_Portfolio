import React,{Component} from 'react';
//import styled from '@emotion/styled';

import MyArt from './artbox/boxes'

export default class ArtWork extends Component{

    render(){
      return(
        <div>
            <h1>hi there this is my art</h1>
            <MyArt/>
        </div>
      );
    }
}
