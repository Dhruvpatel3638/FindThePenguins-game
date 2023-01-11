$(document).ready(function () {
    var maxScore = 0;
    var click_count = 0;
    var score_count = 0;
    if (click_count == 0) {
        $("#score").text(click_count);
    }

    $(function () {
        var parent = $("#id");
        var divs = parent.children();
        while (divs.length) {
            parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);//https://www.w3schools.com/js/js_random.asp 
        }
    });


    var aclick = $(".p");
    var scorebord = 0;


    $('.p').click(function () {
        scorebord += 1;
        click_count = 1;
        if (scorebord > maxScore) {
            maxScore = scorebord;
        }
        $("#score").text("Score:"+scorebord);
        var max_score = "<br>Max:" + maxScore;

        $("#score").append(max_score);

        var A1 = $(this).attr('id');
    });



    $("#penguin1").on('click', function () {
        $(this).css("background-image", "url(../images/penguin_1.png)"); //https://api.jquery.com/css/ (reference to use css property )

        var audio = $("#penguineaudio")[0];
        audio.play();

        /*penguin image*/

        $(this).css({
            "background-image": "url(./images/penguin_1.png)",              //https://api.jquery.com/css/
            "pointer-events": "none"
        });
        score_check();

    });


    $("#penguin2").on('click', function () {
        $(this).css("background-image", "url(../images/penguin_2.png)");

        var audio = $("#penguineaudio")[0];
        audio.play();

        /*penguin image*/

        $(this).css({
            "background-image": "url(./images/penguin_2.png)",
            "pointer-events": "none"
        });
        score_check();
    });


    $("#penguin3").on('click', function () {
        $(this).css("background-image", "url(../images/penguin_3.png)");

        var audio = $("#penguineaudio")[0];
        audio.play();

        /*penguin image*/

        $(this).css({
            "background-image": "url(./images/penguin_3.png)",
            "pointer-events": "none"
        });
        score_check();
    });


    $("#penguin4").on('click', function () {
        $(this).css("background-image", "url(../images/penguin_4.png)");

        var audio = $("#penguineaudio")[0];
        audio.play();

        /*penguin image*/

        $(this).css({
            "background-image": "url(./images/penguin_4.png)",
            "pointer-events": "none"
        });
        score_check();
    });


    $("#penguin5").on('click', function () {
        $(this).css("background-image", "url(../images/penguin_5.png)");

        var audio = $("#penguineaudio")[0];
        audio.play();

        /*penguin image*/

        $(this).css({
            "background-image": "url(./images/penguin_5.png)",
            "pointer-events": "none"
        });
        score_check();
    });


    $("#penguin6").on('click', function () {
        $(this).css("background-image", "url(../images/penguin_6.png)");

        var audio = $("#penguineaudio")[0];
        audio.play();

        /*penguin image*/

        $(this).css({
            "background-image": "url(./images/penguin_6.png)",
            "pointer-events": "none"
        });
        score_check();
    });


    $("#penguin7").on('click', function () {
        $(this).css("background-image", "url(../images/penguin_7.png)");


        var audio = $("#penguineaudio")[0];
        audio.play();

        /*penguin image*/

        $(this).css({
            "background-image": "url(./images/penguin_7.png)",
            "pointer-events": "none"
        });
        score_check();
    });


    $("#penguin8").on('click', function () {
        $(this).css("background-image", "url(../images/penguin_8.png)");

        var audio = $("#penguineaudio")[0];
        audio.play();

        /*penguin image*/

        $(this).css({
            "background-image": "url(./images/penguin_8.png)",
            "pointer-events": "none"
        });
        score_check();
    });


    $("#yeti").mousedown(function () {
        $(this).css("background-image", "url(./images/yeti.png)");
    });


    //changed from mousedown to click
    $("#yeti").on('click', function () {
        var audioYeti = $("#yetiaudio")[0];
        audioYeti.play();

        alert("YAAAAA! your score is :" + scorebord);
        score_count = 0;
        score_reset();
        moundcalling();
    });


    var score_check = function () {
        score_count++;
        if (score_count % 8 == 0) {
            setTimeout(function(){
                alert("Hoohaahaa !!! YOU SURVIVED Till The End !!!..... Your Score is : " + scorebord + "\nThis Game is going to reset NOW!");
            },500);

            setTimeout(function(){
                 maxScore = 0;
            score_count = 0;
            score_reset();
            moundcalling();
            },520);
        }
    }

    var score_reset = function () {
        scorebord = 0;
        /* reset score*/
        $("#score").text("0");
        var max_score_restart = "<br>Max :" + maxScore;
        $("#score").append(max_score_restart);
    }


    var moundcalling = function () {
        $(function () {
            var parent = $("#id");
            var divs = parent.children();
            while (divs.length) {
                parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);

            }
        });


        $("#penguin1").css({
            "background-image": "url(/images/mound_1.png)",
            "pointer-events": "auto"
        });    //https://api.jquery.com/css/


        $("#penguin2").css({
            "background-image": "url(/images/mound_2.png)",
            "pointer-events": "auto"
        });


        $("#penguin3").css({
            "background-image": "url(/images/mound_3.png)",
            "pointer-events": "auto"
        });


        $("#penguin4").css({
            "background-image": "url(/images/mound_4.png)",
            "pointer-events": "auto"
        });


        $("#penguin5").css({
            "background-image": "url(/images/mound_5.png)",
            "pointer-events": "auto"
        });


        $("#penguin6").css({
            "background-image": "url(/images/mound_6.png)",
            "pointer-events": "auto"
        });


        $("#penguin7").css({
            "background-image": "url(/images/mound_7.png)",
            "pointer-events": "auto"
        });


        $("#penguin8").css({
            "background-image": "url(/images/mound_8.png)",
            "pointer-events": "auto"
        });


        $("#yeti").css({
            "background-image": "url(/images/mound_9.png)",
            "pointer-events": "auto"
        });
    }


});
