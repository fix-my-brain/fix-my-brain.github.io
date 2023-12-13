$(function() {
  //Make images zoomable
  const $imagesToZoom = $("[data-magnify=gallery]");
  if ($imagesToZoom.length) {
    $imagesToZoom.magnify({
      callbacks: {
        beforeOpen: function(el){
          // Will fire before modal is opened
          $('<div />').addClass('js-img-popup-overlay').css(
            {'position': 'fixed', 'top': '0', 'left': '0', 'right': '0', 'bottom': '0', 'opacity': '0.8', 'background': 'DarkGrey', 'z-index': '100', 'display': 'none'})
            .appendTo('body')
            .fadeIn('normal')
            .click(function() {
              $(this).fadeOut('slow', function() {$(this).remove();});
              $('.magnify-modal').remove();
              $('html').attr('style', '');
            });
        },
        opened: function(el){
          // Will fire after modal is opened
        },
        beforeClose: function(el){
          // Will fire before modal is closed
          $('.js-img-popup-overlay').remove();
        },
        closed: function(el){
          // Will fire after modal is closed
        },
        beforeChange: function(index){
          // Will fire before image is changed
          // The arguments is the current image index of image group
        },
        changed: function(index){
          // Will fire after image is changed
          // The arguments is the next image index of image group
        }
      }
    });
  }
  
  //Add logic to YouTube replay buttons
  $('.js-replay-btn').on('click', function() {
    const $el = $(this).parent().find('iframe');
    console.log($el);
    const oldSrc = $el.attr('src');
    const separator = oldSrc.includes('?') ? '&' : '?';
    $el.attr('src', oldSrc + separator + 'autoplay=1&random=' + Math.random());
  });
});