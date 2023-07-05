import React from 'react';
import './style.scss'

//images
import pig from '../../img/icons/AG.jpeg'

// data
import data from './data';

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



const Home = () => {
  const skills = []

  for(let skill in data.skills){
    console.log(data.skills[skill])
  }
  return (
    <div className='home-container'>
      <div className='home-portfolio-pic'>
        <div>
            {/* <img src={pig} alt='' /> */}
        </div>
      </div>
      <h1 className='home-header-name'>Hi I am Aldair,</h1>
      <h1 className='home-header-name'> a Software Wngineer and I'm currently looking for employment</h1>

      <div className='home-content'>
        <div>
          <h1 >skills:</h1>
          <div className="skills-holder">
            <p>HTML</p>
            <p>CSS</p>
            <p>SASS</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>Emotion</p>
            <p>SQL</p>
            <p>GDScript</p>
            <p>git</p>
            <p>Java</p>
            <p>python</p>
            <p>nvm</p>
            <p>node</p>
            <p>Express</p>
          </div>
        </div>

        <div>
          <h1>Tools used:</h1>
          <div className="skills-holder">
            <p>Firebase</p>
            <p>Railway</p>
            <p>Figma</p>
            <p>GitHub</p>
            <p>Godot</p>
            <p>blender</p>
            <p>VSCode</p>
          </div>
        </div>
        <div>
          <h1>hobbies:</h1>
          <div className="skills-holder">
            <p>Drowing</p>
            <p>skateboarding</p>
            <p>making games</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;
