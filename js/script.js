$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        arrow: true,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        nextArrow: '<i class="arrow_right"></i>',
        prevArrow: '<i class="arrow_left"></i>',
        customPaging: function(slider, i) {
            return '<a href="#"><img src="img/dot-512.png" class="dots" /><img src="img/dot_PNG4.png" class="active_dots" /></a>'}
    });

    var scrollTop = $(".scrollTop");

  $(window).scroll(function() {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");

    } else {
      $(scrollTop).css("opacity", "0");
    }

  }); 

    //Click event to scroll to top
    $(scrollTop).click(function() {
        $('html, body').animate({
        scrollTop: 0
        }, 800);
        return false;
    });
  });