// import { User } from "./User"
// import { Company } from "./Company"

//instructors to every other class to how they can be an argument to add marker. how they can qualify to being mappable /added to the map
//the below interface is saying that any other class that has a location with a lat and lng that are numbers, they can be added to the map 
//this means that if we say add another class for a park or hospital and those classes have a location, lat lng, then they are mappable. 

export interface Mappable {
  location: {
    lat:number;
    lng:number
  }
  markerContent(): string;
  color: string;
  
}



//create a cusotm map class to limit functionality
//so that other methods attached to the map class from google maps 
//can't be accessed 
export class CustomMap {
  private googleMap: google.maps.Map 
    //we are saying that googleMap is a property that is an instace of the Map class 
    //using the modifier private says we can't access this property outside of this class
    //when using an instance of this class, googleMap property is not available 
    //this decreases the complexity and makes it more clear for other engineers 
    
  constructor(divId: string){
    this.googleMap = new google.maps.Map(document.getElementById('map'), {
      //this is the options object 
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      }
    })
  }

  // addUserMarker(user: User): void{ 
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: user.location.lat,
  //       lng: user.location.lng
  //     }
  //   })

  // }


  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap, 
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng
  //     }
  //   })

  // }


//combing addUserMarker and addCompanyMarker to one method
//this is a solution but its not the best one because its not super scalable
//best solution is make an interface that define how other classes can be accepted as an argument to addMarker
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }


    })

      marker.addListener('click', ()=> {
        const infoWindow = new google.maps.InfoWindow({
          content: mappable.markerContent()

        })
        infoWindow.open(this.googleMap, marker)
        //once the marker is clicked, open the infowindow
      })
  }



  
}
  