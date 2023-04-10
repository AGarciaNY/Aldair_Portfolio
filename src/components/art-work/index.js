import React, { useState } from 'react';
import data from './myartwork';
// style
import './style.scss'


export default function ArtWork() {
  const [artlink, setArtLink] = useState("hi")
  const [SON, setSon] = useState("none")

  let listOfArtWork = [];
  for (let i in data) {
    let nameString = data[i].id;
    let imagelink = data[i].image;
    listOfArtWork.push(
      <div className='art-holder' key={i}>
        <p className='art-titel'>{nameString}</p >
        <img className='art-image' alt={imagelink} src={imagelink} />
        <button className='art-button-one' showthis="true" onClick={() => (setArtLink(imagelink) , setSon('flex'))}>Enlarge</button>
      </div >
    );
  }

  return (
    <div className='art-holder-one'>
      <div className='art-holder-two'>
        {listOfArtWork}
      </div>
      <div className='art-l-imageh' style={{ display: SON }}>
        <div className='art-stiky'>
          <button className="art-l-i-button" onClick={() => setSon('none')}>X</button>
          <div className="art-l-image" style={{ backgroundImage: `url(${artlink})` }} />
        </div>
      </div>
    </div>
  );

}


