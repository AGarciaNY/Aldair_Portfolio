import pig from "../../img/project-pics/pig.png";
import Gif from "../../img/project-pics/gif.png";
import DHelper from "../../img/project-pics/dhelper.png";
import Hangman from "../../img/project-pics/hang.png";
import HeplingU from "../../img/project-pics/hu.png";
import rps from "../../img/project-pics/rps.png";
import school from "../../img/project-pics/school.png";

class Projects {

  constructor(id, parents, info,link,image) {

    this.id = id;
    this.info=info;
    this.link=link;
    this.image=image;
    
    this.parents = [];
    for (const parent of parents) {
      this.parents.push({ id: parent });
    }

  }
}

let data = [
  new Projects("Piglaten",
  ["Aldair"],
  "This is probably one of the best projects I have worked one. This website allows you to translate any English word or sentence to a fun language called platen. I mostly used 'if' and 'else if' statements to translate the words.",
  "https://agarciany.github.io/piglaten/",
  pig),
  new Projects("Gif",
  ["Aldair"],
  "GipherThis is a cool project that my teammate and I worked on. This website helps you find giphs, such as cats flying in the sky or cool pokemon. Just try it.",
  "https://agarciany.github.io/gif/",
  Gif),

  new Projects("DHelper",["Jason","Aldair"],
  "testing",
  "https://jalvarez2016.github.io/disorderhelper/",
  DHelper),

  new Projects("Hangman",["Aldair"],
  "This is a fun game that many people play around the world. In this project i used variable, functions, and 'if else' statements.",
  "https://agarciany.github.io/Hangman/",
  Hangman),

  new Projects("HeplingU",
  ["Aldair","Jason","Jonson","Gary"],
  "This was a group project that we worked on in a hackathon, a competition within ScriptEd, were coders are placed in groups and code a website based on a theme. This project is meant for people that can't do things on there own and need help. That where people could use this website to ask for help.",
  "https://agarciany.github.io/helping-you/",
  HeplingU),

  new Projects("Rock, Paper,Scissors",
  ["Aldair"],
  "This is a fun game that many people also play around the world. This project mostly uses 'if' and 'if else'. I also added a small AI that you would go against to see who is better at rock paper scissors say YOU.",
  "https://kingaldair.github.io/advanced_rockpaperscissors_startercode/",
  rps),

  new Projects("School page",["Aldair","Jason"],
  "testing",
  "https://jalvarez2016.github.io/Compture-science-class/",
  school),

  new Projects("Team K",['Aldair',"Tanzema"],
  "Testing",
  "https://tanzema.github.io/studio1/"),

  new Projects("MakeSpace",
  ["Aldair","Grham","Vanessa"],
  "",
  "https://makespace.com/features/"
  ),

  new Projects('Anti Covid-19',
  ['Aldair','Jason','Ye P'],
  'hakathon',
  'https://ta-ag-ja-yep-anticovid.netlify.app/',
  'https://i.imgur.com/btPZrCb.png'
  )

];
export default data;