// 1. SLIDESHOW PHOTO DATA
//Each slideshow is an array of objects containing the photo's url and caption.

var slideshow1 = [
  photo1 = {
    url: 'img/catalinamtns1.jpg',
    captionText: 'A prickly pear cactus in springtime bloom near Finger Rock trail.'
  },
  photo2 = {
    url: 'img/southphotos/catalinastatepark1.jpg',
    captionText: 'Due to late summer rain, creeks flow in Catalina State Park in autumn.'
  },
  photo3 = {
    url: 'img/southphotos/mtlemmon1.jpg',
    captionText: 'A flowery meadow by the scenic road up to Mount Lemmon.'
  },
  photo4 = {
    url: 'img/southphotos/sabinocanyon1.jpg',
    captionText: 'Sabino Canyon is an ever-popular area for recreation in the desert.'
  },
  photo5 = {
    url: 'img/southphotos/chiricahua1.jpg',
    captionText: 'The pines and vertical rock formations of Chiricahua National Monument.'
  },
  photo6 = {
    url: 'img/southphotos/pimacanyon1.jpg',
    captionText: 'Pima Canyon bursts into bloom in the springtime.'
  }
];

var slideshow2 = [
  photo1 = {
    url: 'img/bellrock.jpg',
    captionText: 'The striking formations of Bell Rock and Courthouse Butte in Sedona.'
  },
  photo2 = {
    url: 'img/centralphotos/oakcreek1.jpg',
    captionText: 'Gorgeous and green, Oak Creek Canyon is perfect for a summer hike.'
  },
  photo3 = {
    url: 'img/centralphotos/sedona2.jpg',
    captionText: 'The red rocks of Sedona seem to glow magically at sunset.'
  },
  photo4 = {
    url: 'img/centralphotos/cathedralrock.jpg',
    captionText: 'The iconic Cathedral Rock looms over Oak Creek.'
  },
  photo5 = {
    url: 'img/centralphotos/superstitionmtns2.jpg',
    captionText: 'The jagged peaks of the Superstition Mountains cut into the sky.'
  },
  photo6 = {
    url: 'img/centralphotos/montezumacastle.jpg',
    captionText: 'The ancient Sinaguan ruins known as Montezuma Castle.'
  }
];

var slideshow3 = [
  photo1 = {
    url: 'img/horseshoebend.jpg',
    captionText: 'The remarkable view over Horseshoe Bend near Page.'
  },
  photo2 = {
    url: 'img/northphotos/page1.jpg',
    captionText: 'The vastness of our northern desert is a feast for the eyes.'
  },
  photo3 = {
    url: 'img/northphotos/flagstaff.jpg',
    captionText: 'Flagstaff offers a mix of grassy meadows and forested mountain peaks.'
  },
  photo4 = {
    url: 'img/northphotos/grandcanyon2.jpg',
    captionText: 'The Grand Canyon is an unforgettable, incomparable destination.'
  },
  photo5 = {
    url: 'img/northphotos/grandcanyon3.jpg',
    captionText: 'The sheer vastness of the canyon reminds us how very small we are.'
  },
  photo6 = {
    url: 'img/northphotos/grandcanyon4.jpg',
    captionText: 'It can be a bit frightening to gaze into its depths.'
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
  showOverlay : function() {
        imageCount = 0;
        OverlayUI.setImage();
        OverlayUI.setPrevArrow();
        OverlayUI.setNextArrow();
        $overlay.fadeIn('fast');
        $(document.body).css('overflow', 'hidden');
        //console.log("Show event fired!");
      },
  //Function that will close slideshow.
  hideOverlay : function(event) {
        event.preventDefault();
        $overlay.fadeOut('fast');
        $(document.body).css('overflow', 'auto');
        //console.log("Close event fired!");
      },
  //Function that will select corresponding slideshow depending on which was clicked.
  selectShow : function(event) {
    console.log("Clicked on page!");
      if (event.target.id === "south") {
        console.log("Clicked on south!");
        showSelection = slideshow1;
        OverlayUI.showOverlay();
      } else if (event.target.id === "central") {
        showSelection = slideshow2;
        OverlayUI.showOverlay();
      } else if (event.target.id === "north") {
        showSelection = slideshow3;
        OverlayUI.showOverlay();
      }
    },
//Function that will change to next/previous photo when respective button is clicked.
  changeImage : function(event) {
      if (event.target.id == 'next') {
        event.preventDefault();
        imageCount++;
        OverlayUI.setImage();
        OverlayUI.setPrevArrow();
        OverlayUI.setNextArrow();

      //console.log('Next event fired!');
      //console.log(imageCount);
      } else if (event.target.id == 'prev') {
        event.preventDefault();
        imageCount--;
        OverlayUI.setImage();
        OverlayUI.setPrevArrow();
        OverlayUI.setNextArrow();
      //console.log('Prev event fired!');
      //console.log(imageCount);
      }
    },
  //Function that will change to next/previous photo depending on which arrow key is pressed.
    //This same function will also trigger event that hides overlay when escape key is pressed.
  keyPress : function (event) {
      if (event.keyCode === 39) {
        //console.log('Right arrow pressed!');
          if (imageCount === showSelection.length - 1) {
          return;
        } else {
          imageCount++;
          OverlayUI.setImage();
          OverlayUI.setPrevArrow();
          OverlayUI.setNextArrow();
        }

      } else if (event.keyCode === 37) {
        //console.log('Left arrow pressed!');
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

//Create event listener that selects which slideshow to use based on which button user clicks
$('#secondary').click(OverlayUI.selectShow);

//Create event handler to close overlay upon clicking "close" or pressing escape
$('#close').click(OverlayUI.hideOverlay);

//Create an event listener to change the image when user clicks next or previous
$overlay.click(OverlayUI.changeImage);

//Create event listener that does the same thing as above, but for pressing left and right arrows on keyboard
$(document).keydown(OverlayUI.keyPress);


//Experimenting with click events on figure elements

$('#primary').on('click', 'figure', function() {
  console.log('Primary section clicked!');

});

$('#secondary').on('click', 'figure', function(event) {
  console.log("Clicked on page!");
  console.log(event);
    if (event.target.id === "figure-4") {
      console.log("Clicked on south!");
      showSelection = slideshow1;
      OverlayUI.showOverlay();
    } else if (event.target.id === "figure-5") {
      console.log("Clicked on central!");
      showSelection = slideshow2;
      OverlayUI.showOverlay();
    } else if (event.target.id === "figure-6") {
      console.log("Clicked on north!");
      showSelection = slideshow3;
      OverlayUI.showOverlay();
    }
});
