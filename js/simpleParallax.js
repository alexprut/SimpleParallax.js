$(function () {
  'use strict'

  var $parallaxGroups = $('.parallax-group')
  var _innerWidth = window.innerWidth / 2
  var  _innerHeight = window.innerHeight / 2
  var _xMousePos = 0
  var _yMousePos = 0
  var _yScollLastPos = 0

  console.log($parallaxGroups);
  console.log($parallaxGroups.html());


  function clamp (number, max) {
    return Math.min(Math.max(number, -max), max)
  }

  function _bindParallaxGroups () {
    console.log("binded");
    $parallaxGroups.each(function (index, parallaxGroup) {
      console.log("binding");
      var $parallaxGroup = $(parallaxGroup)
      var settings = {
        axis: $parallaxGroup.data('parallax-axis') || 'both',
        scope: $parallaxGroup.data('parallax-scope') || 'global',
        detect: $parallaxGroup.data('parallax-detect') || 'mousemove',
        maxShift: $parallaxGroup.data('parallax-max-shift') || 100
      }

      _bindParallaxItems($parallaxGroups, settings)
    })
  }

  function _paint ($parallaxGroup, settings) {
    window.requestAnimationFrame(function () {
      console.log("paint");
      $parallaxGroup.find('.parallax-item').each(function (index, parallaxItem) {
        var $parallaxItem = $(parallaxItem)
        var depth = $parallaxItem.data('parallax-depth') || 1

        var shiftX = -(_xMousePos - _innerWidth) / depth
        var shiftY = -(_yMousePos - _innerHeight) / depth

        shiftX = Math.round(clamp(shiftX, settings.maxShift) * 100) / 100
        shiftY = Math.round(clamp(shiftY, settings.maxShift) * 100) / 100

        $parallaxItem.css({
          'top': shiftY,
          'left': shiftX
        })
      })
    })
  }

  function updateMousePos (event) {
    _xMousePos = event.pageX
    _yMousePos = event.pageY
  }

  function updateScrollPos () {
    var current = $(window).scrollTop()
    _yMousePos = _yMousePos + (current - _yScollLastPos)
    _yScollLastPos = current
  }

  function _bindParallaxItems ($parallaxGroup, settings) {
    console.log(settings);
    if (settings.scope === 'global') {
      $(window).on('mousemove.parallax', function (event) {
        updateMousePos(event)
        _paint($parallaxGroup, settings)
      })
      $(window).on('scroll.parallax', function (event) {
        updateScrollPos()
        _paint($parallaxGroup, settings)
      })
    } else {
      $parallaxGroup.on('mousemove.parallax', _paint($parallaxGroup, settings))
      $parallaxGroup.on('scroll.parallax', _paint($parallaxGroup, settings))
    }
  }

  function _init () {
    console.log("init2");
    _bindParallaxGroups()
  }

  $(function () {
    console.log("init");
    _init()
  })
})
