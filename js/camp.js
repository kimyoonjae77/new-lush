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
    $(".camlist>li").click(function(){
        let b = $(this).index();
        $(".camlist>li>h1").removeClass("color");
        $(".camlist>li>h1").eq(b).addClass("color");
        $(".fade>li").stop().fadeOut();
        $(".fade>li").eq(b).stop().fadeIn();
    });
    setInterval(function () {
        nextSlide();
    }, 3000)
    
    
    $(".tablist>li").click(function () {
        let t = $(this).index();
        $(".tablist>li").removeClass("list_on");
        $(".tablist>li").eq(t).addClass("list_on")
        $(".tabmain>li").stop().fadeOut();
        $(".tabmain>li").eq(t).stop().fadeIn();
    })
    
    
    
    function nextSlide() {
        $(".carousel").stop().animate({"margin-left":"-60vw"},1000,function () {
            $(".carousel>li:first-child").appendTo(".carousel");
            $(".carousel").css({"margin-left":"-30vw"});
            });
            }

    setInterval(function(){
        $(".newstxt>li:first-child").fadeOut().next().fadeIn().end(3000).appendTo(".newstxt")
        }, 5000);
    setInterval(function(){
        $(".newsimg>li:first-child").fadeOut().next().fadeIn().end(3000).appendTo(".newsimg")
        }, 5000);
        
        function mobSlide() {
            $(".carousel2").stop().animate({"margin-left":"-120vw"},1000,function () {
                $(".carousel2>li:first-child").appendTo(".carousel2");
                $(".carousel2").css({"margin-left":"-60vw"});
                });
                }
    setInterval(function () {
            mobSlide();
                }, 3000)
                
});



