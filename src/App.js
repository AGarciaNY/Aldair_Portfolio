import React,{Component} from 'react'
import Nav from './components/nav';
import Footer from './components/footer';
import Home from './components/home';
import ArtWork from './components/art-work';
import Projects from './components/projects';

import './App.css'
export default class App extends Component{
  
  constructor() {
    super();
    this.state = {
      pickapage: 'test',
    }
  }

  pickAPage = (page) => {
    this.setState({
      pickapage: page
    });
  }  

  render(){

    if(this.state.pickapage === 'test'){
      return (
      <div id="body">
        <Nav changepage={(page)=> this.pickAPage(page)}/>
        <Home />
        <Footer />
      </div>
      );
    }

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
  }
}