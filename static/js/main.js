/*jshint browser:true, laxcomma:true, eqnull:true, indent:2, unused:true, undef:true, devel:true*/
/*globals $*/


$(function () {
  'use strict';
  var _timer;

  /*
  //  -- clock --
  $('.clock-countdown').downCount({
    date: '11/20/2014 11:00:00',
    offset: +1
  }, function () {
    var zerodayText = 'Ci siamo!';  
    $('.c-hour, .c-day', $('.clock-container')).remove();
    $('.clock-container').append('<div class="clock-zero"><h4 class="zeroday-txt">' + zerodayText + '</h4></div>');
  });
  */

  //  -- simple countdown --

  function getDifferenceTime () {

    var _now = new Date().getTime();
    var _theDate = new Date('November 20, 2014 9:30 am').getTime();

    console.log(humanizeDuration((_theDate - _now), 'it', 'array'));

  }

  _timer = setInterval(function () {
    getDifferenceTime();
  }, 1000);


  $('.fadeIn').addClass('show');

});