// import { User } from './User'
// import { Company } from './Company'




new google.maps.Map(document.getElementById('map'), {
  //this is the options object 
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  }
})
//need to pass in mapDiv argument
//create an HTLM element to house the map and pass a reference to it as the first argument