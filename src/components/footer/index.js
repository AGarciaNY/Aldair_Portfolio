import React, { Component } from 'react';
// images
// import mail from '../../img/icons/mail.png';
import github from '../../img/icons/github.png';
import linkin from '../../img/icons/linkin.png';

// style
import './style.scss'
export default function Footer() {
  return (
    <div className="footer-container">
      <img className='footer-icon' src={linkin} alt={linkin} />
      <h1 className='footer-title'>More Informtion</h1>

      <div className="footer-contact-holder">
        <h1 className='footer-title2'>Contact Informtion Here</h1>

        <div className='footer-dataholder'>
          <img className='footer-icon' src={github} alt={github} />
          <a className='footer-contact' href="https://github.com/AGarciaNY" target="blank" >AGarciaNY</a>
        </div>

        <div className='footer-dataholder'>
          <img className='footer-icon' src={linkin} alt={linkin} />
          <a className='footer-contact' href='https://www.linkedin.com/in/aldair-garcia-angon/' target="blank">Aldair Garcia</a>
        </div>
      </div>
    </div>
  )
}