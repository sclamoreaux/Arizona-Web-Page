//Store the photo URLs and their captions in object

var slideshow = [
  photo1 = {
    url: 'img/slidephoto1.jpg',
    imgCaption: 'This is the caption for the first photograph.'
  },
  photo2 = {
    url: 'img/slidephoto2.jpg',
    imgCaption: 'This is the caption for the second photograph.'
  },
  photo3 = {
    url: 'img/slidephoto3.jpg',
    imgCaption: 'This is the caption for the third photograph.'
  },
  photo4 = {
    url: 'img/slidephoto4.jpg',
    imgCaption: 'This is the caption for the fourth photograph.'
  },
  photo5 = {
    url: 'img/slidephoto5.jpg',
    imgCaption: 'This is the caption for the fifth photograph.'
  }
];

//Declare Variables
  //for entire overlay
  var overlay = document.createElement('div');
  overlay.setAttribute('id', 'overlay');
  //for left and right arrows
  var leftArrow = '<a href=\"#\"><h3>&lt;&lt; Previous</h3></a>';
  var rightArrow = '<a href=\"#\"><h3>Next &gt;&gt;</h3></a>';
  //for close button
  var toClose = '<a id=\"close\" href=\"#\"><h3>CLOSE X</h3></a>';
  // toClose.setAttribute('id', 'close');
  //for img element
  var image = '<img src=\"' + slideshow[0].url + '\">';
  //for the caption
  var iCaption = '<p>' + slideshow[0].imgCaption + '</p>';
  //Compile all html elements into complete overlay slideshow
  overlay.innerHTML = toClose + leftArrow + rightArrow + image + iCaption;

//Declare function that will show the slideshow
  function showOverlay() {
    document.body.appendChild(overlay);
    console.log("Show event fired!");
  };
  //Create event handler to show overlay by binding click event to button
  var elButton = document.getElementById('south');
  elButton.onclick = showOverlay;
//Declare function that will close slideshow
function hideOverlay() {
  document.body.removeChild(overlay);
  console.log("Close event fired!");
};
  //Create event handler to close overlay upon clicking "close" or pressing escape
overlay.onclick = hideOverlay;


//Declare function that will show next photo in slideshow when right arrow clicked

//Declare function that will show previous photo in slideshow when left arrow clicked

//Make conditional statement that will hide left arrow upon the first photo in slideshow and hide the right arrow upon the last photo in slideshow.
