//Edit your logic.js to create a popup marker for San Francisco Airport 
//on a night preview navigation map. When you click on the popup, it will display the city, state, and the name of the airport.

// Add console.log to check to see if our code is working.
console.log("working");

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);

//GeoJSON objects are added to the map through a GeoJSON layer, L.geoJSON(). 
//In "The GeoJSON Layer" section, it says to create the GeoJSON layer and add it to our map. We can use the following code to do that:

// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport).addTo(map);

// We create the tile layer that will be the background of our map. use night view

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
}); 


// Then we add our 'street map' tile layer to the map.
streets.addTo(map);

//to add data to a marker are to use the pointToLayer or onEachFeature callback functions. 
//With either of these functions, we can add data to a map from each GeoJSON object. 
//The major difference between the two functions is that the pointToLayer callback function 
//adds markers to a map, whereas the onEachFeature 
//callback function allows you to add styling and bind data to a popup marker.


// L.geoJson(data, {
//   pointToLayer: function(feature, latlng) {
//     return L.marker(latlng);
//    }
// });

// Grabbing our GeoJSON data.
L.geoJson(sanFranAirport, {
  // We turn each feature into a marker on the map.
  pointToLayer: function(feature, latlng) {
    console.log(feature);
    return L.marker(latlng)
    .bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3>"+ feature.properties.city +", "+feature.properties.country +"</h3>");


  }

}).addTo(map);