import React from 'react';
import InfoBox from './projects-items/InfoBox';
import data from './projects-items/myprojects';

const familyNamesList = data;

class App extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      info: null,
    }
  }

  render() {
    
    return (
      <div className='root'>
        <InfoBox
            namesList={familyNamesList}
            />
      </div>
    );
  }
}

export default App;
