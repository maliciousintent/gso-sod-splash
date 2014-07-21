/*jshint browser:true, laxcomma:true, eqnull:true, indent:2, unused:true, undef:true, devel:true*/
/*globals $, Swipe, isMobile*/


$(function () {
  'use strict';


  //  -- on page load fade in elements --
  $('.fadeIn').addClass('show');


  //  -- speakers --

  $('.single-speaker .pic, .single-speaker h2').click(function (e) {
    e.preventDefault();
    if (!$(this).hasClass('active')) {
      $('#speakers .text').slideUp(500);
      $('#speakers .single-speaker .pic, #speakers .single-speaker h2').removeClass('active');
      $('.text', $(this).parent()).slideDown(500);
      $('.pic, h2', $(this).parent()).addClass('active');
    } else {
      $('#speakers .text').slideUp(500);
      $('#speakers .single-speaker .pic, #speakers .single-speaker h2').removeClass('active');
    }
    return false;
  });


  //  -- check scroll position --
  window.addEventListener('scroll', function () {
    var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    
    if (top <= ($('#main').height() + 20)) {
      $('.gradient').removeClass('with-text');
    } else {
      $('.gradient').addClass('with-text');
    }

    if (isMobile.any || document.documentElement.clientWidth <= 769) {
      if (top > 250) {
        $('#top-mobile').addClass('show');
      } else {
        $('#top-mobile').removeClass('show');
      }
    }
  });


  $('#top-mobile li').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    
    $('#menu li').removeClass('active');

    return false;
  });


  //  -- menu click --
  $('#menu li').click(function (e) {
    e.preventDefault();

    if (!$(this).hasClass('active')) {
      var _whereToScroll = $('#' + $(this).attr('data-click')).position().top;

      $('html, body').animate({
        scrollTop: _whereToScroll - 50
      }, 500);

      $('#menu li').removeClass('active');
      $(this).addClass('active');      
    }

    return false;
  });


});