//Create a mapOptions object constructor to store all the common mapstyles with the center coordinates as variable
function MapOptions(center) {
    this.center = center;
    this.zoom = 14;
    this.styles = [
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
    ];

}

//Construct new instances of MapOptions to contain each of the coordinates for the maps
var map1_options = new MapOptions( {lat: 32.380549, lng: -110.961087} );
var map2_options = new MapOptions( {lat: 33.463906, lng: -111.481523} );
var map3_options = new MapOptions( {lat: 34.8688669, lng: -111.7609949} );

//Create MarkerOptions constructor to store common marker properties for all maps to use, and the position/map as variables
function MarkerOptions(position, map) {
  this.position = position;
  this.map = map;
  this.icon = "img/map-pin.png";
  this.animation = google.maps.Animation.BOUNCE;
}

//Store html text content (as object) for each map info window in a variable
var figure1Info = { content: '<p style="width: 175px">Begin hiking here at Linda Vista Trailhead to enjoy views of majestic Pusch Ridge.</p>' };
var figure2Info = { content: '<p style="width: 175px">Visit Lost Dutchman State Park to see the striking Superstition Mountains.</p>' };
var figure3Info = { content: '<p style="width: 175px">Check out the views of Sedona\'s red cliffs while sipping a refreshing beverage here at Pink Java Cafe.</p>' };

//Variable that will be used to hold content of info window when a map is shown.
var mapInfo;

//Store script for GoogleMaps API in variable so it can be appended/removed along with overlay
var $script = $('<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCp_e45fObB_YwVdOHH_j8YiaDGf83DOFk&callback=initMap" async defer></script>');

//Create main initMap function to generate the maps
function initMap() {
    var map1;
    map1 = new google.maps.Map(document.getElementById('map1-box'), map1_options);
    map1.setMapTypeId(google.maps.MapTypeId.TERRAIN);

    var map2;
    map2 = new google.maps.Map(document.getElementById('map2-box'), map2_options);
    map2.setMapTypeId(google.maps.MapTypeId.TERRAIN);

    var map3;
    map3 = new google.maps.Map(document.getElementById('map3-box'), map3_options);
    map3.setMapTypeId(google.maps.MapTypeId.TERRAIN);

      //Construct new instances of MarkerOptions for each map
      var map1_marker = new MarkerOptions(map1_options.center, map1);
      var map2_marker = new MarkerOptions(map2_options.center, map2);
      var map3_marker = new MarkerOptions(map3_options.center, map3);

    var marker1 = new google.maps.Marker(map1_marker);

    var marker2 = new google.maps.Marker(map2_marker);

    var marker3 = new google.maps.Marker(map3_marker);

    var infowindow = new google.maps.InfoWindow(mapInfo);

    marker1.addListener('click', function() {
      infowindow.open(map1, marker1);
    });

    marker2.addListener('click', function() {
      infowindow.open(map2, marker2);
    });

    marker3.addListener('click', function() {
      infowindow.open(map3, marker3);
    });
}

//Declare function that will be used to show each map
function showMap(mapNum, infoNum) {
  mapInfo = infoNum;
  $('body').append($script);
  mapNum.parent('.map-overlay').fadeIn('fast');
  mapNum.hide().fadeIn('slow');
  $(document.body).css('overflow', 'hidden');
}

//Declare function that will be used to close map
function closeMap() {
  $(this).parent('.map-overlay').fadeOut('fast');
  $script.remove();
  $(document.body).css('overflow', 'auto');
}

//Put jQuery selectors for each map box in variables, to be used in show + close functions
var $map1_box = $('#map1-box');
var $map2_box = $('#map2-box');
var $map3_box = $('#map3-box');

//Create event listeners for each of the figures that will pop-up the corresponding map
$('#figure-1').click(function() {
  showMap($map1_box, figure1Info);
});

$('#figure-2').click(function() {
  showMap($map2_box, figure2Info);
});

$('#figure-3').click(function() {
  showMap($map3_box, figure3Info);
});

//Create event listeners that will close the map
$('.map-close').click(closeMap);

$(document).keydown(function (event) {
  if (event.which === 27) {
    $('.map-overlay').fadeOut('fast');
    closeMap();
  }
});
