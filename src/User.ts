import faker from 'faker'
import { Mappable } from './CustomMap';

//adding the implement key word is basically like asking typescript to help us make sure that every User has the properties of the Mappable interface

export class User implements Mappable {
  name: string;
  location: {
    lat:number;
    lng:number
  };

  color: string = 'blue'

  constructor(){
    this.name = faker.name.firstName()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `User Name: ${this.name}`
  }
}
