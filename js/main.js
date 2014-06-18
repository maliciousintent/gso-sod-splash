/**************
Hexagon Clock script
Easy Customization Script
Dialogs Script
**************/


//clock
$('.clock-countdown').downCount({
    date: $('.site-config').attr('data-date'),
    offset: +1
}, function () {
    //callback here if finished
    //alert('YES, done!');
    
    var zerodayText = 'Ci siamo!';
    if($('.site-config').attr('data-zeroday-text') && ($('.site-config').attr('data-zeroday-text') != '')){
        $('.clock-container').text('');
        zerodayText = $('.site-config').attr('data-zeroday-text');        
        $('.clock-container').append("<div class='clock-zero'><h1 class='zeroday-txt'>"+zerodayText+"</div></h1>");
    }
}); 


if($('.site-config').attr('data-hrs-text') && ($('.site-config').attr('data-hrs-text') != '')){
    $('.clock-countdown .c-hour .metric').text($('.site-config').attr('data-hrs-text'));
}
if($('.site-config').attr('data-day-text') && ($('.site-config').attr('data-day-text') != '')){
    $('.clock-countdown .c-day .metric').text($('.site-config').attr('data-day-text'));
}




/*
//Site theme and color
var textColor1 = '#F8F9FA';
var textColor2 = '#111';
var emailBtnTextColor = '#111';
var background = '#ccc';
var backgroundMask = 'rgba(0,0,0,0)';
var dialogColor = '#111';
var launchericonColor = '#111';
var launcherTextColor = '#111';
var clockColor1 = '#111';
var clockColor2 = '#111';
var clockColor3 = '#111';
var clockTextColor1 = '#ff0101';
var clockTextColor2 = '#111';
var clockTextColor3 = '#111';
var clockTextColor4 = '#111';

if($('.site-config').attr('data-text-color2') && ($('.site-config').attr('data-text-color2') != '')){
    textColor2 = $('.site-config').attr('data-text-color2');
    $('h1.soon i.fa, .text-altcolor, p.soon-desc i.fa').css({"color":textColor2});
    $('.hex.day-hex').css({"background":textColor2});
    $('.subscribe .email-btn').css({"background":textColor2});
    $('.subscribe .input-elements').css({"border-color":textColor2});
    $('.footer .notice a.link').css({"color":textColor2});
}

if($('.site-config').attr('data-text-color1') && ($('.site-config').attr('data-text-color1') != '')){
    textColor1 = $('.site-config').attr('data-text-color1');
    $('h1.soon, .soon-desc, .h-text, .c-text, .min .metric, .hour .metric, .subscribe-btn p').css({"color":textColor1});
    $('.small-hex svg.hex-stroke.part path').css({"fill":textColor1,"stroke":textColor1});
    $('.small-hex svg.hex-stroke.full path').css({"fill":textColor1});
    $('.subscribe-btn').css({"border-color":textColor1});
    $('.subscribe .email-btn').css({"color":textColor1});
    $('.footer .notice').css({"color":textColor1});
    
    $('.s-block .small-hex.center .hex-container .h-text i.fa').css({"color":textColor2});
    
    $('.s-block').hover(function(){
            $('.s-block:hover .small-hex.center .hex-container .h-text i.fa').css({"color":textColor1});
        },
        function(){
            $('.s-block .small-hex.center .hex-container .h-text i.fa').css({"color":textColor2});    
    });
}
if($('.site-config').attr('data-email-btn-color') && ($('.site-config').attr('data-email-btn-color') != '')){
    emailBtnTextColor = $('.site-config').attr('data-email-btn-color');    
    $('.subscribe .email-btn').css({"color":emailBtnTextColor});
}
if($('.site-config').attr('data-icons-color') && ($('.site-config').attr('data-icons-color') != '')){
    launcherTextColor = $('.site-config').attr('data-icons-color');
//    $('.small-hex svg.hex-stroke.full path').css({"fill":launcherTextColor});
    $('.h-text').css({"color":launcherTextColor});
    $('.s-block').hover(function(){
            $('.s-block:hover .small-hex.center .hex-container .h-text i.fa').css({"color":launcherTextColor});
        },
        function(){
            $('.s-block .small-hex.center .hex-container .h-text i.fa').css({"color":textColor2});    
    });
}

if($('.site-config').attr('data-background') && ($('.site-config').attr('data-background') != '')){
    background = $('.site-config').attr('data-background');
    if(background.indexOf('url(') >= 0){        
        $('body').css({"background-image":background});
    }
    else{
        $('body').css({"background":background});
    }
}
if($('.site-config').attr('data-background-mask') && ($('.site-config').attr('data-background-mask') != '')){
    backgroundMask = $('.site-config').attr('data-background-mask');
    if(backgroundMask.indexOf('url(') >= 0){        
        $('.main-bg-mask').css({"background-image":backgroundMask});
    }
    else{
        $('.main-bg-mask').css({"background":backgroundMask});
    }
}

if($('.site-config').attr('data-dialog-color') && ($('.site-config').attr('data-dialog-color') != '')){
    dialogColor = $('.site-config').attr('data-dialog-color');
    $('.d-content').css({"background":dialogColor});
     $('.dh-text i.fa').css({"color":dialogColor});
}
if($('.site-config').attr('data-launchericon-color') && ($('.site-config').attr('data-launchericon-color') != '')){
    launchericonColor = $('.site-config').attr('data-launchericon-color');
    $('.s-block .small-hex.center .hex-container .h-text i.fa').css({"color":launchericonColor});
    
    $('.s-block').hover(function(){
            if($('.site-config').attr('data-launchertext-color') != ''){
                $('.s-block:hover .small-hex.center .hex-container .h-text i.fa').css({"color":launchericonColor});
            }
            else{
                $('.s-block:hover .small-hex.center .hex-container .h-text i.fa').css({"color":textColor1});
            }
        },
        function(){
            $('.s-block .small-hex.center .hex-container .h-text i.fa').css({"color":launchericonColor});    
    });
}


if($('.site-config').attr('data-clock-color1') && ($('.site-config').attr('data-clock-color1') != '')){
    clockColor1 = $('.site-config').attr('data-clock-color1');
    $('.hex.day-hex').css({"background":clockColor1});
}
if($('.site-config').attr('data-clock-color2') && ($('.site-config').attr('data-clock-color2') != '')){
    clockColor2 = $('.site-config').attr('data-clock-color2');
    $('.hex.hourmin-hex').css({"background":clockColor2});
}
if($('.site-config').attr('data-clock-color3') && ($('.site-config').attr('data-clock-color3') != '')){
    clockColor3 = $('.site-config').attr('data-clock-color3');
    $('.hex.sec-hex').css({"background":clockColor3});
}

if($('.site-config').attr('data-clock-textcolor1') && ($('.site-config').attr('data-clock-textcolor1') != '')){
    clockTextColor1 = $('.site-config').attr('data-clock-textcolor1') ;    
    $('.hex.day-hex .hex-content .number, .hex.day-hex .hex-content .metric').css({"color":clockTextColor1});
}
if($('.site-config').attr('data-clock-textcolor2') && ($('.site-config').attr('data-clock-textcolor2') != '')){
    clockTextColor2 = $('.site-config').attr('data-clock-textcolor2') ;    
    $('.hex.hourmin-hex .hex-content .number').css({"color":clockTextColor2});
}
if($('.site-config').attr('data-clock-textcolor3') && ($('.site-config').attr('data-clock-textcolor3') != '')){
    clockTextColor3 = $('.site-config').attr('data-clock-textcolor3') ;    
    $('.hex.sec-hex .hex-content .number, .hex.sec-hex .hex-content .metric').css({"color":clockTextColor3});
}
if($('.site-config').attr('data-clock-hrsmin-textcolor') && ($('.site-config').attr('data-clock-hrsmin-textcolor') != '')){
    clockTextColor4 = $('.site-config').attr('data-clock-hrsmin-textcolor') ;    
    $('.min .metric, .hour .metric').css({"color":clockTextColor4});
}

*/

//Page Loader : hide loader when all are loaded
$(window).load(function(){
    
    $('.soon-desc').removeClass('start');
    $('h1.soon').removeClass('start');
    $('.header-top').removeClass('start');
    $('.subscribe').removeClass('start');
    $('.dialog-btn').removeClass('start');
    $('.clock-layout').removeClass('start');


});