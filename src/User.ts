import faker from 'faker'

export class User {
  name: string;
  location: {
    lat:number;
    lng:number
  };

  //we have to initialize 

  constructor(){
    this.name = faker.name.firstName()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
}
