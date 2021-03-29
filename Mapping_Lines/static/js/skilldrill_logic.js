// Add console.log to check to see if our code is working.
console.log("working");

// Edit your logic.js to create an airline route from SFO to John F. Kennedy International Airport (JFK)
//  with two stops, Austin-Bergstrom International Airport (AUS) and Toronto Pearson International Airport (YYZ). 
//  Make the route a blue dashed line, with a weight of 4 and opacity of 0.5 on the light map.
// San fransisco [37.6213, -122.3790]
//JFK [40.6413, 73.7781]

//stops at Austin-Bergstrom International Airport (AUS) 30.1975 , 97.6664
//and Toronto Pearson airport (YYZ) 43.6777, 79.6248

//let map = L.map('mapid').setView( [36.1733, -120.1794] ,7);
// Create the map object with center at the JFK .
let map = L.map('mapid').setView([37.6213, -122.3790], 7);
// Coordinates for each point to be used in the line.
  //now add stops bewteen LA and San Fransisco
// Coordinates for each point to be used in the polyline.
let line = [
    [37.6213, -122.3790],
    [30.1975 , -97.6664],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
  ];

// Create a polyline using the line coordinates and make the line black.
L.polyline(line, {
    color: "lightblue",
    weight: 4,
    dashArray:"10,10",
    opacity: .5
 }).addTo(map);

  // We create the tile layer that will be the background of our map.
  //Change the map style to "satellite-streets-v11."
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    }); 


// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);