$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 4000,
    arrows: false,
    draggable: false,
    pauseOnHover: false,
    pauseOnFocus: false,
  });
});
var scrollStart = 0;
$(document).scroll(function() {
    console.log($(this).scrollTop());
    var howFarScrolled = $(this).scrollTop();
    if (howFarScrolled - scrollStart > 50) {
        var headerHeight = $('.navbar').css('height');
        $('.navbar').animate({top: '-'+ headerHeight}, 150);
        scrollStart = howFarScrolled;
      }
    else if (scrollStart - howFarScrolled > 50) {
      $('.navbar').animate({top: 0}, 150);
      scrollStart = howFarScrolled;
    }
})
