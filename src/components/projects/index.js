import data from './myprojects';

//style
import './style.scss'

export default function Projects() {

  let namesLiList = [];

  for (let i in data) {
    let nameString = data[i].id;
    let link = data[i].link;
    let infodata = data[i].info;
    let imagelink = data[i].image;

    namesLiList.push(
      <div className='project-holder' key={i}>
        <p className="project-titel">{nameString}</p>
        <p className='project-tap'>Tap me</p>
        <p className='project-data'>{infodata}</p>
        <a className='project-button1' href={link} target="blank">Click Here</a>
        <img className='project-image' alt={imagelink} src={imagelink} />
      </div>
    );
  }

  return (
    <div className='project-holdertwo' >
      {namesLiList}
    </div>
  );
}