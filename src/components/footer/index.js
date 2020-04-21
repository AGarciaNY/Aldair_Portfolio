import React from 'react';
import styled from '@emotion/styled';
import mail from '../../img/icons/mail.png';
import github from '../../img/icons/github.png';
import linkin from '../../img/icons/linkin.png';

const Container = styled.div`
  background: linear-gradient(transparent,#484848,black,black);
  color: white;
  margin: 0;
  padding: 0 0 20px;
  position: relative;
  bottom:-5px;
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin: 0;
  padding: 30px 0 0 0;
`;

const ContactHolder = styled.div`
  width: 400px;
`;

const Title2 = styled.h1`
  font-size: 20px;
  text-align: center;
  margin: 0;
  padding: 10px 0;
`;

const Dataholder = styled.div`
  height: 40px;
  width: 300px;
  position: relative;
  left: 75px;
  colore: white;
`;

const Icon = styled.img`
  height: 24px;
  position: absolute;
  left: -30px;
  top: 0;
`;

const Contact = styled.a`
  font-size: 18px;
  margin: 0;
  color: white;
  text-decoration: none;
`;



const Footer=()=>(
    <Container>
      <Title>More Informtion</Title>
        <ContactHolder>
          <Title2>Contact Informtion Here</Title2>
          <Dataholder>
            <Icon src={mail} alt={mail}/>
            <Contact target="_blank">Aldairgarcia360@gmail.com</Contact>
          </Dataholder>
          <Dataholder>
            <Icon src={github} alt={github}/>
            <Contact href="https://github.com/AGarciaNY" target="_blank" >AGarciaNY</Contact>
          </Dataholder>
          <Dataholder>
            <Icon src={linkin} alt={github}/>
            <Contact href='https://www.linkedin.com/in/aldair-g-b20525157/' target="_blank">Aldair Garcia</Contact>
          </Dataholder>
        </ContactHolder>
    </Container>
);

export default Footer;
