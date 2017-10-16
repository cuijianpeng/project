(function () {
'use strict';

(function () {
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
            _targetFontsize = 100 * (_client.width / _default.width);
            // _targetFontsize = 100 * (_client.height / _default.height);
        }
        // _container.style.height = _client.height + 'px';
        _html.setAttribute('style', 'font-size:' + _targetFontsize * 1 + 'px;');
    }
})();

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZXMiOlsiLi4vZW50cnkvYmFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG4gICAgdmFyIF9odG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLFxuICAgICAgICBfdmlld3BvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ2aWV3cG9ydFwiXScpLFxuICAgICAgICBfY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpLFxuICAgICAgICBfZGV2aWNlUGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuXG4gICAgdmFyIF9kZWZhdWx0ID0ge1xuICAgICAgICB3aWR0aDogNjQwLFxuICAgICAgICBoZWlnaHQ6IDEyMTBcbiAgICB9O1xuXG5cblxuXG4gICAgaW5pdCgpO1xuXG5cblxuXG5cblxuXG5cblxuICAgIC8vIGZuc1xuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHBhZ2VSZVNpemUoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChwYWdlUmVTaXplLCA4KTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhZ2VSZVNpemUoZXZ0KSB7XG4gICAgICAgIHZhciBfZG9jdW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICAgICAgICBfZGV2aWNlUGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuICAgICAgICB2YXIgX2NsaWVudCA9IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogX2RvY3VtZW50LmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogX2RvY3VtZW50LmNsaWVudEhlaWdodFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF90YXJnZXRGb250c2l6ZTtcblxuICAgICAgICAvLyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWRwcicsIE1hdGguZmxvb3IoX2RldmljZVBpeGVsUmF0aW8pKTtcblxuICAgICAgICBpZiAoX2NsaWVudC53aWR0aCAvIF9jbGllbnQuaGVpZ2h0IDw9IF9kZWZhdWx0LndpZHRoIC8gX2RlZmF1bHQuaGVpZ2h0KSB7XG4gICAgICAgICAgICBfdGFyZ2V0Rm9udHNpemUgPSAxMDAgKiAoX2NsaWVudC53aWR0aCAvIF9kZWZhdWx0LndpZHRoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90YXJnZXRGb250c2l6ZSA9IDEwMCAqIChfY2xpZW50LndpZHRoIC8gX2RlZmF1bHQud2lkdGgpO1xuICAgICAgICAgICAgLy8gX3RhcmdldEZvbnRzaXplID0gMTAwICogKF9jbGllbnQuaGVpZ2h0IC8gX2RlZmF1bHQuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBfY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IF9jbGllbnQuaGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgX2h0bWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdmb250LXNpemU6JyArIF90YXJnZXRGb250c2l6ZSAqIDEgKyAncHg7Jyk7XG4gICAgfVxufSkoKTsiXSwibmFtZXMiOlsiX2h0bWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJfdmlld3BvcnQiLCJfY29udGFpbmVyIiwiX2RldmljZVBpeGVsUmF0aW8iLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwiX2RlZmF1bHQiLCJpbml0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhZ2VSZVNpemUiLCJldnQiLCJfZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJfY2xpZW50IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJfdGFyZ2V0Rm9udHNpemUiLCJ3aWR0aCIsImhlaWdodCIsInNldEF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsQ0FBQyxZQUFXO1FBQ0pBLFFBQVFDLFNBQVNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWjtRQUNJQyxZQUFZRixTQUFTQyxhQUFULENBQXVCLHVCQUF2QixDQURoQjtRQUVJRSxhQUFhSCxTQUFTQyxhQUFULENBQXVCLFlBQXZCLENBRmpCO1FBR0lHLG9CQUFvQkMsT0FBT0MsZ0JBSC9COztRQUtJQyxXQUFXO2VBQ0osR0FESTtnQkFFSDtLQUZaOzs7OzthQW1CU0MsSUFBVCxHQUFnQjs7ZUFFTEMsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBVzt1QkFDOUJDLFVBQVgsRUFBdUIsQ0FBdkI7U0FESixFQUVHLEtBRkg7OzthQUtLQSxVQUFULENBQW9CQyxHQUFwQixFQUF5QjtZQUNqQkMsWUFBWVosU0FBU2EsZUFBekI7WUFDSVQsb0JBQW9CQyxPQUFPQyxnQkFEL0I7WUFFSVEsVUFBVTttQkFDQ0YsVUFBVUcsV0FEWDtvQkFFRUgsVUFBVUk7U0FGMUI7WUFJSUMsZUFKSjs7OztZQVFJSCxRQUFRSSxLQUFSLEdBQWdCSixRQUFRSyxNQUF4QixJQUFrQ1osU0FBU1csS0FBVCxHQUFpQlgsU0FBU1ksTUFBaEUsRUFBd0U7OEJBQ2xELE9BQU9MLFFBQVFJLEtBQVIsR0FBZ0JYLFNBQVNXLEtBQWhDLENBQWxCO1NBREosTUFFTzs4QkFDZSxPQUFPSixRQUFRSSxLQUFSLEdBQWdCWCxTQUFTVyxLQUFoQyxDQUFsQjs7OztjQUlFRSxZQUFOLENBQW1CLE9BQW5CLEVBQTRCLGVBQWVILGtCQUFrQixDQUFqQyxHQUFxQyxLQUFqRTs7Q0FsRFI7Ozs7In0=
