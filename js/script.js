var pixelRatio = !!window.devicePixelRatio ? window.devicePixelRatio : 1;
$(window).on("load", function() {
    if (pixelRatio > 1) {
        $('#top-chest').attr('src', $('#top-chest').attr('src').replace(".png","@2x.png"));
//        $('#gold-gift').attr('src', $('#gold-gift').attr('src').replace(".png","@2x.png"));
        $('body').addClass('retina');
    }
});

$(function () {
//    timer start on load document
    startCount();

    $('.lock').tooltip();
    $('.eraser').tooltip();
    $('.painter').tooltip();
    $('.pencil').tooltip();
    $('.cog-icon').tooltip();
    $('.brush-icon-wrapper').tooltip();
    $('.btn').tooltip();

//    INVITE USER
    $('.add-user').click(function () {
        $('#placeholder-6').html('<div class="user-frame"><div class="user-gift-image"><div class="gift"></div></div><div class="photo"><img src="images/photo_right_2@2x.jpg" width="59" height="58"/></div><div class="add-gift add-gift-left"><div class="icon-add-gift-default-bg"><div class="gift-default-bg"><div class="icon-add-gift-default"></div></div></div></div><span class="username" id="username-7">роман</span></div>');
        $('.test').html('Роман здесь');
//IF after click username length >10
        if (($("#username-7").length > 0)) {
            var user_7 = $('#username-7').html();
            if (user_7.length > 10) {
                var username7 = user_7.slice(0, 10);
                $('#username-7').html(username7 + ' ...');
            }
        }
    });

    $('.sound-on-off').click(function () {
        $('.current-track').html('L. Utesov- U Samovara');
        if (($(".current-track").length > 0)) {
            var track = $('.current-track').html();
            if (track.length > 30) {
                var tracklength = track.slice(0, 30);
                $('.current-track').html(tracklength + ' ...');
                $('.current-audio').css({ 'left': '-15px' });
                $('.user-frame-active').css({ 'left': '-15px' });
            }
            else {
                $('.current-audio').css({ 'left': '0' });
                $('.user-frame-active').css({ 'left': '0' });
            }
        }
    });

//    SWITCH LAYOUT

//    $('#button-add-coins').click(function () {
//        $('.box-content-empty-blur').fadeIn( "fast");
//        $('.box-content-empty-blur').removeClass( "hide");
//        $('.box-content-paint-blur').fadeToggle( "fast");
//
//    });
//    FUNCTION FORMAT NUMBER WITH COMMA
    function CommaFormatted(yourNumber) {
        var n = yourNumber.toString().split(".");
        n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        //Combines the two sections
        return n.join(".");
    }

    strBalance = $('#balance-amount').html();
    strScore1 = $('.score-1').html();
    strScore2 = $('.score-2').html();
    var letters = strBalance.length;


    var balance = CommaFormatted(strBalance);
    $('#balance-amount').html(balance);

    var score1 = CommaFormatted(strScore1);
    $('.score-1').html(score1);

    var score2 = CommaFormatted(strScore2);
    $('.score-2').html(score2);


    if(letters == 1) {
        $('.green-plus-wrapper').css({ 'right': '-23px' });
        $('.green-plus-wrapper').css({ 'top': '-55px' });
    }

    if (letters == 2) {
        $('.coin-balance-big').css({ 'width': '66px' });
        $('.coin-balance-bg').css({ 'width': '75px' });
        $('.coin-balance-wrapper').css({ 'width': '75px' });
        $('.coin-balance-wrapper').css({ 'left': '720px' });
        $('.green-plus-wrapper').css({ 'right': '-60px' });
        $('.green-plus-wrapper').css({ 'top': '-15px' });
    }
    else if (letters == 3 ) {
        $('.coin-balance-big').css({ 'width': '78px' });
        $('.coin-balance-bg').css({ 'width': '80px' });
        $('.coin-balance-wrapper').css({ 'width': '86px' });
        $('.coin-balance-wrapper').css({ 'left': '713px' });
        $('.green-plus-wrapper').css({ 'right': '-60px' });
        $('.green-plus-wrapper').css({ 'top': '-15px' });
    }
    else if (letters == 4) {
        $('.coin-balance-big').css({ 'width': '103px' });
        $('.coin-balance-bg').css({ 'width': '108px' });
        $('.coin-balance-wrapper').css({ 'width': '109px' });
        $('.coin-balance-wrapper').css({ 'left': '688px' });
        $('.green-plus-wrapper').css({ 'right': '-60px' });
        $('.green-plus-wrapper').css({ 'top': '-15px' });
    }
    else if (letters == 5) {
        $('.coin-balance-big').css({ 'width': '114px' });
        $('.coin-balance-bg').css({ 'width': '122px' });
        $('.coin-balance-wrapper').css({ 'width': '134px' });
        $('.coin-balance-wrapper').css({ 'left': '674px' });
        $('.green-plus-wrapper').css({ 'right': '-60px' });
        $('.green-plus-wrapper').css({ 'top': '-15px' });
    }
    else if (letters == 6) {
        $('.coin-balance-big').css({ 'width': '131px' });
        $('.coin-balance-bg').css({ 'width': '139px' });
        $('.coin-balance-wrapper').css({ 'width': '150px' });
        $('.coin-balance-wrapper').css({ 'left': '658px' });
        $('.green-plus-wrapper').css({ 'right': '-60px' });
        $('.green-plus-wrapper').css({ 'top': '-15px' });
    }
    else if (letters == 7) {
        $('.balance-amount').css({ 'font-size': '18.5px' });
        $('.balance-amount').css({ 'top': '0' });
        $('.coin-balance-big').css({ 'width': '131px' });
        $('.coin-balance-bg').css({ 'width': '139px' });
        $('.coin-balance-wrapper').css({ 'width': '150px' });
        $('.coin-balance-wrapper').css({ 'left': '658px' });
        $('.green-plus-wrapper').css({ 'right': '-60px' });
        $('.green-plus-wrapper').css({ 'top': '-9px' });
        $('.coin-gold-icon').css({ 'top': '-30px' });
    }
    else if (letters == 8) {
        $('.balance-amount').css({ 'font-size': '17px' });
        $('.balance-amount').css({ 'top': '2px' });
        $('.coin-balance-big').css({ 'width': '131px' });
        $('.coin-balance-bg').css({ 'width': '139px' });
        $('.coin-balance-wrapper').css({ 'width': '150px' });
        $('.coin-balance-wrapper').css({ 'left': '658px' });
        $('.green-plus-wrapper').css({ 'right': '-60px' });
        $('.green-plus-wrapper').css({ 'top': '-6px' });
        $('.coin-gold-icon').css({ 'top': '-27px' });
    }
    else if (letters == 9) {
        $('.balance-amount').css({ 'font-size': '16px' });
        $('.balance-amount').css({ 'top': '2px' });
        $('.coin-balance-big').css({ 'width': '131px' });
        $('.coin-balance-bg').css({ 'width': '139px' });
        $('.coin-balance-wrapper').css({ 'width': '150px' });
        $('.coin-balance-wrapper').css({ 'left': '658px' });
        $('.green-plus-wrapper').css({ 'right': '-60px' });
        $('.green-plus-wrapper').css({ 'top': '-4px' });
        $('.coin-gold-icon').css({ 'top': '-25px' });
    }
    else if (letters == 10) {
        $('.balance-amount').css({ 'font-size': '13px' });
        $('.balance-amount').css({ 'top': '3.5px' });
        $('.coin-balance-big').css({ 'width': '131px' });
        $('.coin-balance-bg').css({ 'width': '139px' });
        $('.coin-balance-wrapper').css({ 'width': '150px' });
        $('.coin-balance-wrapper').css({ 'left': '658px' });
        $('.green-plus-wrapper').css({ 'right': '-60px' });
        $('.green-plus-wrapper').css({ 'top': '-3px' });
        $('.coin-gold-icon').css({ 'top': '-23px' });
    }
    else if (letters == 11) {
        $('.balance-amount').css({ 'font-size': '12.1px' });
        $('.balance-amount').css({ 'top': '3.5px' });
        $('.coin-balance-big').css({ 'width': '131px' });
        $('.coin-balance-bg').css({ 'width': '139px' });
        $('.coin-balance-wrapper').css({ 'width': '150px' });
        $('.coin-balance-wrapper').css({ 'left': '658px' });
        $('.green-plus-wrapper').css({ 'right': '-60px' });
        $('.green-plus-wrapper').css({ 'top': '-2px' });
        $('.coin-gold-icon').css({ 'top': '-23px' });
    }

//USER SHORT TEXT
//    If username length >10, username name = username...

    if (($("#username-1").length > 0)) {
        var user_1 = $('#username-1').html();
        if (user_1.length > 10) {
            var username1 = user_1.slice(0, 10);
            $('#username-1').html(username1 + ' ...');
        }
    }

    if (($("#username-2").length > 0)) {
        var user_2 = $('#username-2').html();
        if (user_2.length > 10) {
            var username2 = user_2.slice(0, 10);
            $('#username-2').html(username2 + ' ...');
        }
    }

    if (($("#username-3").length > 0)) {
        var user_3 = $('#username-3').html();
        if (user_3.length > 10) {
            var username3 = user_3.slice(0, 10);
            $('#username-3').html(username3 + ' ...');
        }
    }

    if (($("#username-4").length > 0)) {
        var user_4 = $('#username-4').html();
        if (user_4.length > 10) {
            var username4 = user_4.slice(0, 10);
            $('#username-4').html(username4 + ' ...');
        }
    }

    if (($("#username-5").length > 0)) {
        var user_5 = $('#username-5').html();
        if (user_5.length > 10) {
            var username5 = user_5.slice(0, 10);
            $('#username-5').html(username5 + ' ...');
        }
    }

    if (($("#username-6").length > 0)) {
        var user_6 = $('#username-6').html();
        if (user_6.length > 10) {
            var username6 = user_6.slice(0, 10);
            $('#username-6').html(username6 + ' ...');
        }
    }

    if (($("#username-7").length > 0)) {
        var user_7 = $('#username-7').html();
        if (user_7.length > 10) {
            var username7 = user_7.slice(0, 10);
            $('#username-7').html(username7 + ' ...');
        }
    }

    if (($("#current-user").length > 0)) {
        var userCurrent = $('#current-user').html();
        if (userCurrent.length > 10) {
            var username = userCurrent.slice(0, 10);
            $('#current-user').html(username + ' ...');
        }
    }

    if (($(".current-track").length > 0)) {
        var track = $('.current-track').html();
        if (track.length > 26) {
            var tracklength = track.slice(0, 26);
            $('.current-track').html(tracklength + ' ...');
            $('.current-audio').css({ 'left': '-15px' });
            $('.user-frame-active').css({ 'left': '-15px' });
        }
        else {
            $('.current-audio').css({ 'left': '0' });
            $('.user-frame-active').css({ 'left': '0' });
        }
    }
// switcher
    $(".brush-icon-wrapper").click(function(e) {
        $('.brush-icon-wrapper').removeClass('active');
        $(this).addClass('active');
    });

    $(".brush-form-wrapper").click(function(e) {
        $('.brush-form-wrapper').removeClass('active');
        $(this).addClass('active');
    });

});





