$(document).ready(function () {
    let i = 0;
    let count = $(".swiper-wrapper>div").length;

    $(".nav .gnb>li").mouseenter(function () {
        $(".menu").addClass("on");
    });
    $(".nav .gnb>li").mouseleave(function () {
        $(".menu").removeClass("on");
    });

    $(".mar1>div").click(function () {
        let list = $(this).index();
        $(".click_guide>div").stop().fadeOut();
        $(".click_guide>div").eq(list).stop().fadeIn();
    });

    $(".mar2>div").click(function () {
        let list = $(this).index();
        $(".click_guide>div").stop().fadeOut();
        $(".cg2>div").eq(list).stop().fadeIn();
    });

    $(".g2_left>div").click(function () {
        let list2 = $(this).index();
        $(".center_big_img>div").stop().removeClass("on2");
        $(".center_big_img>div").eq(list2).stop().addClass("on2");
    });

    $(".g2_right>div").click(function () {
        let list3 = $(this).index();
        let list4 = list3 + 2;
        $(".center_big_img>div").stop().removeClass("on2");
        $(".center_big_img>div").eq(list4).stop().addClass("on2");
    });

    $(".g2_left>div").click(function () {
        let list5 = $(this).index();
        $(".center_big_txt>div").stop().removeClass("on3");
        $(".center_big_txt>div").eq(list5).stop().addClass("on3");
    });

    $(".g2_right>div").click(function () {
        let list6 = $(this).index();
        let list7 = list6 + 2;
        $(".center_big_txt>div").stop().removeClass("on3");
        $(".center_big_txt>div").eq(list7).stop().addClass("on3");
    });

    $(window).click(function (e) {
        const isFamMenu = Boolean(e.target.closest(".swiper-slide"));
        if (!isFamMenu) {
            $(".click_guide>div").stop().fadeOut(300);
        }
    });
});

$(document).ready(function () {
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

    // $("#all_btn>div").click(function () {
    //     let target = $(this).data("target");
    //     $("html,body")
    //         .stop()
    //         .animate({ scrollTop: $(target).offset().top }, 500);
    //     window.location.hash = target;
    // });
});

// document.addEventListener("mousemove", e => {
//     let mouseX = e.pageX + 10; // document의 x좌표값
//     let mouseY = e.pageY + 10; // document의 y좌표값

//     let cursor = document.querySelector(".cursor");
//     cursor.style.left = mouseX + "px";
//     cursor.style.top = mouseY + "px";
// });
