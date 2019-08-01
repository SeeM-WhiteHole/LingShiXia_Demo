$(document).ready(function () {
    var move1 = false;
    var move2 = false;
    var x = $("#collectionTwo").offset().top;
    var y = $("#collectionThree").offset().top;
    if ( $(window).scrollTop() <= 0 ){
        if (move1 == false) {
            $("#collectionTwo img").animate({left: "20"}, 300);
            $("#collectionTwo div").animate({left: "-20"}, 300);
            $("#collectionTwo img").animate({left: "0"}, 300);
            $("#collectionTwo div").animate({left: "0"}, 300);
            $("#collectionTwo img").animate({left: "15"}, 300);
            $("#collectionTwo div").animate({left: "-15"}, 300);
            $("#collectionTwo img").animate({left: "0"}, 300);
            $("#collectionTwo div").animate({left: "0"}, 300);
            move1 = true;
        }
    }
    $(window).scroll(function () {
        if (x >= $(window).scrollTop() && x < ($(window).scrollTop() + $(window).height())) {
                if (move1 == false) {
                    $("#collectionTwo img").animate({left: "20"}, 500);
                    $("#collectionTwo div").animate({left: "-20"}, 500);
                    $("#collectionTwo img").animate({left: "0"}, 500);
                    $("#collectionTwo div").animate({left: "0"}, 500);
                    $("#collectionTwo img").animate({left: "15"}, 300);
                    $("#collectionTwo div").animate({left: "-15"}, 300);
                    $("#collectionTwo img").animate({left: "0"}, 300);
                    $("#collectionTwo div").animate({left: "0"}, 300);
                    move1 = true;
                }
        }else if ((x+320) >= $(window).scrollTop() && (x+320) < ($(window).scrollTop() + $(window).height())){
            if (move1 == false) {
                $("#collectionTwo img").animate({left: "20"}, 500);
                $("#collectionTwo div").animate({left: "-20"}, 500);
                $("#collectionTwo img").animate({left: "0"}, 500);
                $("#collectionTwo div").animate({left: "0"}, 500);
                $("#collectionTwo img").animate({left: "15"}, 300);
                $("#collectionTwo div").animate({left: "-15"}, 300);
                $("#collectionTwo img").animate({left: "0"}, 300);
                $("#collectionTwo div").animate({left: "0"}, 300);
                move1 = true;
            }
        }
        if (y >= $(window).scrollTop() && y < ($(window).scrollTop() + $(window).height())) {
            if (move2 == false) {
                $("#collectionThree img").animate({left: "20"}, 500);
                $("#collectionThree div").animate({left: "-20"}, 500);
                $("#collectionThree img").animate({left: "0"}, 500);
                $("#collectionThree div").animate({left: "0"}, 500);
                $("#collectionThree img").animate({left: "15"}, 300);
                $("#collectionThree div").animate({left: "-15"}, 300);
                $("#collectionThree img").animate({left: "0"}, 300);
                $("#collectionThree div").animate({left: "0"}, 300);
                move2 = true;
            }
        }else if ((y+320) >= $(window).scrollTop() && (y+320) < ($(window).scrollTop() + $(window).height())){
            if (move2 == false) {
                $("#collectionThree img").animate({left: "20"}, 500);
                $("#collectionThree div").animate({left: "-20"}, 500);
                $("#collectionThree img").animate({left: "0"}, 500);
                $("#collectionThree div").animate({left: "0"}, 500);
                $("#collectionThree img").animate({left: "15"}, 300);
                $("#collectionThree div").animate({left: "-15"}, 300);
                $("#collectionThree img").animate({left: "0"}, 300);
                $("#collectionThree div").animate({left: "0"}, 300);
                move2 = true;
            }
        }
        else if ( $(document).scrollTop() >= 200 ){
            if ( move2 == false ){
                $("#collectionThree img").animate({left:"20"},500);
                $("#collectionThree div").animate({left:"-20"},500);
                $("#collectionThree img").animate({left:"0"},500);
                $("#collectionThree div").animate({left:"0"},500);
                $("#collectionThree img").animate({left: "15"}, 300);
                $("#collectionThree div").animate({left: "-15"}, 300);
                $("#collectionThree img").animate({left: "0"}, 300);
                $("#collectionThree div").animate({left: "0"}, 300);
                move2 = true;
            }
        }
    });
});