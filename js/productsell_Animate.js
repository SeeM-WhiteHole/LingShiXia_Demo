$(document).ready(function () {
    var move1 = false;
    var move2 = false;
    var move3 = false;
    var move4 = false;
    var move5 = false;
    var move6 = false;
    var move7 = false;
    var move8 = false;

    function animateMove(x,moveX,animateBox,flag) {
        if (x >= $(window).scrollTop() && x < ($(window).scrollTop() + $(window).height())) {
            if (moveX == false) {
                $(animateBox).animate({top: "-20"},500);
                $(animateBox).animate({top: "0"},500);
                $(animateBox).animate({top: "-15"},300);
                $(animateBox).animate({top: "0"},300);
                switch (flag){
                    case 1 :
                        move1 = true;
                        break;
                    case 2:
                        move2 = true;
                        break;
                    case  3:
                        move3 = true;
                        break;
                    case 4 :
                        move4 = true;
                        break;
                    case 5:
                        move5 = true;
                        break;
                    case  6:
                        move6 = true;
                        break;
                    case 7 :
                        move7 = true;
                        break;
                    case 8:
                        move8 = true;
                        break;
                }
            }
        }
    }
    function justMove(animateBox,moveX,flag) {
        if (moveX == false) {
            $(animateBox).animate({top: "-20"}, 500);
            $(animateBox).animate({top: "0"}, 500);
            $(animateBox).animate({top: "-15"}, 300);
            $(animateBox).animate({top: "0"}, 300);
            switch (flag){
                case 1 :
                    move1 = true;
                    break;
                case 2:
                    move2 = true;
                    break;
            }
        }
    }
    function justMove1(x,animateBox,moveX,falg) {
        if ( $(document).scrollTop() >= x ){
            if ( moveX == false ){
                $(animateBox).animate({top: "-20"}, 500);
                $(animateBox).animate({top: "0"}, 500);
                $(animateBox).animate({top: "-15"}, 300);
                $(animateBox).animate({top: "0"}, 300);
                switch (falg){
                    case 1 :
                        move1 = true;
                        break;
                    case 2:
                        move2 = true;
                        break;
                }
            }
        }
    }
    $(".jumpSellBox").hover(function () {
        $(this).find(".productExplain").stop().animate({height:"57px",opacity: 1})
    },function () {
        $(this).find(".productExplain").stop().animate({height:"20px",opacity: 0})
    });
    $(".sUp").hover(function () {
        $(this).find("p").stop().animate({height:"50px",opacity: 1})
    },function () {
        $(this).find("p").stop().animate({height:"20px",opacity: 0})
    });
    $("#bigUp").hover(function () {
        $(this).find("p").stop().animate({height:"50px",opacity: 1})
    },function () {
        $(this).find("p").stop().animate({height:"20px",opacity: 0})
    });
    $("#bigDown").hover(function () {
        $(this).find("p").stop().animate({height:"50px",opacity: 1})
    },function () {
        $(this).find("p").stop().animate({height:"20px",opacity: 0})
    });
    $(".sDnown").hover(function () {
        $(this).find("p").stop().animate({height:"50px",opacity: 1})
    },function () {
        $(this).find("p").stop().animate({height:"20px",opacity: 0})
    });

    if( $(window).scrollTop() <= 0 ){
        justMove("#imgBoxUpRight",move1,1);
        justMove(".sUp1",move2,2);
    }
    $(window).scroll(function () {
        animateMove($("#imgBoxUpRight").offset().top,move1,"#imgBoxUpRight",1);
        animateMove($("#imgBoxUpRight").offset().top,move2,".sUp1",2);
        animateMove(($("#imgBoxUpRight").offset().top),move3,".sUp2",3);
        animateMove(($("#bigDown").offset().top - 678),move4,"#bigDown",4);
        animateMove(($(".sDnown1").offset().top - 678),move5,".sDnown1",5);
        animateMove(($(".sDnown2").offset().top - 510),move6,".sDnown2",6);
        animateMove(($(".sDnown3").offset().top - 340),move7,".sDnown3",7);
        animateMove(($(".sDnown4").offset().top - 180),move8,".sDnown4",8);
        justMove1(600,".sUp2",move3,3);
    });
});