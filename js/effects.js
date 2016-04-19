$(function(){

$('button').hover(
    function(){
    $(this).parent().css({"border-color" : "rgb(52, 163, 110)"});
  },
    function(){
      $(this).parent().css({"border-color" : "rgb(230, 187, 153)"});
    }

);

$('#video-button').click(function(){
  $('#video-container').slideToggle();

});


});
