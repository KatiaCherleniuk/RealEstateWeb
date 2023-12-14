var map = L.map('map').setView([50.7463998, 25.3285528], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
map.scrollWheelZoom.disable();

var markerIcon = L.icon({
    iconUrl: '/RealEstateWeb/img/marker.png',

    iconSize:     [30, 50], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


var marker = L.marker([50.7463998, 25.3285528],  {icon: markerIcon}).addTo(map);
marker.bindPopup("<b>м. Луцьк</b><br>Проспект Волі 9").openPopup();