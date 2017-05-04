$(function () {
  'use strict'

  var $parallaxGroups = $('.parallax')
  var _innerWidth = window.innerWidth / 2
  var _innerHeight = window.innerHeight / 2
  var _xMousePos = 0
  var _yMousePos = 0
  var _yScollLastPos = 0

  function clamp (number, max) {
    return Math.min(Math.max(number, -max), max)
  }

  function _bindParallaxGroups () {
    $parallaxGroups.each(function (index, parallaxGroup) {
      var $parallaxGroup = $(parallaxGroup)
      var settings = {
        axis: $parallaxGroup.data('parallax-axis') || 'both',
        scope: $parallaxGroup.data('parallax-scope') || 'global',
        detect: $parallaxGroup.data('parallax-detect') || 'mousemove',
        maxShift: $parallaxGroup.data('parallax-max-shift') || 1000
      }

      _bindParallaxItems($parallaxGroups, settings)
    })
  }

  function _paint ($parallaxGroup, settings) {
    window.requestAnimationFrame(function () {
      $parallaxGroup.find('.parallax__item').each(function (index, parallaxItem) {
        var $parallaxItem = $(parallaxItem)
        var depth = $parallaxItem.data('parallax-depth') || 1
        var offsetX = $parallaxItem.data('parallax-offset-x') || 0
        var offsetY = $parallaxItem.data('parallax-offset-y') || 0

        var shiftX = -(_xMousePos - _innerWidth) / depth
        var shiftY = -(_yMousePos - _innerHeight) / depth

        shiftX = (Math.round(clamp(shiftX, settings.maxShift) * 100) / 100) + offsetX
        shiftY = (Math.round(clamp(shiftY, settings.maxShift) * 100) / 100) + offsetY

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
    _bindParallaxGroups()
  }

  $(function () {
    _init()
  })
})
