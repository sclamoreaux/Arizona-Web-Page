//VIDEO SLIDER EFFECTS SCRIPT

$(function(){

  $('#video-button').click(function(){
    $('#video-container').slideToggle();
    var $button = $('#video-button span');
    if ( $button.text() == $button.data('text-swap') ) {
      $button.text($button.data('text-original'));
    } else {
      $button.data('text-original', $button.text());
        $button.text($button.data('text-swap'));
    }

  });

});

//SLIDESHOW GALLERY script

$(function(){

  // 1. SLIDESHOW PHOTO DATA
  //Each slideshow is an array of objects containing the photo's url and caption.

  var slideshow1 = [
    photo1 = {
      url: 'img/southphotos/fingerrockB.jpg',
      captionText: 'Prickly pear cactus in springtime bloom near Finger Rock trail - Tucson.'
    },
    photo2 = {
      url: 'img/southphotos/catalinastatepark.jpg',
      captionText: 'Creek flowing in Catalina State Park in autumn - Oro Valley.'
    },
    photo3 = {
      url: 'img/southphotos/mountlemmon.jpg',
      captionText: 'Flowery meadow by the scenic road to Mount Lemmon - north of Tucson.'
    },
    photo4 = {
      url: 'img/southphotos/sabinocanyon1.jpg',
      captionText: 'Sabino Canyon, a popular area for desert recreation - Tucson.'
    },
    photo5 = {
      url: 'img/southphotos/chiricahua1.jpg',
      captionText: 'Chiricahua National Monument - southeastern Arizona.'
    },
    photo6 = {
      url: 'img/southphotos/pimacanyon1.jpg',
      captionText: 'Springtime blossoms on Pima Canyon trail - Tucson.'
    }
  ];

  var slideshow2 = [
    photo1 = {
      url: 'img/centralphotos/bellrock3.jpg',
      captionText: 'Bell Rock and Courthouse Butte formations - Sedona.'
    },
    photo2 = {
      url: 'img/centralphotos/oakcreek1.jpg',
      captionText: 'West Fork trail in Oak Creek Canyon - Sedona.'
    },
    photo3 = {
      url: 'img/centralphotos/cactusgarden.jpg',
      captionText: 'Cacti in the Desert Botanical Garden - Phoenix.'
    },
    photo4 = {
      url: 'img/centralphotos/cathedralrock.jpg',
      captionText: 'Cathedral Rock looms over Oak Creek - Sedona.'
    },
    photo5 = {
      url: 'img/centralphotos/superstitionmtns2.jpg',
      captionText: 'Superstition Mountains in Lost Dutchman State Park - Apache Junction.'
    },
    photo6 = {
      url: 'img/centralphotos/montezumacastle.jpg',
      captionText: 'Sinaguan ruins known as Montezuma Castle - Camp Verde.'
    }
  ];

  var slideshow3 = [
    photo1 = {
      url: 'img/northphotos/walnutcanyon.jpg',
      captionText: 'Walnut Canyon National Monument - Flagstaff.'
    },
    photo2 = {
      url: 'img/northphotos/marblecanyon.jpg',
      captionText: 'View from Navajo Bridge - Marble Canyon.'
    },
    photo3 = {
      url: 'img/northphotos/flagstaff.jpg',
      captionText: 'Grassy meadow by Highway 89 - near Flagstaff.'
    },
    photo4 = {
      url: 'img/northphotos/grandcanyon3.jpg',
      captionText: 'South Rim of Grand Canyon National Park - northern Arizona.'
    },
    photo5 = {
      url: 'img/northphotos/horseshoebend.jpg',
      captionText: 'Horseshoe Bend on the Colorado River - Page.'
    },
    photo6 = {
      url: 'img/northphotos/lonelydell.jpg',
      captionText: 'Cliffs of Lonely Dell Ranch by Lee\'s Ferry - northern Arizona.'
    }
  ];

  // 2. VARIABLES TO STORE ELEMENTS OF THE SLIDESHOW OVERLAY

    //entire overlay
    var $overlay = $('#overlay');
    //img element
    var $image = $('#img-holder');
    //get p element for caption
    var $imgCaption = $('#img-caption');

    //Declare a variable to plug in whatever slideshow that the user clicks on
    var showSelection;
    //Declare a variable to keep track of the image index
    var imageCount;

  // 3. USER INTERFACE FUNCTIONS, STORED IN AN OBJECT

  var OverlayUI = {
    //Function that will set the image URL and caption text.
    setImage : function() {
          $image.attr('src', showSelection[imageCount].url);
          $imgCaption.text(showSelection[imageCount].captionText);
        },
    //Functions that will set display status of "previous" and "next" arrows.
    setNextArrow : function() {
          if (imageCount < showSelection.length - 1) {
              $('#next').css('display', 'inline-block');
          } else if (imageCount === showSelection.length - 1) {
              $('#next').css('display', 'none');
          }
        },
    setPrevArrow : function() {
          if (imageCount > 0) {
            $('#prev').css('display', 'inline-block');
          } else if (imageCount === 0) {
            $('#prev').css('display', 'none');
          }
        },
    //Function that will show the slideshow.
    showOverlay : function(slideshowNumber) {
          imageCount = 0;
          showSelection = slideshowNumber;
          OverlayUI.setImage();
          OverlayUI.setPrevArrow();
          OverlayUI.setNextArrow();
          $overlay.show('fast');
          $(document.body).css('overflow', 'hidden');
        },
    //Function that will close slideshow.
    hideOverlay : function(event) {
          event.preventDefault();
          $overlay.hide('fast');
          $(document.body).css('overflow', 'auto');
        },
  //Function that will change to next/previous photo when respective button is clicked.
    changeImage : function(event) {
        if (event.target.id == 'next') {
          event.preventDefault();
          imageCount++;
          OverlayUI.setImage();
          OverlayUI.setPrevArrow();
          OverlayUI.setNextArrow();
        } else if (event.target.id == 'prev') {
          event.preventDefault();
          imageCount--;
          OverlayUI.setImage();
          OverlayUI.setPrevArrow();
          OverlayUI.setNextArrow();
        }
      },
    //Function that will change to next/previous photo depending on which arrow key is pressed.
      //This same function will also trigger event that hides overlay when escape key is pressed.
    keyPress : function (event) {
        if (event.keyCode === 39) {
            if (imageCount === showSelection.length - 1) {
            return;
          } else {
            imageCount++;
            OverlayUI.setImage();
            OverlayUI.setPrevArrow();
            OverlayUI.setNextArrow();
          }

        } else if (event.keyCode === 37) {
          if (imageCount === 0) {
            return;
          } else {
            imageCount--;
            OverlayUI.setImage();
            OverlayUI.setPrevArrow();
            OverlayUI.setNextArrow();
          }

        } else if (event.keyCode === 27) {
          OverlayUI.hideOverlay(event);
        };
      }

  } //<--- End of OverlayUI object

  // 4. EVENT HANDLERS & LISTENERS FOR USER INTERFACE EVENTS

  //Event handlers to display each slideshow for the corresponding figure by passing the name of slideshow array as argument.
  $('#figure-4').click(function(){
    OverlayUI.showOverlay(slideshow1);
  });

  $('#figure-5').click(function(){
    OverlayUI.showOverlay(slideshow2);
  });

  $('#figure-6').click(function(){
    OverlayUI.showOverlay(slideshow3);
  });

  //Create event handler to close overlay upon clicking "close" or pressing escape
  $('#close').click(OverlayUI.hideOverlay);

  //Create an event listener to change the image when user clicks next or previous
  $overlay.click(OverlayUI.changeImage);

  //Create event listener that does the same thing as above, but for pressing left and right arrows on keyboard
  $(document).keydown(OverlayUI.keyPress);


});

//MAP FEATURE SCRIPT

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
