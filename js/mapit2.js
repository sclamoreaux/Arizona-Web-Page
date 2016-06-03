//Store figure-map overlay in variable
var $mapOverlay = $('#map-overlay');
//Store script for GoogleMaps API in variable so it can be appended/removed along with overlay
var $script = $('<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCp_e45fObB_YwVdOHH_j8YiaDGf83DOFk&callback=initMap" async defer></script>');

//Store map location/coordinates data for each map in VARIABLES
var figure1Map = {lat: 32.380549, lng: -110.961087};
var figure2Map = {lat: 33.463906, lng: -111.481523};
var figure3Map = {lat: 34.8688056, lng: -111.7613332};

//Store map options object in variable, with blank 'center' to be passed a value in showMap function
var mapOptions = {
  center: '',
  zoom: 15,
};

//Create initMap callback function for GoogleMaps API to load map
function initMap() {
    var map;
    map = new google.maps.Map(document.getElementById('map-box'), mapOptions);
    map.setMapTypeId(google.maps.MapTypeId.TERRAIN);
    var mapPin = new google.maps.Marker({
      position: mapOptions.center,
      map: map,
      icon: "img/map-pin.svg"
    });
}

//Declare function that will be used to show the map (corresponding to the figure)
function showMap(mapNum) {
  mapOptions.center = mapNum;
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
  showMap(figure1Map);
});

$('#figure-2').click(function() {
  showMap(figure2Map);
});

$('#figure-3').click(function() {
  showMap(figure3Map);
});

//Create event listeners that will close the map
$('#map-close').click(closeMap);

$(document).keydown(function (event) {
  if (event.which === 27) {
    closeMap();
  }
});
