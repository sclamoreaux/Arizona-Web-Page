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
