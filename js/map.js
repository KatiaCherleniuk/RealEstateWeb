var map = L.map('map').setView([50.7463998, 25.3285528], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([50.7463998, 25.3285528]).addTo(map);
marker.bindPopup("<b>м. Луцьк</b><br>Проспект Волі 9").openPopup();