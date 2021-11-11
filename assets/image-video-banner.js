
jQuery(function($){
  // Banner slider

  // var elem = document.querySelector('.main-carousel');
  var options = {
    // options
    autoPlay: 6000,
    pauseAutoPlayOnHover: true,
    cellAlign: 'left',
    contain: true,
    freeScroll: true,
    wrapAround: true,
    // disable previous & next buttons and dots
    prevNextButtons: true,
    pageDots: true,
    lazyLoad: 2,
    adaptiveHeight: true
  };
  // var flkty = new Flickity( elem, {
  //   options
  // });
  $('.main-carousel').flickity( options );

  if ( matchMedia('screen and (max-width: 768px)').matches ) {
      options.autoPlay = false;
  }
});