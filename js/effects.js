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

// $('#primary figure').hover(function(){
//   $(this).toggleClass('map-shadow');
// });
//

});
