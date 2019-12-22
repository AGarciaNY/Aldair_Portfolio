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
   new Projects("piglaten",["Aldair"],"asdsa","https://agarciany.github.io/piglaten/","https://i.imgur.com/CScNoZw.pngs"),
   new Projects("Gif",["Aldair"],"testing","","https://i.imgur.com/lXpS3h7.png"),
   new Projects("DHelper",["Aldair"],"testing","","https://i.imgur.com/td8E1Rv.png"),
   new Projects("Hangman",["Aldair"],"testing","","https://i.imgur.com/yXijUj2.png"),
   new Projects("HeplingU",["Aldair"],"testing","","https://i.imgur.com/IOH1Cmh.jpg"),
   new Projects("Rock, Paper,Scissors",["Aldair"],"testing","","https://i.imgur.com/ilwUQQP.png"),
   new Projects("Gif",["Aldair"],"testing","","https://i.imgur.com/qQsS0WB.jpg"),


];
console.log(data);
export default data;
  