import React from 'react';
import styled from '@emotion/styled';
import mail from '../../img/icons/mail.png';
import github from '../../img/icons/github.png';
import linkin from '../../img/icons/linkin.png';

const Container = styled.div`
  width:100%;
  background: linear-gradient(transparent,#484848,black,black);
  color:white;
`;

const HeadingCon = styled.div`
  text-align: center;
`;

const Header = styled.h1`
  font-size: 24px;
  margin:0;
  padding:0;
`;

const ContactInformationContainer = styled.li`
  height:40px;
  display: flex;
  flex-direction: row;
  position:relative;
  colore:white;
`;

const Contact = styled.a`
  font-size: 18px;
  margin: 0;
  color:white;
  text-decoration: none;
`;

const ContactHolder = styled.ul`
  list-style-type: none;
`;

const Icon = styled.img`
  height:24px;
  position:absolute;
  left:-30px;
  top:0;
`;

const Footer=()=>(
    <Container>
      <HeadingCon>
        <Header>More Informtion</Header>
      </HeadingCon>
      <div>
          <Header>Contact Informtion Here</Header>
          <ContactHolder>
            <ContactInformationContainer>
              <Icon src={mail} alt={mail}/>
              <Contact target="_blank">Aldairgarcia360@gmail.com</Contact>
            </ContactInformationContainer>
            <ContactInformationContainer>
              <Icon src={github} alt={github}/>
              <Contact href="https://github.com/AGarciaNY" target="_blank" >AGarciaNY</Contact>
            </ContactInformationContainer>
            <ContactInformationContainer>
              <Icon src={linkin} alt={github}/>
              <Contact href='https://www.linkedin.com/in/aldair-g-b20525157/' target="_blank">Aldair Garcia</Contact>
            </ContactInformationContainer>
          </ContactHolder>
      </div>
    </Container>
);

export default Footer;
