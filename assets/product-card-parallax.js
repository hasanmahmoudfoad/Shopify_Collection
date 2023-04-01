/** 
 * Designed by @Konstantine Trundayev
 * https://dribbble.com/k0t
 * Coded by @Balaj Marius for @Designmodo
 * http://mariusbalaj.com | http://designmodo.com
 */
 
var $poster = $('.poster'),
  $shine = $('.shine'),
  $layer = $('div[class*="layer-"]'),
  w = $(".all-products .product-container").width(), //div  width
  h = $(".all-products .product-container").height(); //div height
var pContainer = $(window); 

// .all-products .product-container

pContainer.on('mousemove', function(e) {
  var offsetX = 2.5 - e.pageX / w , //cursor position X
    offsetY = 2.5 - e.pageY / h, //cursor position Y
    dy = e.pageY - h / 2, //@h/2 = center of poster
    dx = e.pageX - w / 2, //@w/2 = center of poster
    theta = Math.atan2(dy, dx), //angle between cursor and center of poster in RAD
    angle = theta * 180 / Math.PI - 90, //convert rad in degrees
    offsetPoster = $poster.data('offset');
    //transformPoster = 'translateY(30px) rotateX(0deg) rotateY(0deg)'; //poster transform
//console.log(-offsetX * offsetPoster);
  //get angle between 0-360
  if (angle < 0) {
    angle = angle + 180;
  }

  //gradient angle and opacity
  //$shine.css('background', 'linear-gradient(' + angle + 'deg, rgba(255,255,255,' + e.pageY / h + ') 0%,rgba(255,255,255,0) 80%)');

  //poster transform
  //$poster.css('transform', transformPoster);

  //parallax foreach layer
  $layer.each(function() {
    var $this = $(this),
      offsetLayer = $this.data('offset') || 0,
      transformLayer = 'translateX(' + offsetX * offsetLayer + 'px) translateY(' + offsetY * offsetLayer + 'px)';
     // transformLayer = 'translateX(30px) translateY(30px)';

    $this.css('transform', transformLayer);
  });

});
