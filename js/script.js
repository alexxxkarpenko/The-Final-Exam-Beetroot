// меню, скролл и стрелка 

$(function () {
    $(document).scroll(function () {
      let $header = $(".header");
      $header.toggleClass('scrolled', $(this).scrollTop() > $header.height());
    });
});

$(document).ready(function() {
    $("#arrow").on("click", "a", function(event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 2000);
    });
});
$(document).ready(function() {
    $("#intro").on("click", "a", function(event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 2000);
    });
});

$(document).ready(function() {
  $("#menu").on("click", "a", function(event) {
      event.preventDefault();
      let id = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 2000);
  });
});

// the first sliderrr!

$(document).ready(function(){
  $('.slider').slick({
      arrows:true,
      dots:false,
      adaptiveHeight:true,
      slidesToShow:3,
      slidesToScroll:1,
      speed:1000,
      easing:'ease',
      infinite:true,
      initialSlide:0,
      autoplay:true,
      autoplaySpeed:2500,
      pauseOnFocus:true,
      pauseOnHover:true,
      pauseOnDotsHover:false,
      draggable:false,
      swipe:true,
      touchThreshold:5,
      touchMove:true,
      waitForAnimate:false,
      centerMode:false,
      variableWidth:false,
      // rows:1,
      // slidesPerRow:1,
      vertical:false,
      verticalSwiping:false,
      // fade:true,
      // asNavFor:".класс другого слайда", + это же укажем в другом слайде с названием этого слайда.
      // тогда они будут переключать слайды при нажатии на один из них
      responsive:[
          {
              breakpoint: 1500,
              settings: {
                  slidesToShow:2,
              },
           },{
              breakpoint: 1000,
              settings: {
                  slidesToShow:1,
              }
          }
      ], 
  });
});

// Аккордеон -----------------
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
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
// The second slider
$('#slider').slick({
  infinite: true,
  adaptiveHeight:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  dots: false,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 4000,
});