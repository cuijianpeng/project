(function() {
    var _html = document.querySelector('html'),
        _viewport = document.querySelector('meta[name="viewport"]'),
        _container = document.querySelector('#container'),
        _devicePixelRatio = window.devicePixelRatio;

    var _default = {
        width: 640,
        height: 1210
    };




    init();









    // fns
    function init() {
        pageReSize();
        window.addEventListener('resize', function() {
            setTimeout(pageReSize, 8);
        }, false);
    }

    function pageReSize(evt) {
        var _document = document.documentElement,
            _devicePixelRatio = window.devicePixelRatio;
        var _client = {
                width: _document.clientWidth,
                height: _document.clientHeight
            },
            _targetFontsize;

        // document.documentElement.setAttribute('data-dpr', Math.floor(_devicePixelRatio));

        if (_client.width / _client.height <= _default.width / _default.height) {
            _targetFontsize = 100 * (_client.width / _default.width);
        } else {
            _targetFontsize = 100 * (_client.width / _default.width);
            // _targetFontsize = 100 * (_client.height / _default.height);
        }
        // _container.style.height = _client.height + 'px';
        _html.setAttribute('style', 'font-size:' + _targetFontsize * 1 + 'px;');
    }
})();