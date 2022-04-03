import React,{Component} from 'react';
//import firebase from 'firebase';

import Nav from './components/nav';
import Footer from './components/footer';
import Home from './components/home';
import ArtWork from './components/art-work/index';
import Projects from './components/projects';
import Commentpage from './components/comment/index';
import MypastWork from'./components/workhistory/index';
import './App.css'

export default class App extends Component{
  constructor() {
    super();
    this.state = {
      pickapage: 'artwork',
    }
  }

  pickAPage = (page) => {
    this.setState({
      pickapage: page
    });
  }  

  render(){
  // var firebaseConfig = {
  //   apiKey: "AIzaSyDFpyy578XqiTBK2z68gC_KVfh1iGlAf48",
  //   authDomain: "comments-41a28.firebaseapp.com",
  //   databaseURL: "https://comments-41a28.firebaseio.com",
  //   projectId: "comments-41a28",
  //   storageBucket: "comments-41a28.appspot.com",
  //   messagingSenderId: "7885892044",
  //   appId: "1:7885892044:web:003615c87f24ee6e2ed569",
  //   measurementId: "G-GRE2SPSERQ"
  // };
  // if (!firebase.apps.length) {
  //   firebase.initializeApp(firebaseConfig);
  // }
  // // firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  // var database = firebase.database();
  // var databaseRefcomment = database.ref("/comments");

    if(this.state.pickapage === 'home'){
      return (
        <div id="body">
          <Nav changepage={(page)=> this.pickAPage(page)}/>
          <Home />
          <Footer />
        </div>
      )
    }

    if(this.state.pickapage === 'artwork'){
      return (
        <div id="body">
          <Nav changepage={(page)=> this.pickAPage(page)}/>
          <ArtWork />
          <Footer />
        </div>
      )
    }

    if(this.state.pickapage === 'projects'){
      return (
        <div id="body">
          <Nav changepage={(page)=> this.pickAPage(page)}/>
          <Projects />
          <Footer />
        </div>
      )
    }
    if(this.state.pickapage === 'comments'){
      return (
        <div id="body">
          <Nav changepage={(page)=> this.pickAPage(page)}/>
          <Commentpage 
            //databaseRefc={databaseRefcomment}
            />
          <Footer />
        </div>
      )
    }
    if(this.state.pickapage === 'MypastWork'){
      return (
        <div id="body">
          <Nav changepage={(page)=> this.pickAPage(page)}/>
          <MypastWork 
            />
          <Footer />
        </div>
      )
    }
  }
}