var map = L.map('map').setView([40.416775, -3.703790], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18,
  tileSize: 512,
  zoomOffset: -1,
}).addTo(map);


fetch('spain-comunidad-with-canary-islands.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    var espanaLayer = L.geoJSON(json, {
      style: {
        color: "#2f4f4f",
        weight: 1,
        fillOpacity: 0.3
      }
    }).addTo(map);


    map.fitBounds(espanaLayer.getBounds());
  });


L.control.fullscreen().addTo(map);


var avionIcon = L.icon({
iconUrl: 'https://cdn.icon-icons.com/icons2/2640/PNG/512/airplane_plane_travel_travels_icon_159298.png',
iconSize: [38, 38],
iconAnchor: [22, 38],
popupAnchor: [-3, -36]
});


var markers = [
{
name: "Andalucía",
position: [37.38264, -5.996295]
},
{
name: "Aragón",
position: [41.597628, -0.905662]
},
{
name: "Asturias",
position: [43.36162, -5.84939]
},
{
name: "Baleares",
position: [39.718408, 2.89676]
},
{
name: "Canarias",
position: [28.291563, -16.62913]
},
{
name: "Cantabria",
position: [43.182839, -3.987843]
},
{
name: "Castilla-La Mancha",
position: [39.495912, -3.272738]
},
{
name: "Castilla y León",
position: [41.834266, -4.647632]
},
{
name: "Cataluña",
position: [41.591158, 1.520862]
},
{
name: "Comunidad Valenciana",
position: [39.469907, -0.376288]
},
{
name: "Extremadura",
position: [39.164042, -6.166348]
},
{
name: "Galicia",
position: [42.713199, -7.81334]
},
{
name: "La Rioja",
position: [42.287073, -2.539603]
},
{
name: "Madrid",
position: [40.416775, -3.70379]
},
{
name: "Murcia",
position: [37.992239, -1.130654]
},
{
name: "Navarra",
position: [42.816875, -1.64323]
},
{
name: "País Vasco",
position: [43.034993, -2.457184]
}
];


markers.forEach(function(marker) {
L.marker(marker.position, {icon: avionIcon})
.bindPopup(marker.name)
.addTo(map);
});