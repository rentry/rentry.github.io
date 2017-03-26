    window.onload = function () {
        var map = L.map('map').setView([44.568521,-123.279701], 14);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

    L.marker([44.568521,-123.279701]).addTo(map)
    .bindPopup('I received my GIS certificate <br> from Oregon State University.')
    .openPopup();

    };