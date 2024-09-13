$(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

$(document).ready(function () {
    $(".nav .gnb>li").mouseenter(function () {
        $(".menu").addClass("on");
    });
    $(".nav .gnb>li").mouseleave(function () {
        $(".menu").removeClass("on");
    });
    
    $(".hamburg_ico").click(function () {
        $(".hamburg_menu").stop().fadeIn(500);
        $(".close").stop().fadeIn(500);
    });
    $(".close").click(function () {
        $(".hamburg_menu").stop().fadeOut(500);
        $(".close").stop().fadeOut(500);
    });

    $(".link_menu").click(function () {
        if ($(this).hasClass("active")) {
            $(".link_menu").removeClass("active").siblings().slideUp();
        } else {
            $(".link_menu").removeClass("active").siblings().slideUp();
            $(this).addClass("active").siblings().slideDown();
        }
    });
});