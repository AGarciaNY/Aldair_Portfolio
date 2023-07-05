import data from './myprojects';

//style
import './style.scss'

const projectBox = (i, createdDate, nameString, imagelink, timeFrame, infodata, contribution, toosUsed, githubLink, link) => {
  return (
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
  )
}
export default function Projects() {

  let namesLiList = [];
  // let topProjects = [];
  const projects_by_year = {}

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

    // console.log(createdDate.getFullYear())
    if (projects_by_year[createdDate.getFullYear()]) {
      projects_by_year[createdDate.getFullYear()].push(projectBox(i, createdDate, nameString, imagelink, timeFrame, infodata, contribution, toosUsed, githubLink, link))
    } else {
      projects_by_year[createdDate.getFullYear()] = [projectBox(i, createdDate, nameString, imagelink, timeFrame, infodata, contribution, toosUsed, githubLink, link)]
    }
    // namesLiList.push(projectBox(i, createdDate, nameString, imagelink, timeFrame, infodata, contribution, toosUsed, githubLink, link));

  }


  const sortData = () => {
    let allProjectBody = []
    for (let key in projects_by_year) {
      allProjectBody.push(
        <div className='year-line' key={key}>
          <h1>{key}</h1>
          <div>
            {projects_by_year[key]}
          </div>
        </div>
      )
    }
    return allProjectBody
  }

  return (
    <div>
      {/* <div className="pprojects-top">
        {topProjects}
      </div> */}
      <div className='project-holdertwo' >
        {sortData().reverse()}
        {/* {namesLiList} */}
        {/* {namesLiList.sort((a,b)=> b.props.createddate - a.props.createddate)} */}
      </div>
    </div>
  );
}