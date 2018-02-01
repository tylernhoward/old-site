

$(document).ready(function () {
  AOS.init();
  if ($(window).width() < 768) {
    $(".fixed-top").addClass("bg-custom");

  }
  if ($(window).width() < 500) {
    $(".navbar").remove();
  }

  $('.navbar-brand').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
  $('.nav-link').click(function () {
    var target = $(this).attr('href');
    if (target.includes('#')) {
      var current = $(target);
      if (target.length) {
        var top = current.offset().top;
        $('html,body').animate({
          scrollTop: top
        }, 1000);
        return false;
      }
    }
  });
  $(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
      $(".fixed-top").addClass("bg-custom");
    } else {
      if ($(window).width() >= 768) {
        $(".fixed-top").removeClass("bg-custom");
      }
    }
  });
  $(window).on('resize', function () {
    if ($(window).width() < 768) {
      $(".fixed-top").addClass("bg-custom");
    }
  });
});

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 150,
      "density": {
        "enable": false,
        "value_area": 800
      }
    },
    "color": {
      "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 20
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 2.0,
        "opacity_min": 0.15,
        "sync": false
      }
    },
    "size": {
      "value": 2.5,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0.15,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 110,
      "color": "#33b1f8",
      "opacity": 0.25,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.6,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce",
      "bounce": true,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
