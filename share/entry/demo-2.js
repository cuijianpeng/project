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
        _devicePixelRatio = window.devicePixelRatio;
    var _client = {
            width: _document.clientWidth,
            height: _document.clientHeight
        },
        _targetFontsize;

    document.documentElement.setAttribute('data-dpr', Math.floor(_devicePixelRatio));

    if (_client.width / _client.height <= _default.width / _default.height) {
        _targetFontsize = 100 * (_client.width / 375);
    } else {
        _targetFontsize = 100 * (_client.width / 375);
        // _targetFontsize = 100 * (_client.height / 667);
    }
    _html.setAttribute('style', 'font-size:' + _targetFontsize + 'px;');
}