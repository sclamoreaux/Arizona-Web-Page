//Store the photo URLs and their captions in array of objects

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

//Declare Variables
  //get entire overlay
  var overlay = document.getElementById('overlay');
  //get img element
  var image = document.getElementById('img-holder');
  //get p element for caption
  var imgCaption = document.getElementById('img-caption');
  //Declare a variable to plug in whatever slideshow that the user clicks on
  var showSelection;

//Start the image counter at 0, representing the index of the photo to be shown
    var imageCount = 0;


//Declare function that will set the image URL and caption text
  function setImage() {
    image.setAttribute('src', showSelection[imageCount].url);
    imgCaption.textContent = showSelection[imageCount].captionText;
  };

//Declare function(s) that will set display status of "previous" and "next" arrows
  function setNextArrow () {
    if (imageCount < showSelection.length - 1) {
        document.getElementById('next').style.display="inline-block";
    } else if (imageCount === showSelection.length - 1) {
    document.getElementById('next').style.display="none";
    }
  };

  function setPrevArrow () {
    if (imageCount > 0) {
      document.getElementById('prev').style.display="inline-block";
    } else if (imageCount === 0) {
      document.getElementById('prev').style.display="none";
    }
  };

//Declare function that will show the slideshow
  function showOverlay() {
    imageCount = 0;
    setImage();
    setPrevArrow();
    setNextArrow();
    overlay.style.display="block";
    document.body.style.overflow="hidden";
    //console.log("Show event fired!");
  };

  document.getElementById('secondary').addEventListener('click', function (event) {
    console.log("Clicked on page!");
    if (event.target.id === "south") {
      showSelection = slideshow1;
      showOverlay();
    } else if (event.target.id === "central") {
      showSelection = slideshow2;
      showOverlay();
    } else if (event.target.id === "north") {
      showSelection = slideshow3;
      showOverlay();
    };
  }, false);

  //Create event handler to show overlay by binding click event to button
  //document.getElementsByTagName('button').onclick = showOverlay;

//Declare function that will close slideshow
function hideOverlay(event) {
  event.preventDefault();
  overlay.style.display="none";
  document.body.style.overflow="auto";

  //console.log("Close event fired!");
};
  //Create event handler to close overlay upon clicking "close" or pressing escape
document.getElementById('close').onclick = hideOverlay;

//Show next photo in slideshow when right arrow clicked, and show previous photo when left arrow clicked
  //Create an event listener function to add one to the index when "next" is clicked, or subtract 1 when "prev" is clicked

overlay.addEventListener('click', function (event) {
  //console.log(event.target.id);
  if (event.target.id == 'next') {
    event.preventDefault();
    imageCount++;
    setImage();
    setPrevArrow();
    setNextArrow();
    //console.log('Next event fired!');
    //console.log(imageCount);
  } else if (event.target.id == 'prev') {
    event.preventDefault();
    imageCount--;
    setImage();
    setPrevArrow();
    setNextArrow();
    //console.log('Prev event fired!');
    //console.log(imageCount);
  }
}, false);

//Create event listener that does the same thing as above for left and right arrows on keyboard
document.addEventListener('keydown', function (event) {
  //
  if (event.keyCode === 39) {
    console.log('Right arrow pressed!');
      if (imageCount === showSelection.length - 1) {
      return;
    } else {
      imageCount++;
      setImage();
      setPrevArrow();
      setNextArrow();
    }

  } else if (event.keyCode === 37) {
    console.log('Left arrow pressed!');
    if (imageCount === 0) {
      return;
    } else {
      imageCount--;
      setImage();
      setPrevArrow();
      setNextArrow();
    }

  } else if (event.keyCode === 27) {
    hideOverlay(event);
  };
}, false);
