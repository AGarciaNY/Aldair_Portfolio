import React from 'react';
import './style.scss'

//images
import pig from '../../img/project-pics/pig.png'

// components
// import AboutMe from './home-items/about-me';
// import MyLerning from './home-items/my-learning'; 

// const Home = () => (
//       <HomeContent>
//         <Aboutme/>
//         <Mylerning/>
//       </HomeContent>
//     </Contaner> 
// );

// export default Home;



const Home = () => (
  <div className='home-container'>
    <div className='home-portfolio-pic'>
      <img src={pig} alt='' />
    </div>
    <h1 className='home-header-name'>Hi I am Aldair,</h1>
    <h1 className='home-header-name'> a Software Wngineer and I'm currently looking for employment</h1>
    <div className='home-content'>
      <div>
        <p>about me</p>
      </div>
    </div>
  </div>
);

export default Home;
