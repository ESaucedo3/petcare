export class Pet {
  id: string
  name: string
  age: number
  isVaccinated: boolean
  species: string
  status: string
  imgUrl: string
  likes: []
  createdAt: Date
  updatedAt: Date
  creatorId: string
  creator: Creator


  constructor(data: Pet) {
    this.id = data.id;
    this.name = data.name;
    this.age = data.age;
    this.isVaccinated = data.isVaccinated;
    this.species = data.species;
    this.status = data.status;
    this.imgUrl = data.imgUrl;
    this.likes = data.likes;
    this.createdAt = data.createdAt === undefined ? new Date() : new Date(data.createdAt);
    this.updatedAt = data.updatedAt === undefined ? new Date() : new Date(data.updatedAt);
    this.creatorId = data.creatorId;
    this.creator = new Creator(data.creator);
  }
}

class Creator {
  id: string
  name: string
  picture: string
  constructor(data: Creator) {
    this.id = data.id;
    this.name = data.name;
    this.picture = data.picture;
  }
}