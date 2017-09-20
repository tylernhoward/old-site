$(document).ready(function() {
  AOS.init();
  $('.navbar-brand').click(function(){
      $('html,body').animate({ scrollTop: 0 }, 1000);
      return false;
  });
  $('.nav-link').click(function(){
      var target = $(this).attr('href');
      if(target.includes('#')){
        var current = $(target);
        if (target.length) {
            var top = current.offset().top;
            $('html,body').animate({scrollTop: top}, 1000);
            return false;
        }
      }
  });
  $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".fixed-top").addClass("bg-dark");
            // $(".navbar").addClass("navbar-shadow");
        } else {

            $(".fixed-top").removeClass("bg-dark");
            // $(".navbar").removeClass("navbar-shadow");
        }
    });

});
