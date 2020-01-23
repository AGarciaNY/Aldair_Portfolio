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
  new Projects("Piglaten",["Aldair"],
  "This is probably one of the best projects I have worked one. This website allows you to translate any English word or sentence to a fun language called platen. I mostly used 'if' and 'else if' statements to translate the words.",
  "https://agarciany.github.io/piglaten/","https://i.imgur.com/CScNoZw.pngs"),
  new Projects("Gif",["Aldair"],
  "GipherThis is a cool project that my teammate and I worked on. This website helps you find giphs, such as cats flying in the sky or cool pokemon. Just try it.",
  "https://agarciany.github.io/gif/","https://i.imgur.com/lXpS3h7.png"),
  new Projects("DHelper",["Jason","Aldair"],
  "testing",
  "https://jalvarez2016.github.io/disorderhelper/","https://i.imgur.com/td8E1Rv.png"),
  new Projects("Hangman",["Aldair"],
  "This is a fun game that many people play around the world. In this project i used variable, functions, and 'if else' statements.",
  "https://agarciany.github.io/Hangman/","https://i.imgur.com/yXijUj2.png"),
  new Projects("HeplingU",["Aldair","Jason","Jonson","Gary"],
  "This was a group project that we worked on in a hackathon, a competition within ScriptEd, were coders are placed in groups and code a website based on a theme. This project is meant for people that can't do things on there own and need help. That where people could use this website to ask for help.",
  "https://agarciany.github.io/helping-you/","https://i.imgur.com/IOH1Cmh.jpg"),
  new Projects("Rock, Paper,Scissors",["Aldair"],
  "This is a fun game that many people also play around the world. This project mostly uses 'if' and 'if else'. I also added a small AI that you would go against to see who is better at rock paper scissors say YOU.",
  "https://kingaldair.github.io/advanced_rockpaperscissors_startercode/","https://i.imgur.com/ilwUQQP.png"),
  new Projects("School page",["Aldair","Jason"],
  "testing",
  "https://jalvarez2016.github.io/Compture-science-class/","https://i.imgur.com/qQsS0WB.jpg"),
  new Projects("Team K",['Aldair',"Tanzema"],
  "Testing",
  "https://tanzema.github.io/studio1/"),
  new Projects("MakeSpace",["Aldair","Grham","Vanessa"],
  "",
  "https://makespace.com/features/","")

];
console.log(data);
export default data;