import data from './myprojects';

//style
import './style.scss'

export default function Projects() {

  let namesLiList = [];

  for (let i in data) {
    let nameString = data[i].id;
    let createdDate = data[i].createdDate;
    let imagelink = data[i].image;
    let infodata = data[i].info;
    let contribution = data[i].contribution;
    let toosUsed = data[i].tools;
    let link = data[i].link;
    let githubLink = data[i].githubLink; 
    let timeFrame = data[i].timeFrame;

    namesLiList.push(
      <div className='project-holder' key={i} createddate={createdDate.getTime()}>
        <h1 className="project-titel">{nameString}</h1>
        <img className='project-image' alt={imagelink} src={imagelink} />
        <p className='project-date-created'>{timeFrame}</p>
        <p className='project-data'><b className='project-main-title'>About Projects:</b> {infodata}</p>
        <p className='project-data'><b className='project-main-title'>contribution:</b> {contribution}</p>
        <p className='project-data'><b className='project-main-title'>tools used:</b> {toosUsed}</p>
        <div className='project-links'>
          <div>
            <a className='project-button1' href={githubLink} target="blank">GitHub</a>
          </div>
          <div>
            <a className='project-button1' href={link} target="blank">Visit</a>
          </div>
        </div>
      </div>
    );
    // console.log(namesLiList[namesLiList.length-1].props.createddate)
  }
  

  return (
    <div className='project-holdertwo' >
      {/* {namesLiList} */}
      {namesLiList.sort((a,b)=> b.props.createddate - a.props.createddate)}
    </div>
  );
}