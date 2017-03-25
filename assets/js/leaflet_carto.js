window.onload = function () {

    var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
    });
    
    
    var map = L.map('maptest', {
      scrollWheelZoom: false,
      center: [45.3547247, -122.607068],
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
    
    
    L.marker([45.3547247, -122.6011918]).addTo(map)
    .bindPopup('<a href="http://www.midwayhistoricpublichouse.com/"><img src="http://www.brentryanjohnson.com/assets/images/midway_l.png" align="left" style="margin: 10px 7px 0px 3px" alt="Midway logo" align="middle"><br>Midway Historic Public House </a><br>1003 7th St, Oregon City, OR 97045')

    
    L.marker([45.3576928, -122.6081629]).addTo(map)
    .bindPopup('<a href="http://www.archbridgetaphouse.com/"><img src="http://www.brentryanjohnson.com/assets/images/arch_bridge_l.png" align="left" style="margin: 7px 7px 0px 3px" alt="Midway logo"><br>Arch Bridge Taphouse</a><br>205 7th St, Oregon City, OR 97045')
    
    L.marker([45.3514772, -122.6141014]).addTo(map)
    .bindPopup('<div style="padding: 7px"><a href="http://www.highlandstillhouse.com/"><img src="http://www.brentryanjohnson.com/assets/images/stillhouse.png" align="left" style="margin: 0px 7px 0px 3px" alt="Midway logo"><br>Highland Stillhouse</a><br>201 S 2nd St, Oregon City, OR 97045</div>')
    
    
    /* End of playing around */
    
};

