

// Banner slider

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  autoPlay: 6000,
  pauseAutoPlayOnHover: true,
  cellAlign: 'left',
  contain: true,
  freeScroll: false,
  wrapAround: true,
  // disable previous & next buttons and dots
  prevNextButtons: true,
  pageDots: true,
  lazyLoad: 2,
  adaptiveHeight: true
});
