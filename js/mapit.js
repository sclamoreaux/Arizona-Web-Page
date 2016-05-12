$(function(){

//Store elements of figure-map overlay in variables
var $mapOverlay = $('#map-overlay');

var $map = $('#map-overlay iframe');

//Store map src attributes for each map in VARIABLES

var figure1Map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26958.7412484236!2d-110.96633906815144!3d32.369766215368344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d60ce66acd1ba9%3A0xfc64d1e62a8b5a14!2sLinda+Vista+Trail!5e0!3m2!1sen!2sus!4v1463018857854';
var figure2Map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.439513604861!2d-111.4837112848004!3d33.46390618077006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872bb7fc9d72b0d7%3A0x66914a4f05f5f4ec!2sLost+Dutchman+State+Park!5e0!3m2!1sen!2sus!4v1463019671018';
var figure3Map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1636.7532519096528!2d-111.76148704635531!3d34.86862542528413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x69cdbb05b5d8e9f8!2sPink+Java+Cafe!5e0!3m2!1sen!2sus!4v1463020420845';

//Declare function that will be used to show the map (corresponding to the figure)
function showMap(url) {
  $map.attr('src', url);
  $mapOverlay.show('fast');
  $(document.body).css('overflow', 'hidden');
}

//Declare function that will be used to close the figure-map
function closeMap() {
  $mapOverlay.hide('fast');
  $map.attr('src', '');
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


});
