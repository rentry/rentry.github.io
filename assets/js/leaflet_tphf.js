window.onload = function () {

    var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
    });
    
    
    var map = L.map('maptest', {
      scrollWheelZoom: false,
      center: [40.712046, -74.009515],
      zoom: 14
    });

    map.addLayer(layer);

    
    /* This is playing around with the forestglenroad icon, and it works! */
   
    /*custom map icons
    var midwayIcon = L.icon({
        iconUrl: 'http://www.brentryanjohnson.com/assets/images/midway.png',
        iconSize:     [30, 30], // size of the icon
    });
    
    var stillhouseIcon = L.icon({
    iconUrl: 'http://www.brentryanjohnson.com/assets/images/stillhouse.png',
    iconSize:     [30, 39], // size of the icon
    });
    
    var archbridgeIcon = L.icon({
    iconUrl: 'http://www.brentryanjohnson.com/assets/images/archbridge.png',
    iconSize:     [30, 35], // size of the icon
    });
    */
    
    
    L.marker([40.712046, -74.009515]).addTo(map)
    .bindPopup('<strong>Tolmage, Peskin, Harris, Falick</strong> <br> 20 Vesey Street <br> New York, NY 10007 <br> Phone: 212-964-1390 <br> Toll-Free: 877-298-3201')
    .openPopup();
    
};

    /* End of playing around */