// carousel
$('.slid-one')
.not(".slick-initialized")
.slick({
    autoplay:true,
    autoplaySpeed:30000,
    dots:true,
    prevArrow:".Carousel .slider-btn .prev",
    nextArrow:".Carousel .slider-btn .next"
});
// $('.product-slider .row')
// .not(".slick-initialized")
// .slick({
//     slidesToShow:5,
//     prevArrow:".product-slider .slider-btn .prev",
//     nextArrow:".product-slider .slider-btn .next",
// });
$(document).ready(function(){
  $('.product-slider .row').slick({
    dots: false,
    infinite: true,
    prevArrow:".product-slider .slider-btn .prev",
    nextArrow:".product-slider .slider-btn .next",
    slidesToShow: 6,
    slidesToScroll: 1,
  });

  });
  
