$(document).ready(function() {
  AOS.init();
  if ($(window).width() < 768) {
    $(".fixed-top").addClass("bg-dark");

  }
  if ($(window).width() < 400) {
    $("#banner").css("width", "auto");
    $("#banner").css("height", "750px");
    $("#banner .overlay").css("width", "auto");
    $("#banner .overlay").css("height", "750px");
    $("#banner").css("background", "none");
    $("#resume").css("background", "none");
    $("#banner").css("background-color", "lightblue");
    $("#resume").css("background-color", "lightblue");
  }

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
        } else {
            if ($(window).width() >= 768) {
              $(".fixed-top").removeClass("bg-dark");
            }
        }
    });
    $(window).on('resize', function() {
      if ($(window).width() < 768) {
        $(".fixed-top").addClass("bg-dark");
      }
    });


});
