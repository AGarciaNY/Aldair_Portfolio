class Projects {

  constructor(id, parents,image) {

    this.id = id;
    this.image=image;
    
    this.parents = [];
    for (const parent of parents) {
      this.parents.push({ id: parent });
    }

  }
}

let data = [
  new Projects("Dog","Aldair","https://i.imgur.com/bd8jSJw.jpg"),
  new Projects("Bird","Aldair","https://i.imgur.com/zIsrmLI.jpg"),
  new Projects("elephant","Adlair","https://i.imgur.com/GBNXMbf.jpg"),
  new Projects("Rino","Aldair","https://i.imgur.com/dass7ZB.jpg"),
  new Projects("baseball catcher","Aldair","https://i.imgur.com/C69zpJs.jpg")
];
export default data;
  