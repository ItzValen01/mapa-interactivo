var map = L.map('map').setView([-34.6037, -58.3816], 13);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: 'OpenStreetMap'
}).addTo(map);

L.marker([-34.6067, -58.3816])
    .addTo(map)
    .bindPopup("Ubicacion inicial")
    .openPopup();


let puntos = [];
map.on('click', function(e) {
    puntos.push([e.latlng.lat, e.latlng.lng]);

    if (puntos.length === 2) {
        L.polyline(puntos, { color: 'blue' }).addTo(map)
    }
})