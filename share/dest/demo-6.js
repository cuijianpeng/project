(function () {
'use strict';

var _html = document.querySelector('html');
var _viewport = document.querySelector('meta[name="viewport"]');
var _container = document.querySelector('#container');
var _devicePixelRatio = window.devicePixelRatio;

function init() {
    pageReSize();
    window.addEventListener('resize', function() {
        setTimeout(pageReSize, 8);
    }, false);
}

init();







// --
function pageReSize(evt) {
    var _document = document.documentElement,
        _devicePixelRatio = window.devicePixelRatio,
        _viewportContent = _viewport.getAttribute('content').replace(/\d+\.\d*/gi, function($1, $2) {
            return _devicePixelRatio;
        });
    _viewport.setAttribute('content', _viewportContent);
}

}());
