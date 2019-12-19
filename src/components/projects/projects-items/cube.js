import React from 'react';
import styled from '@emotion/styled';

import data from '../myprojects';
// import pig from '../../../img/project-pics/pig.png';
// import gif from '../../../img/project-pics/gif.png';
// import dhelper from '../../../img/project-pics/dhelper.png';
// import hang from '../../../img/project-pics/hang.png';
// import hu from '../../../img/project-pics/hu.png';
// import rps from '../../../img/project-pics/rps.png';
// import school from '../../../img/project-pics/school.png';

class Myprojects extends React.Component{
  render() {
    for (let i in data) {
      console.log(data[i].name)
      

    }
    return(
      <div>
        <h1>names</h1>
      </div>
    )  
  }
}
export default Myprojects;