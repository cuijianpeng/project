(function() {
    'use strict';

    var _html = document.querySelector('html');
    var _viewport = document.querySelector('meta[name="viewport"]');
    var _container = document.querySelector('#container');
    var _devicePixelRatio = window.devicePixelRatio;

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
            // _targetFontsize = 100 * (_client.width / 375);
            _targetFontsize = 100 * (_client.height / 667);
        }
        _container.style.height = _client.height + 'px';
        _html.setAttribute('style', 'font-size:' + _targetFontsize + 'px;');
    }

}());