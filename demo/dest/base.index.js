(function () {
'use strict';

(function () {
    var _html = document.querySelector('html'),
        _viewport = document.querySelector('meta[name="viewport"]'),
        _container = document.querySelector('#container'),
        _devicePixelRatio = window.devicePixelRatio;

    var _default = {
        width: 414,
        height: 736
    };

    init();

    // fns
    function init() {
        pageReSize();
        window.addEventListener('resize', function () {
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
            // _targetFontsize = 100 * (_client.width / _default.width);
            _targetFontsize = 100 * (_client.height / _default.height);
        }
        // _container.style.height = _client.height + 'px';
        _html.setAttribute('style', 'font-size:' + _targetFontsize * 1 + 'px;');
    }
})();

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5pbmRleC5qcyIsInNvdXJjZXMiOlsiLi4vZW50cnkvYmFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG4gICAgdmFyIF9odG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLFxuICAgICAgICBfdmlld3BvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ2aWV3cG9ydFwiXScpLFxuICAgICAgICBfY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpLFxuICAgICAgICBfZGV2aWNlUGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuXG4gICAgdmFyIF9kZWZhdWx0ID0ge1xuICAgICAgICB3aWR0aDogNDE0LFxuICAgICAgICBoZWlnaHQ6IDczNlxuICAgIH07XG5cblxuXG5cbiAgICBpbml0KCk7XG5cblxuXG5cblxuXG5cblxuXG4gICAgLy8gZm5zXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgcGFnZVJlU2l6ZSgpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHBhZ2VSZVNpemUsIDgpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFnZVJlU2l6ZShldnQpIHtcbiAgICAgICAgdmFyIF9kb2N1bWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgICAgIF9kZXZpY2VQaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgICAgIHZhciBfY2xpZW50ID0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBfZG9jdW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBfZG9jdW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX3RhcmdldEZvbnRzaXplO1xuXG4gICAgICAgIC8vIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZHByJywgTWF0aC5mbG9vcihfZGV2aWNlUGl4ZWxSYXRpbykpO1xuXG4gICAgICAgIGlmIChfY2xpZW50LndpZHRoIC8gX2NsaWVudC5oZWlnaHQgPD0gX2RlZmF1bHQud2lkdGggLyBfZGVmYXVsdC5oZWlnaHQpIHtcbiAgICAgICAgICAgIF90YXJnZXRGb250c2l6ZSA9IDEwMCAqIChfY2xpZW50LndpZHRoIC8gX2RlZmF1bHQud2lkdGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gX3RhcmdldEZvbnRzaXplID0gMTAwICogKF9jbGllbnQud2lkdGggLyBfZGVmYXVsdC53aWR0aCk7XG4gICAgICAgICAgICBfdGFyZ2V0Rm9udHNpemUgPSAxMDAgKiAoX2NsaWVudC5oZWlnaHQgLyBfZGVmYXVsdC5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIF9jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gX2NsaWVudC5oZWlnaHQgKyAncHgnO1xuICAgICAgICBfaHRtbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2ZvbnQtc2l6ZTonICsgX3RhcmdldEZvbnRzaXplICogMSArICdweDsnKTtcbiAgICB9XG59KSgpOyJdLCJuYW1lcyI6WyJfaHRtbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIl92aWV3cG9ydCIsIl9jb250YWluZXIiLCJfZGV2aWNlUGl4ZWxSYXRpbyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJfZGVmYXVsdCIsImluaXQiLCJhZGRFdmVudExpc3RlbmVyIiwicGFnZVJlU2l6ZSIsImV2dCIsIl9kb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsIl9jbGllbnQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsIl90YXJnZXRGb250c2l6ZSIsIndpZHRoIiwiaGVpZ2h0Iiwic2V0QXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiOzs7QUFBQSxDQUFDLFlBQVc7UUFDSkEsUUFBUUMsU0FBU0MsYUFBVCxDQUF1QixNQUF2QixDQUFaO1FBQ0lDLFlBQVlGLFNBQVNDLGFBQVQsQ0FBdUIsdUJBQXZCLENBRGhCO1FBRUlFLGFBQWFILFNBQVNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FGakI7UUFHSUcsb0JBQW9CQyxPQUFPQyxnQkFIL0I7O1FBS0lDLFdBQVc7ZUFDSixHQURJO2dCQUVIO0tBRlo7Ozs7O2FBbUJTQyxJQUFULEdBQWdCOztlQUVMQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFXO3VCQUM5QkMsVUFBWCxFQUF1QixDQUF2QjtTQURKLEVBRUcsS0FGSDs7O2FBS0tBLFVBQVQsQ0FBb0JDLEdBQXBCLEVBQXlCO1lBQ2pCQyxZQUFZWixTQUFTYSxlQUF6QjtZQUNJVCxvQkFBb0JDLE9BQU9DLGdCQUQvQjtZQUVJUSxVQUFVO21CQUNDRixVQUFVRyxXQURYO29CQUVFSCxVQUFVSTtTQUYxQjtZQUlJQyxlQUpKOzs7O1lBUUlILFFBQVFJLEtBQVIsR0FBZ0JKLFFBQVFLLE1BQXhCLElBQWtDWixTQUFTVyxLQUFULEdBQWlCWCxTQUFTWSxNQUFoRSxFQUF3RTs4QkFDbEQsT0FBT0wsUUFBUUksS0FBUixHQUFnQlgsU0FBU1csS0FBaEMsQ0FBbEI7U0FESixNQUVPOzs4QkFFZSxPQUFPSixRQUFRSyxNQUFSLEdBQWlCWixTQUFTWSxNQUFqQyxDQUFsQjs7O2NBR0VDLFlBQU4sQ0FBbUIsT0FBbkIsRUFBNEIsZUFBZUgsa0JBQWtCLENBQWpDLEdBQXFDLEtBQWpFOztDQWxEUjs7OzsifQ==
