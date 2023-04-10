class Projects {

  constructor(id, createdDate, image, info, contribution, tools, githubLink, link, parents, timeFrame) {

    this.id = id;
    this.createdDate = createdDate;
    this.image = image;
    this.info = info;
    this.contribution = contribution;
    this.tools = tools;
    this.githubLink = githubLink;
    this.link = link;
    this.parents = parents;
    this.timeFrame = timeFrame

  }
}
// let nameString = data[i].id;
// let createdDate = data[i].createdDate;
// let imagelink = data[i].image;
// let infodata = data[i].info;
// let contribution = data[i].contribution;
// let toosUsed = data[i].tools;
// let link = data[i].link;
// let githubLink = data[i].githubLink;

let data = [
  // new Projects(
  //   "Rock, Paper,Scissors",
  //   new Date("October, 2016"),
  //   "https://i.imgur.com/ilwUQQP.png",
  //   "This is a fun game that many people also play around the world. This project mostly uses 'if' and 'if else'. I also added a small AI that you would go against to see who is better at rock paper scissors say YOU.",
  //   "",
  //   "HTML, CSS, JavaScript",
  //   "coming soon",
  //   "https://kingaldair.github.io/advanced_rockpaperscissors_startercode/",
  //   ["Aldair"],
  //   "October 2016"
  // ),

  new Projects(
    "Piglaten",
    new Date("October, 2017"),
    "https://i.imgur.com/CScNoZw.pngs",
    "This is probably one of the best projects I have worked one. This website allows you to translate any English word or sentence to a fun language called platen. I mostly used 'if' and 'else if' statements to translate the words.",
    "manipuated string",
    "HTML, CSS,and JavaScript",
    "https://github.com/AGarciaNY/piglaten",
    "https://agarciany.github.io/piglaten/",
    ["Aldair"],
    "October 2017"
  ),

  new Projects(
    "Hangman",
    new Date("December, 2017"),
    "https://i.imgur.com/yXijUj2.png",
    "This is a fun game that many people play around the world. In this project i used variable, functions, and 'if else' statements.",
    "Programed input when key is pressed",
    "HTML, CSS, and JavaScript",
    "https://github.com/AGarciaNY/Hangman",
    "https://agarciany.github.io/Hangman/",
    ["Aldair"],
    "December 2017"
  ),

  // new Projects(
  //   "HeplingU",
  //   new Date("Febuary, 2017"),
  //   "https://i.imgur.com/IOH1Cmh.jpg",
  //   "This was a group project that we worked on in a hackathon, a competition within ScriptEd, were coders are placed in groups and code a website based on a theme. This project is meant for people that can't do things on there own and need help. That where people could use this website to ask for help.",
  //   "Style the page",
  //   "HTML, CSS, Javascipt",
  //   "https://github.com/AGarciaNY/helping-you",
  //   "https://agarciany.github.io/helping-you/",
  //   ["Aldair", "Jason", "Jonson", "Gary"],
  // ),


  new Projects(
    "Gif",
    new Date("Febuary, 2019"),
    "https://i.imgur.com/lXpS3h7.png",
    "GipherThis is a cool project that my teammate and I worked on. This website helps you find giphs, such as cats flying in the sky or cool pokemon. Just try it.",
    "used gith api",
    "HTML, CSS, Javascript",
    "coming sooon",
    "https://github.com/AGarciaNY/gif",
    "https://agarciany.github.io/gif/",
    ["Aldair"],
    "Febuary 2019"
  ),

  // new Projects(
  //   "DHelper",
  //   new Date("December, 2018"),
  //   "https://i.imgur.com/td8E1Rv.png",
  //   "testing",
  //   "",
  //   "HTML,CSS, Javascript",
  //   "coming soon",
  //   "https://jalvarez2016.github.io/disorderhelper/",
  //   ["Jason", "Aldair"],
  // ),


  new Projects(
    "School page",
    new Date("December, 2019"),
    "https://i.imgur.com/qQsS0WB.jpg",
    "testing",
    "",
    "HTML, CSS, JavaScript, and Firebase",
    "https://jalvarez2016.github.io/Compture-science-class/",
    ["Aldair", "Jason"],
  ),

  // new Projects(
  //   "Team K",
  //   new Date("December, 2019"),
  //   "img here",
  //   "Testing",
  //   "",
  //   "HTML, CSS, JavaScript, and Firebase",
  //   "https://tanzema.github.io/studio1/",
  //   ['Aldair', "Tanzema"],
  // ),

  // new Projects(
  //   "MakeSpace",
  // new Date("December, 2019"),
  //   ["Aldair", "Grham", "Vanessa"],
  //   "",
  //   "https://makespace.com/features/",
  //   ""
  // ),

  new Projects(
    'Anti Covid-19',
    new Date("april, 2020"),
    'https://i.imgur.com/btPZrCb.png',
    'hakathon',
    "",
    "HTML,CSS, and JavaScript",
    "https://github.com/AGarciaNY/Hackathon2020",
    'https://ta-ag-ja-yep-anticovid.netlify.app/',
    ['Aldair', 'Jason', 'Ye P'],
    "April 2020"
  ),

  new Projects(
    "Will Of Fire",
    new Date('February 2, 2023'),
    "https://i.imgur.com/NwPuImv.png",
    "Solo",
    "crated a full stack aplication",
    "GodotScript, Express, Bcrypt, Knex, PostgreSQL, JavaScript, Git, Blender, Railway",
    "https://github.com/Will-Of-Fire-CP",
    "https://agarciany.itch.io/will-of-fire",
    "solo",
    "December February 2023"
  ),

  new Projects(
    "Bound to Work",
    new Date('January , 2023'),
    "https://img.itch.zone/aW1nLzExMDk3NjA2LnBuZw==/315x250%23c/TXfGhv.png",
    "A single-player game where the player is a cashier taking and serving orders from customers.",
    "Created simple AI functionality to move from an entrance to a cash register and gave them the ability to generate its own order and implemented mp3 sound to the game whenever a certent event occurred",
    "Godot (GDScript), itch.io",
    "https://github.com/AGarciaNY/impossible_five_game_jam2023",
    "https://evanlu1134.itch.io/bound-to-work",
    "solo",
    "January 2023"
  ),

  new Projects(
    "Give-A-Way",
    new Date('December , 2022'),
    "https://i.imgur.com/U3SHcu0.png",
    "A full-stack application where Businesses can donate to Churches  in NYC",
    "Connected the back-end with the front-end utilizing fetch calls, various routes using react-router and created components for each rout. I also Added animation to nav circle and many other components using CSS animation and transform properties  Implemented login, signup, donate, and navigation functionality",
    "React, react-router, CSS, SCSS, canvas-confetti, Node.js, Express, Bcrypt, React-Bootstrap, Knex, PostgreSQL, Git",
    "https://github.com/Give-A-Way",
    "https://give-a-way.netlify.app/",
    "Team",
    "November-December 2022"
  ),
  new Projects(
    "Wordly Palace",
    new Date('September 2, 2022'),
    "https://media.licdn.com/dms/image/D4E2DAQGN-2pfThvv0A/profile-treasury-image-shrink_800_800/0/1664644259603?e=1681671600&v=beta&t=zOgoUzBYuzmqdLkR4wq6n3ESq0tIJ5lLku0ezKjQWbo",
    "A place where people can learn interesting words people don’t use often.",
    "Created a login/sign-up page using Firebase(a hosting service) by connecting Firebase’s database to our application and storing the user's information in it by pushing it to Firebase. I also Designed a database that stores user information by using objects and adding properties that would store the user’s information and then adding it to my database by pushing it to Firebase",
    "Word of the Day (API), HTML, CSS, JavaScript, and Firebase",
    "https://github.com/Aneika11/WAA-wordly-palace",
    "https://aneika11.github.io/WAA-wordly-palace/",
    "Team",
    "September 2, 2022"
  ),
  new Projects(
    "Catch The Apples",
    new Date('September 1, 2022'),
    "https://media.licdn.com/dms/image/D4E2DAQErLsraER_OLA/profile-treasury-image-shrink_800_800/0/1664644271672?e=1681686000&v=beta&t=wCEQG5b9pf6XXaI_-TEnCphaZFupFRZ4SEdb0l3wGFM",
    "Catch The Apples is a single/multiplayer game where players have to catch apples with a barrel within two minutes. This game was created by Sumaira Khan and me. I worked as a developer on this amazing two-person team. We used HTML, CSS, Javascript(with the library Kaboom), and Firebase for the creation of Catch The Apples.",
    "Designed a database using Firebase to store the players' scores and the time remaining online, making the  game multiplayer ,and Mastered the use of Kaboom within the week impacting the efficiency of my team",
    "Figma, HTML, CSS, JavaScript(kaboom), Firebase",
    "https://github.com/khans8890/Catch_The_Apples",
    "https://khans8890.github.io/Catch_The_Apples/",
    "Team",
    "Auhust-September 2022"
  ),
  new Projects(
    "Heartless ",
    new Date('August , 2022'),
    "https://img.itch.zone/aW1nLzk4OTYzNTAucG5n/347x500/9WnR0w.png",
    "A single-player game where the player is a zombie inside a labyrinth with monsters it needs to terminate.",
    "Produced music with Soundtrack and recorded sound effects of my voice and different material Implemented mp3 files to animated sprites and added background music by making a function that plays the mp3 file and adding it to a specific spite frame",
    "Godot,(GDScript), Soundtrap, Aseprite, itch.io",
    "https://github.com/jalvarez2016/brackeysGameJam2022",
    "https://jalvarez.itch.io/heartless",
    "Team",
    "August 2022"
  ),
  new Projects(
    "Roll Baby ",
    new Date('July , 2022'),
    "https://img.itch.zone/aW1nLzk1MTc1NTcucG5n/347x500/hDEUIf.png",
    "A single-player game where the player is a baby that is sleeping and dreaming of an adventure. There is an evil dice that the baby must defeat.",
    "Created sprite sheet with frame-by-frame animation utilizing Aseprite Implemented sprite sheet in Godot to give characters and mobs animation by using Godot’s AnimatedSprite Node",
    "Godot, (GDScript), Aseprite, itch.io, BeepBox",
    "https://github.com/jalvarez2016/GMTK2022",
    "https://jalvarez.itch.io/roll-baby",
    "Team",
    "July 2022"
  ),
  new Projects(
    "Coming to America",
    new Date('July  , 2022'),
    "https://img.itch.zone/aW1nLzk1MTc1NTcucG5n/347x500/hDEUIf.png",
    "A place where people in the United States can learn why and how immigrants make the journey to the United States",
    "Designed and built Journey and Aftermath page in VS Code. I also added animation to text boxes as you scroll down the page with CSS animation property",
    "Figma, JavaScript, HTML, CSS, Bootstrap",
    "https://github.com/Aneika11/Project-week",
    "https://aneika11.github.io/Project-week/",
    "Team",
    "July 2022"
  ),
];
export default data;