var map = L.map('map').setView([-34.6037, -58.3816], 13);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: 'OpenStreetMap'
}).addTo(map);

var elementos = L.featureGroup().addTo(map)

var iconCustom = L.icon({
    iconUrl: 'imagenes/image.png',
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAncor: [0, -35]
});

L.marker([-34.6067, -58.3816], { icon: iconCustom })
    .addTo(elementos)
    .bindPopup("Ubicacion inicial")
    .openPopup();


let puntos = [];
map.on('click', function(e) {
    puntos.push([e.latlng.lat, e.latlng.lng]);

    if (puntos.length === 5) {
        L.polyline(puntos, { color: 'blue' }).addTo(elementos)
    }
})

document.getElementById("btnLimpiar").addEventListener('click', function(e) {
    elementos.clearLayers();
})