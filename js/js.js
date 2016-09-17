$(document).ready(function(){

  /*SLICK SLIDER*/
  $('.autoplay').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
      breakpoint: 1200,
      settings: {
        slidesToShow:3
        }
      },
      {
      breakpoint: 950,
      settings: {
        slidesToShow:2
        }
      },
      {
      breakpoint: 500,
      settings: {
        slidesToShow:1
        }
      }
    ]
  });

  /* MAGNIFICENT POPUP */
  $('.image-link').magnificPopup({
    type: 'image',
    gallery:{
      enabled:true
    },
    mainClass: 'mfp-with-zoom', // this class is for CSS animation below
    zoom: {
      enabled: true, // By default it's false, so don't forget to enable it

      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function

      // The "opener" function should return the element from which popup will be zoomed in
      // and to which popup will be scaled down
      // By defailt it looks for an image tag:
      opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }



    // other options
  });

  // $('.parallax-window').parallax({imageSrc: '../images/header-image.png'});


});
