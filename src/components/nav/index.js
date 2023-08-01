import React, { Component } from 'react';
import './style.scss'

import { Link } from 'react-router-dom';
// const DropDown = styled.div`
//   position: relative;
//   width:100px;
//   left: 300px;
//   text-align: center;
//   top: -22px;
//   z-index: 100;

//   &:hover div{
//     display: block;
//   }
//   @media only screen and (max-width: 750px) {
//     left:240px;

//   }
// `;

// const DropButton = styled.button`
//   background-color: transparent;
//   padding: 0;
//   border: none;
//   color: white;
//   font-size: 16px;
//   z-index: 100;
//   &:hover{
//     font-size: 18px;
//   }
//   @media only screen and (max-width: 750px) {
//     width: 80px;
//     font-size: 14px;
//     &:hover{
//       font-size: 15px;
//     }
//   }
// `;

// const DropdownHolder=styled.div`
//   position: relative;
//   left: -20px;
//   display: none;
//   background: transparent;
//   min-width: 140px;
//   border-radius: 20px;
//   padding: 8px 0 0;
//   z-index: 100;
//   @media only screen and (max-width: 750px) {
//     left: -30px;
//   }
// `;

// const TextFont = styled.button`
//   width: 140px;
//   height: 30px;
//   display: block;
//   margin: 3px 0;

//   background: silver;
//   z-index: 30;
//   border-radius: 20px;
//   text-decoration: none;
//   color: white;
//   font-size: 15px;

//   &:hover{
//     position: relative;
//     margin: 5px 0;
//     left: -10px;
//     width: 160px;
//     height: 35px;
//     font-size: 18px;
//   }
// `;

export default class Nav extends Component {

  render() {

    return (
      <div className="nav-container">
        <div className='nav-name-div'>
          <h1 className="nav-name">Aldair's Portfolio ha ha</h1>
        </div >
        <div className="nav-link-holder">
          <div className='nav-link-div'>
            <Link className="nav-links" to="/">Home</Link>
          </div>
          <div className='nav-link-div'>
            <Link className="nav-links" to="/artwork">Art Work</Link>
          </div>
          <div className='nav-link-div'>
            <Link className="nav-links" to="/projects">Projects</Link>
          </div>
          {/* <DropDown>
            <DropButton>Dropdown</DropButton>
            <DropdownHolder>
              <TextFont>Link 1</TextFont>
              <TextFont>Link 2</TextFont>
              <TextFont>Link 3</TextFont>
            </DropdownHolder>
          </DropDown> */}
        </div>
      </div>
    );
  }

}