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



//Page Loader : hide loader when all are loaded
$(window).load(function(){
    
    $('.soon-desc').removeClass('start');
    $('h1.soon').removeClass('start');
    $('h2.title').removeClass('start');
    $('.header-top').removeClass('start');
    $('.subscribe').removeClass('start');
    $('.dialog-btn').removeClass('start');
    $('.clock-layout').removeClass('start');


});