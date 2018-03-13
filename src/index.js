const buildMarker = require('./marker');

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1IjoidGNmbHV4IiwiYSI6ImNqZXEyYzh4dTV1d2Yyd2xudGlwNDl6aW0ifQ.8EIx_44IWX46EG30TNnc-A';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009151, 40.705086], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);