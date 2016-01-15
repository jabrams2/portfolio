      /* HERO-SHOT PARALLAX */

$(window).scroll(function(){
  var x = $(this).scrollTop(),
      transY = (x * 0.5), scale = 1 + (x * 0.0003),
      transform = 'translateY('+transY+'px) scale('+scale+') translate3d(0,0,0)';
  $('#hero-shot .hero-shot-container').css({
    opacity: 1 - (x * 0.0008),
    WebkitTransform: transform,
    MozTransform: transform,
    msTransform: transform,
    transform: transform
  });
});


        /* CONTAINER TWO PARALLAX */
 $(function () { // wait for document ready
        // init
        var controller = new ScrollMagic.Controller({
            globalSceneOptions: {
                triggerHook: .1
            }
        });

        // get all slides
        var slides = document.querySelectorAll("div.catch");


        // create scene for every slide
        for (var i=0; i<slides.length; i++) {
            new ScrollMagic.Scene({
                    triggerElement: slides[i]
                })
                .setPin(slides[i])
                .addIndicators() // add indicators (requires plugin)
                .addTo(controller);
        }
    });