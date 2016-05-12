
//Experimenting with sliding images
$('#img-box').show('slide', { direction: "right" });
$('#img-box').hide('slide');

$image.hide('slide');
$image.show('slide', { direction: "right" });

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
