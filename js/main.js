// initializing aos

$(document).ready(function () {
    AOS.init({
      duration: 800,
      easing: 'slide',
      once: true,
    });
  })

// owl carousel
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    responsiveClass:true,
    nav:false,
    dots:true,
    autoplay:true,
    loop:true,
    navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
  
        },
        1000:{
            items:3,
        }
    }
  })
