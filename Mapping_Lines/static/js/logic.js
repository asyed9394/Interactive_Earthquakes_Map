// Add console.log to check to see if our code is working.
console.log("working");

// Adding lines to a map requires that the coordinates for the starting and ending points 
//be a one-dimensional array with two elements: latitude and longitude. 
//To illustrate how lines are mapped, let's map the airline route from Los Angeles to San Francisco. 
//Mapping airline routes will help us understand how tectonic plate data is added to a map.

// The starting point for our line will be the Los Angeles International Airport (LAX),
// with the coordinates [33.9416, -118.4085]. The ending point for our line will be the San Francisco International 
//Airport (SFO), with the coordinates [37.6213, -122.3790].

// When we create a line in Leaflet, the starting and ending points and all coordinates along the route need to be 
//in an array. We can assign the array to the line variable like this:


// Create the map object with a center and zoom level.
// change the coordinates for the center of the map to somewhere between LAX and SFO by adding [36.1733, -120.1794] in the setView() method.
//Change the zoom level in the setView() method to 7.

// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

  //let map = L.map('mapid').setView( [36.1733, -120.1794] ,7);
// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);
  // Coordinates for each point to be used in the line.
  //now add stops bewteen LA and San Fransisco
// Coordinates for each point to be used in the polyline.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];

// Create a polyline using the line coordinates and make the line black.
L.polyline(line, {
    color: "yellow"
 }).addTo(map);

  // We create the tile layer that will be the background of our map.
  //Change the map style to "satellite-streets-v11."
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    }); 


// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);