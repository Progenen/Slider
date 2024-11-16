$(".objects__slider").slick({
    slidesToShow: 2,
    prevArrow: ".objects__nav-arrow--prev",
    nextArrow: ".objects__nav-arrow--next",
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 890,
            settings: {
                rows: 2,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
})