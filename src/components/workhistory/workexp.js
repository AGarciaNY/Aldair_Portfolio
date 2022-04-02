import github from '../../img/icons/github.png';

class Projects {

  constructor(id, location,time,acupation, info,link,image) {

    this.id = id;
    this.location=location;
    this.time=time;
    this.acupation=acupation;
    this.info=info;
    this.link=link;
    this.image=image;
    
    // this.parents = [];
    // for (const parent of parents) {
    //   this.parents.push({ id: parent });
    // }

  }
}

let data = [
  new Projects(
  "MakeSpace",
  "manhaton",
  "jun - agust 2018",
  " With the  help of code nation I was able to worked at make space as an intern softwar developer. I worked with a partner who would"
  +'help me when i would get stuck with somthing. in ritern I would help them back',
  "make space is a company that sell storage",
  "https://agarciany.github.io/piglaten/",
  github),
  new Projects(
    "foodbazar",
    `34'23'23"23"23`,
    "june 2019  - feduary 2022",
    'produce clerk',
    'foodbazar is a super market. I worked as a produce clerk organizing frouts and vestables. I would lift boxes waying from 1 pound' 
    +' up to 50 pounds. I started of working with the potatos. They wayed 50 pounds per box'
    
  ),
  new Projects(
    "foodbazar",
    `34'23'23"23"23`,
    'produce clerk',
    'foodbazar is a super market. I worked as a produce clerk organizing frouts and vestables. I would lift boxes waying from 1 pound' 
    +' up to 50 pounds. I started of working with the potatos. They wayed 50 pounds per box'
    
  )
]
export default data;
//make space
//food bazor
//
//
//