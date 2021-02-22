$('.header__slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
  });
  $(".nav__list").on("click", "li::marker", function(){
    $(".active").removeClass("active"); // triggered on every event bubble :(
    $(this).addClass("active"); // leaving only the main parent with active class
 });
  $(document).ready(function(){
        $(".header__down").on("click","a", function (event) {
            event.preventDefault();
            let id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });


  let nav = document.getElementById("act");
let btns = nav.getElementsByClassName("nav__item");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

$('.news__slider').slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  adaptiveHeight: true,
  autoplay: true,
  speed: 4000,
  prevArrow: '<a class="slick-prev"><</a>',
  nextArrow: '<a class="slick-next">></a>',
  responsive: [
    {
        breakpoint: 900,
        settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
      },
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        slidesToShow: 1,
      }
    },
  ]
});

$(function () {
  $(".open").on("click", function () {
      $(".footer__fon").fadeIn();
      return false
  });

  $("#popup__btn").on("click", function () {
      $(".footer__fon").fadeOut();
  });

  $(".footer__fon").on("click", function (e) {
      if ($(e.target).closest('.footer__pop').length == 0) {
          $(".footer__fon").fadeOut();					
      }
  });

});
$(function () {
  $(".pb1").on("click", function () {
      $(".pack1__fon").fadeIn();
      return false
  });

  $("#btn1").on("click", function () {
      $(".pack1__fon").fadeOut();
  });

  $(".pack1__fon").on("click", function (e) {
      if ($(e.target).closest('.pack1__pop').length == 0) {
          $(".pack1__fon").fadeOut();					
      }
  });

});
$(function () {
  $(".pb2").on("click", function () {
      $(".pack2__fon").fadeIn();
      return false
  });

  $("#btn2").on("click", function () {
      $(".pack2__fon").fadeOut();
  });

  $(".pack2__fon").on("click", function (e) {
      if ($(e.target).closest('.pack2__pop').length == 0) {
          $(".pack2__fon").fadeOut();					
      }
  });

});

let acc = document.getElementsByClassName("butn");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function initMap() {
  const brooklyn = { lat: 42.07, lng: -83.14 };
  const icons = {
    icon: "image/Pin.png"
  };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: brooklyn,
  });
  const marker = new google.maps.Marker({
    position: brooklyn,
    icon: icons.icon,
    map: map,
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ]
  });
}

