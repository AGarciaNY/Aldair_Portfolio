import React from 'react';
import NamesList from './NamesList';
import styled from'@emotion/styled';

const Holder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class InfoBox extends React.Component {

  render() {

    return(
      <Holder className="info-box">
        <NamesList namesList={this.props.namesList} />
      </Holder>
    );
  }
}

export default InfoBox;
