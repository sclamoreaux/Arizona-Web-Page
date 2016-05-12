(function(){
  var $content = $('#figure1-map').detach();   // Remove modal from page

  $('#figure-1').on('click', function() {           // Click handler to open modal
    modal.open({content: $content});
  });
}());
