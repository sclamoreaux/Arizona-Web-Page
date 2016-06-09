//Store figure-map overlay in variable
var $mapOverlay = $('#map-overlay');
//Store script for GoogleMaps API in variable so it can be appended/removed along with overlay
var $script = $('<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCp_e45fObB_YwVdOHH_j8YiaDGf83DOFk&callback=initMap" async defer></script>');

//Store map info(window) content, with blank content to be passed value in showMap function
var mapInfo = { content: '' };
//Store text for info window for each map
var figure1Info = "<p>Begin hiking here at Linda Vista Trailhead to<br> enjoy views of majestic Pusch Ridge.</p>";
var figure2Info = "<p>Visit Lost Dutchman State Park to see<br> the striking Superstition Mountains.</p>";
var figure3Info = "<p>Check out the views of Sedona's red cliffs while<br> sipping a refreshing beverage here at Pink Java Cafe.</p>";

//Store map location/coordinates data for each map in VARIABLES
var figure1Map = {lat: 32.380549, lng: -110.961087};
var figure2Map = {lat: 33.463906, lng: -111.481523};
var figure3Map = {lat: 34.8688669, lng: -111.7609949};
//alt coordinates for figure3 34.8688056, -111.7613332

//Store map options object in variable, with blank 'center' to be passed a value in showMap function
var mapOptions = {
  center: '',
  zoom: 14,
  styles: [
    {
      "featureType": "landscape",
      "elementType" : "geometry",
      "stylers": [
        { "hue": "#ff0000" },
        { "color": "#EDCEB5" },
        { "lightness": 15 }
      ]
    },{
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        { "color": "#319666" },
        { "lightness": 40 },
        { "saturation": -30 }
      ]
    },{
      "elementType": "labels.text.fill",
      "stylers": [
        { "color": "#6E3309" }
      ]
    },{
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
        { "color": "#A27657" },
        { "lightness": 10 }
      ]
    },{
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        { "color": "#e6bb99" }
      ]
    },{
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
        { "lightness": -15 }
      ]
    },{
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        { "color": "#319666" },
        { "lightness": -30 }
      ]
    },{
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        { "hue": "#007fff" },
        { "lightness": 10 }
      ]
    },{
      "featureType": "administrative.neighborhood",
      "stylers": [
        { "lightness": 20 }
      ]
    }
  ]
};

//Create initMap callback function for GoogleMaps API to load map
function initMap() {
    var map;
    map = new google.maps.Map(document.getElementById('map-box'), mapOptions);
    map.setMapTypeId(google.maps.MapTypeId.TERRAIN);

    var marker = new google.maps.Marker({
      position: mapOptions.center,
      map: map,
      icon: "img/map-pin.svg",
      animation: google.maps.Animation.BOUNCE
    });
    // marker.addListener('click', toggleBounce);

  var infowindow = new google.maps.InfoWindow(mapInfo);

  marker.addListener('click', function() {
      infowindow.open(map, marker);
    });

    // function toggleBounce() {
    //   if (marker.getAnimation() !== null) {
    //     marker.setAnimation(null);
    //   } else {
    //     marker.setAnimation(google.maps.Animation.BOUNCE);
    //   }
    // }

}


//Declare function that will be used to show the map (corresponding to the figure)
function showMap(mapNum, infoNum) {
  mapOptions.center = mapNum;
  mapInfo.content = infoNum;
  $('body').append($script);

  $mapOverlay.show('fast');
  $(document.body).css('overflow', 'hidden');
}

//Declare function that will be used to close the figure-map
function closeMap() {
  $mapOverlay.hide('fast');
  $script.remove();
  mapOptions.center = ''; //Clear the map info as it closes
  $(document.body).css('overflow', 'auto');
}

//Create event listeners for each of the figures that will pop-up the corresponding map
$('#figure-1').click(function() {
  showMap(figure1Map, figure1Info);
});

$('#figure-2').click(function() {
  showMap(figure2Map, figure2Info);
});

$('#figure-3').click(function() {
  showMap(figure3Map, figure3Info);
});

//Create event listeners that will close the map
$('#map-close').click(closeMap);

$(document).keydown(function (event) {
  if (event.which === 27) {
    closeMap();
  }
});
