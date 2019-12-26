class Projects {

  constructor(id, parents, info,image) {

    this.id = id;
    this.info=info;
    this.image=image;
    
    this.parents = [];
    for (const parent of parents) {
      this.parents.push({ id: parent });
    }

  }
}

let data = [
//   new Projects(id,parent,info,image)
];
console.log(data);
export default data;
  