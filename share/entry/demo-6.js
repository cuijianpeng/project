var _html = document.querySelector('html'),
    _viewport = document.querySelector('meta[name="viewport"]'),
    _container = document.querySelector('#container'),
    _devicePixelRatio = window.devicePixelRatio;

var _default = {
    width: 375,
    height: 667
};


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