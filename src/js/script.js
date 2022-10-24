$(document).ready(function(){
    $('.reviews_carousel').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        adaptiveHeight: true,

        prevArrow:'<button type="button" class="slick-prev"><img src="icons/_arrow_left.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="icons/_arrow_right.png"></button>',

        responsive: [
        {
            breakpoint: 768,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
            }
        }
        ]
    });
}); 