$(function () {

  $('[data-toggle="popover"]').popover({ html : true })
});

var animate = new Animate({
            target: '[data-animate]',
            animatedClass: 'visible',
            offset: [0.5, 0.5],
            delay: 0,
            remove: false,
            reverse: true,
            scrolled: false,
            debug: true,
            onLoad: true,
            onScroll: true,
            onResize: false,
            callbackOnInit: function() {
                console.log('Initialised');
            },
            callbackOnAnimate: function(element) {
                console.log(element)
            }
        });

        animate.init();

//* obtener el nivel de scroll*//

$(window).on('scroll',parallax);
// efecto parallax para fondos//
function parallax(){
  var s = $(window).scrollTop();
  function parallaxBg(el,t){
    $(el).css({
        'background-attachment': 'fixed',
        'background-position': 'center ' + -(s*t) + 'px'
    })
  }
  /*efecto parallax para los textos*/ 
  function parallaxFront(el,t){
    $(el).css({
        'position': 'relative',
        'top': -(s*t) + 'px'
    })
  }
  parallaxBg('body',.2);
  parallaxFront('h1',.5);
}
