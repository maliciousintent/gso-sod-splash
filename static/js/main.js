/*jshint browser:true, laxcomma:true, eqnull:true, indent:2, unused:true, undef:true, devel:true*/
/*globals $*/


$(function () {
  'use strict';


  //  -- clock --
  $('.clock-countdown').downCount({
    date: '11/20/2014 12:00:00',
    offset: +1
  }, function () {
    var zerodayText = 'Ci siamo!';  
    $('.c-hour, .c-day', $('.clock-container')).remove();
    $('.clock-container').append('<div class="clock-zero"><h4 class="zeroday-txt">' + zerodayText + '</h4></div>');
  });

  $('.fadeIn').addClass('show');

});