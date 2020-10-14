$(function() {
    $(".rate-star").rateYo({
        rating: 5,
        readOnly: true,
        starWidth: "12px"
    });

    $('.product-slider__inner').slick({
        dots: true,
        slidesToShow: 4,
        arrows: false,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1920,
              settings: {
                dots: true,
                slidesToShow: 3,
                infinite: true,
                slidesToScroll: 3,
              }
            },
            {
                breakpoint: 1441,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 801,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
        ]
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });

    $('.icon-th-list').on('click', function() {
        $('.products__item').addClass('list');
        $('.icon-th-list').addClass('active');
        $('.icon-th-large').removeClass('active');
    });
    $('.icon-th-large').on('click', function() {
        $('.products__item').removeClass('list');
        $('.icon-th-large').addClass('active');
        $('.icon-th-list').removeClass('active');
    });


    
    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle(); 
    });

    $('input[type="file"], select').styler();

    $('.product-one__tabs .tab, .settings__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.product-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
            $('.product-one__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
        });

    $('.header__btn-menu').on('click', function(){
        $('.header__box').toggleClass('active'); 
    });


    

    var mixer = mixitup('.products__inner-box');




});