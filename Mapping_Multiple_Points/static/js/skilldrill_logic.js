// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([40.7, -94.5], 4);

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [
      40.7, -94.5
    ],
    zoom: 4
  });



//For skill drill Edit the logic.js file to create an orange circle popup marker for each city,
//with a lineweight of 4, a radius where the population number is decreased by 200,000, 
// that's on a dark map. When you click on the circle, the popup should display the city, state,
// and the population formatted with a thousands separator.


//  Add marker to the 5 populest citiies in the usa.
// first define the cities marker location . move the array to a separate
//json files as a good prattice.

// Get data from cities.js
let cityData = cities;



// We create the tile layer that will be the background of our map. use dark map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
}); 

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
   // change marker to ciricle marker and use population as radius
   //L.marker(city.location) 
   L.circleMarker(city.location,{
       radius: (city.population - 200000) /100000// population is too larger for radius circle so divide by /100000
       ,lineweight: 4
        ,color: "orange"

   })
    //and also bind popup with each marker with city info
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});



// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
