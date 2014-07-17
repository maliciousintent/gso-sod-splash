/*jshint browser:true, laxcomma:true, eqnull:true, indent:2, unused:true, undef:true, devel:true*/
/*globals $, Swipe*/


$(function () {
  'use strict';
  /*

  //  -- simple countdown --
  var _timer;

  function getDifferenceTime () {
    //  604800000 ms = 1 week
    //  86400000 ms = 1 day

    var _now = new Date().getTime();
    var _theDate = new Date('November 20, 2014 9:30 am').getTime();
    var _diff = _theDate - _now;
    var _countdownArray = humanizeDuration(_diff, 'it', 'array');
    //  -- [] = mesi, giorni, ore, minuti, secondi --

    //  more than 1 week
    if (_diff > 604800000) {
      $('#countdown > span').text(_countdownArray[0] + ' e ' + _countdownArray[1]);
    } else if (_diff > 86400000) {
    //  more than 1 day
      $('#countdown > span').text(_countdownArray[1] + ' e ' + _countdownArray[2]);
    } else {
    //  almost there!
      $('#countdown > span').text(_countdownArray[2] + ', ' + _countdownArray[3] + ' e ' + _countdownArray[4]);
    }
  }
  getDifferenceTime();

  _timer = setInterval(function () {
    getDifferenceTime();
  }, 1000);
  */



  //  -- on page load fade in elements --
  $('.fadeIn').addClass('show');


  //  -- speakers slider --
  window.speakersSlide = new Swipe(document.getElementById('speakers'), {
    speed: 1000,
    auto: 3000,
    continuous: true,
    disableScroll: false,
    stopPropagation: false,
    transitionEnd: function(i, el) {
      var _i = $(el).attr('data-slide-id');
      $('#speakers-thumbs span.pic').removeClass('active');
      $('#speakers-thumbs span.pic').eq(_i).addClass('active');
    }
  });

  $('#speakers-thumbs span.pic > img').click(function (e) {
    e.preventDefault();
    var _i = $(this).attr('data-speaker-id');
    window.speakersSlide.slide(_i, 1000);
    $('#speakers-thumbs span.pic').removeClass('active');
    $('#speakers-thumbs span.pic').eq(_i).addClass('active');
    return false;
  });



});