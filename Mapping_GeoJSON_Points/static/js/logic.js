
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
//let map = L.map('mapid').setView([37.5, -122.5], 10);

// Create the map object with center and zoom level.
//let map = L.map('mapid').setView([30, 30], 2);

//GeoJSON objects are added to the map through a GeoJSON layer, L.geoJSON(). 
//In "The GeoJSON Layer" section, it says to create the GeoJSON layer and add it to our map. We can use the following code to do that:

// Grabbing our GeoJSON data.
//L.geoJSON(sanFranAirport).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
}); 

// Then we add our 'street map' tile layer to the map.
//streets.addTo(map);

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [30, 30],
  zoom: 2,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

/*
Having the tileLayer() method before accessing large datasets ensures that the map gets 
loaded before the data is added to it.
*/

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/asyed9394/UofTSCS_DA_BC_2020_21_Mapping_Earthquakes/main/majorAirports.json";

/*
Next, we'll add the d3.json() method, which returns a promise with the then() method and the anonymous function().

Inside the d3.json() method we'll add the airportData variable.
Inside the anonymous function() we'll add the data parameter, which references the airportData.
We'll pass this data to the L.geoJSON() layer and then it'll be added to the map with addTo(map).
*/

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {
  // We turn each feature into a marker on the map.
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup("<h2>Airport Code: " + feature.properties.faa + "</h2> <hr> <h3>Airport Name: "+ feature.properties.name  +"</h3>"); }
  }).addTo(map);
});

// Create a base layer that holds both maps using the layers defined above.
let baseMaps = {
  Street: streets,
  Dark: dark
};


// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [30, 30],
  zoom: 2,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

//Having the tileLayer() method before accessing large datasets ensures that the map gets 
//loaded before the data is added to it.

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/asyed9394/UofTSCS_DA_BC_2020_21_Mapping_Earthquakes/main/majorAirports.json";

/*
Next, we'll add the d3.json() method, which returns a promise with the then() method and the anonymous function().

Inside the d3.json() method we'll add the airportData variable.
Inside the anonymous function() we'll add the data parameter, which references the airportData.
We'll pass this data to the L.geoJSON() layer and then it'll be added to the map with addTo(map).
*/

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {
  // We turn each feature into a marker on the map.
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup("<h2>Airport Code: " + feature.properties.faa + "</h2> <hr> <h3>Airport Name: "+ feature.properties.name  +"</h3>")
     }
  }).addTo(map);
  
});


  
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
// L.geoJson(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.city + "</h2>");
//   }

// }).addTo(map);

// // Grabbing our GeoJSON data and using onEachFeature 
// L.geoJson(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup(); }
//   }).addTo(map);
  
