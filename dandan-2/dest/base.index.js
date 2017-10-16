(function () {
'use strict';

(function () {
    var _html = document.querySelector('html'),
        _viewport = document.querySelector('meta[name="viewport"]'),
        _container = document.querySelector('#container');

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
        var _document = document.documentElement;
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

(function () {

    var layer_loading = $('.layer-loading'),
        box_content = $('.layer-loading .layer-loading--box .box-content');

    var imgs = ['./images/header.jpg', './images/footer.png', './images/alert-info-bg.png', './images/alert-rule-bg.png', './images/page-0-0.png', './images/page-0-1.png', './images/page-1-0.png', './images/page-1-3.png', './images/page-2-0.png', './images/page-2-2.png', './images/page-3-0.png', './images/page-4-0.png', './images/page-5-0.png', './images/page-bg.png'],
        imgs_length = imgs.length,
        imgs_process = [];

    var evts = {
        callback: function (m, n) {
            box_content.attr('style', "width:" + m / n * 100 + '%');
            if (m / n == 1) {
                setTimeout(function () {
                    layer_loading.hide();
                }, 400);
            }
        }
    };
    imgs.forEach(function (v, i) {
        var img = document.createElement('img');
        img.onload = function (data) {
            imgs_process.push(data);
            evts.callback(imgs_process.length, imgs_length);
        };

        img.src = v;
    });
})();

(function () {

    // 终端判断
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

    if (isiOS) {
        $('.alert-info').show();
        $('.layer').css('visibility', 'visible');
    } else {
        $('.alert-info').hide();
        $('.layer').css('visibility', 'hidden');
    }

    $('.alert-info').on('click', function () {
        $('.alert-info').hide();
        $('.layer').css('visibility', 'hidden');
    });

    // 砸蛋流程

    $('.page-0-0').on('click', function (evt) {

        // var urls = {
        //     getPrize: '/home/index/getPrize'
        // };

        // $.get(urls.getPrize, {}, function(res) {

        //     var page_result = $('.page-result-' + res.id);

        //     $('.content-start').hide();
        //     $('.content-result').show();
        //     if (/0|1|4|6|10/gi.test(res.id)) {
        //         page_result.show();
        //         return;
        //     }

        //     if (/2|3|5/gi.test(res.id)) {
        //         var _info = {
        //             '2': 20,
        //             '3': 12,
        //             '5': 5
        //         };
        //         $('.page-result-2').find('.fs-24').text('获得' + _info[res.id] + '花币');
        //         $('.page-result-2').show();
        //         return;
        //     }


        // }, 'json');

        $('.pages .page').hide();
        $('.page-1').css('display', 'flex');
    });
    // 砸蛋流程-领取
    $('.btn-default').on('click', function (evt) {

        var _account = $('.text_account').val(),
            _mobile = $('.text_mobile').val();

        console.log(_account, _mobile);

        $('.pages .page').hide();
        $('.page-2').css('display', 'flex');

        // var _this = this,
        //     _url = '/home/index/addaccount',
        //     _hwaccount = $('.hwaccount').val();

        // if (/^\s*$/gi.test(_hwaccount)) {
        //     alert('帐户不能为空');
        //     return;
        // }

        // $.post(_url, {
        //     'hwaccount': _hwaccount
        // }, function (data) {
        //     if (/1/gi.test(data.msg)) {
        //         $(_this).parents('.page').hide();
        //         $('.page-result-lingqu').show();
        //     } else {
        //         alert('系统错误，请刷新重试');
        //     }
        // }, 'json');
    });
    // 砸蛋流程-关闭
    $('.btn-close').on('click', function (evt) {
        $('.pages .page').hide();
        $('.page-0').css('display', 'flex');
    });

    // 活动规则

    $('.page-0-1').on('click', function () {
        $('.alert-rule').show();
        $('.layer').css('visibility', 'visible');
    });

    $('.alert-rule').on('click', function () {
        $('.alert-rule').hide();
        $('.layer').css('visibility', 'hidden');
    });
})();

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5pbmRleC5qcyIsInNvdXJjZXMiOlsiLi4vZW50cnkvYmFzZS5hdXRvLmpzIiwiLi4vZW50cnkvYmFzZS5sb2FkaW5nLmpzIiwiLi4vZW50cnkvYmFzZS5pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG4gICAgdmFyIF9odG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLFxuICAgICAgICBfdmlld3BvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ2aWV3cG9ydFwiXScpLFxuICAgICAgICBfY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpLFxuICAgICAgICBfZGV2aWNlUGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuXG4gICAgdmFyIF9kZWZhdWx0ID0ge1xuICAgICAgICB3aWR0aDogNjQwLFxuICAgICAgICBoZWlnaHQ6IDEyMTBcbiAgICB9O1xuXG5cblxuXG4gICAgaW5pdCgpO1xuXG5cblxuXG5cblxuXG5cblxuICAgIC8vIGZuc1xuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHBhZ2VSZVNpemUoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChwYWdlUmVTaXplLCA4KTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhZ2VSZVNpemUoZXZ0KSB7XG4gICAgICAgIHZhciBfZG9jdW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICAgICAgICBfZGV2aWNlUGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuICAgICAgICB2YXIgX2NsaWVudCA9IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogX2RvY3VtZW50LmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogX2RvY3VtZW50LmNsaWVudEhlaWdodFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF90YXJnZXRGb250c2l6ZTtcblxuICAgICAgICAvLyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWRwcicsIE1hdGguZmxvb3IoX2RldmljZVBpeGVsUmF0aW8pKTtcblxuICAgICAgICBpZiAoX2NsaWVudC53aWR0aCAvIF9jbGllbnQuaGVpZ2h0IDw9IF9kZWZhdWx0LndpZHRoIC8gX2RlZmF1bHQuaGVpZ2h0KSB7XG4gICAgICAgICAgICBfdGFyZ2V0Rm9udHNpemUgPSAxMDAgKiAoX2NsaWVudC53aWR0aCAvIF9kZWZhdWx0LndpZHRoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90YXJnZXRGb250c2l6ZSA9IDEwMCAqIChfY2xpZW50LndpZHRoIC8gX2RlZmF1bHQud2lkdGgpO1xuICAgICAgICAgICAgLy8gX3RhcmdldEZvbnRzaXplID0gMTAwICogKF9jbGllbnQuaGVpZ2h0IC8gX2RlZmF1bHQuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBfY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IF9jbGllbnQuaGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgX2h0bWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdmb250LXNpemU6JyArIF90YXJnZXRGb250c2l6ZSAqIDEgKyAncHg7Jyk7XG4gICAgfVxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgbGF5ZXJfbG9hZGluZyA9ICQoJy5sYXllci1sb2FkaW5nJyksXG4gICAgICAgIGJveF9jb250ZW50ID0gJCgnLmxheWVyLWxvYWRpbmcgLmxheWVyLWxvYWRpbmctLWJveCAuYm94LWNvbnRlbnQnKTtcblxuICAgIHZhciBpbWdzID0gW1xuICAgICAgICAgICAgJy4vaW1hZ2VzL2hlYWRlci5qcGcnLFxuICAgICAgICAgICAgJy4vaW1hZ2VzL2Zvb3Rlci5wbmcnLFxuICAgICAgICAgICAgJy4vaW1hZ2VzL2FsZXJ0LWluZm8tYmcucG5nJyxcbiAgICAgICAgICAgICcuL2ltYWdlcy9hbGVydC1ydWxlLWJnLnBuZycsXG4gICAgICAgICAgICAnLi9pbWFnZXMvcGFnZS0wLTAucG5nJyxcbiAgICAgICAgICAgICcuL2ltYWdlcy9wYWdlLTAtMS5wbmcnLFxuICAgICAgICAgICAgJy4vaW1hZ2VzL3BhZ2UtMS0wLnBuZycsXG4gICAgICAgICAgICAnLi9pbWFnZXMvcGFnZS0xLTMucG5nJyxcbiAgICAgICAgICAgICcuL2ltYWdlcy9wYWdlLTItMC5wbmcnLFxuICAgICAgICAgICAgJy4vaW1hZ2VzL3BhZ2UtMi0yLnBuZycsXG4gICAgICAgICAgICAnLi9pbWFnZXMvcGFnZS0zLTAucG5nJyxcbiAgICAgICAgICAgICcuL2ltYWdlcy9wYWdlLTQtMC5wbmcnLFxuICAgICAgICAgICAgJy4vaW1hZ2VzL3BhZ2UtNS0wLnBuZycsXG4gICAgICAgICAgICAnLi9pbWFnZXMvcGFnZS1iZy5wbmcnXG4gICAgICAgIF0sXG4gICAgICAgIGltZ3NfbGVuZ3RoID0gaW1ncy5sZW5ndGgsXG4gICAgICAgIGltZ3NfcHJvY2VzcyA9IFtdO1xuXG4gICAgdmFyIGV2dHMgPSB7XG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihtLCBuKSB7XG4gICAgICAgICAgICBib3hfY29udGVudC5hdHRyKCdzdHlsZScsIFwid2lkdGg6XCIgKyBtIC8gbiAqIDEwMCArICclJyk7XG4gICAgICAgICAgICBpZiAobSAvIG4gPT0gMSkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGxheWVyX2xvYWRpbmcuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH0sIDQwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGltZ3MuZm9yRWFjaChmdW5jdGlvbih2LCBpKSB7XG4gICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIGltZ3NfcHJvY2Vzcy5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgZXZ0cy5jYWxsYmFjayhpbWdzX3Byb2Nlc3MubGVuZ3RoLCBpbWdzX2xlbmd0aCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaW1nLnNyYyA9IHY7XG4gICAgfSk7XG5cblxufSkoKTsiLCJpbXBvcnQgJy4vYmFzZS5hdXRvLmpzJztcbmltcG9ydCAnLi9iYXNlLmxvYWRpbmcuanMnO1xuXG5cblxuXG4oZnVuY3Rpb24gKCkge1xuXG5cbiAgICAvLyDnu4jnq6/liKTmlq1cbiAgICB2YXIgdSA9IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgICAgIGFwcCA9IG5hdmlnYXRvci5hcHBWZXJzaW9uO1xuICAgIHZhciBpc0FuZHJvaWQgPSB1LmluZGV4T2YoJ0FuZHJvaWQnKSA+IC0xIHx8IHUuaW5kZXhPZignTGludXgnKSA+IC0xOyAvL2FuZHJvaWTnu4jnq6/miJbogIV1Y+a1j+iniOWZqFxuICAgIHZhciBpc2lPUyA9ICEhdS5tYXRjaCgvXFwoaVteO10rOyggVTspPyBDUFUuK01hYyBPUyBYLyk7IC8vaW9z57uI56uvXG5cbiAgICBpZiAoaXNpT1MpIHtcbiAgICAgICAgJCgnLmFsZXJ0LWluZm8nKS5zaG93KCk7XG4gICAgICAgICQoJy5sYXllcicpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJCgnLmFsZXJ0LWluZm8nKS5oaWRlKCk7XG4gICAgICAgICQoJy5sYXllcicpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICB9XG5cbiAgICAkKCcuYWxlcnQtaW5mbycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFsZXJ0LWluZm8nKS5oaWRlKCk7XG4gICAgICAgICQoJy5sYXllcicpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICB9KTtcblxuXG4gICAgLy8g56C46JuL5rWB56iLXG5cbiAgICAkKCcucGFnZS0wLTAnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XG5cbiAgICAgICAgLy8gdmFyIHVybHMgPSB7XG4gICAgICAgIC8vICAgICBnZXRQcml6ZTogJy9ob21lL2luZGV4L2dldFByaXplJ1xuICAgICAgICAvLyB9O1xuXG4gICAgICAgIC8vICQuZ2V0KHVybHMuZ2V0UHJpemUsIHt9LCBmdW5jdGlvbihyZXMpIHtcblxuICAgICAgICAvLyAgICAgdmFyIHBhZ2VfcmVzdWx0ID0gJCgnLnBhZ2UtcmVzdWx0LScgKyByZXMuaWQpO1xuXG4gICAgICAgIC8vICAgICAkKCcuY29udGVudC1zdGFydCcpLmhpZGUoKTtcbiAgICAgICAgLy8gICAgICQoJy5jb250ZW50LXJlc3VsdCcpLnNob3coKTtcbiAgICAgICAgLy8gICAgIGlmICgvMHwxfDR8NnwxMC9naS50ZXN0KHJlcy5pZCkpIHtcbiAgICAgICAgLy8gICAgICAgICBwYWdlX3Jlc3VsdC5zaG93KCk7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyAgICAgfVxuXG4gICAgICAgIC8vICAgICBpZiAoLzJ8M3w1L2dpLnRlc3QocmVzLmlkKSkge1xuICAgICAgICAvLyAgICAgICAgIHZhciBfaW5mbyA9IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgJzInOiAyMCxcbiAgICAgICAgLy8gICAgICAgICAgICAgJzMnOiAxMixcbiAgICAgICAgLy8gICAgICAgICAgICAgJzUnOiA1XG4gICAgICAgIC8vICAgICAgICAgfTtcbiAgICAgICAgLy8gICAgICAgICAkKCcucGFnZS1yZXN1bHQtMicpLmZpbmQoJy5mcy0yNCcpLnRleHQoJ+iOt+W+lycgKyBfaW5mb1tyZXMuaWRdICsgJ+iKseW4gScpO1xuICAgICAgICAvLyAgICAgICAgICQoJy5wYWdlLXJlc3VsdC0yJykuc2hvdygpO1xuICAgICAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gICAgIH1cblxuXG4gICAgICAgIC8vIH0sICdqc29uJyk7XG5cbiAgICAgICAgJCgnLnBhZ2VzIC5wYWdlJykuaGlkZSgpO1xuICAgICAgICAkKCcucGFnZS0xJykuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKTtcbiAgICB9KTtcbiAgICAvLyDnoLjom4vmtYHnqIst6aKG5Y+WXG4gICAgJCgnLmJ0bi1kZWZhdWx0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xuXG5cbiAgICAgICAgdmFyIF9hY2NvdW50ID0gJCgnLnRleHRfYWNjb3VudCcpLnZhbCgpLFxuICAgICAgICAgICAgX21vYmlsZSA9ICQoJy50ZXh0X21vYmlsZScpLnZhbCgpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKF9hY2NvdW50LCBfbW9iaWxlKTtcblxuICAgICAgICAkKCcucGFnZXMgLnBhZ2UnKS5oaWRlKCk7XG4gICAgICAgICQoJy5wYWdlLTInKS5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpO1xuXG4gICAgICAgIC8vIHZhciBfdGhpcyA9IHRoaXMsXG4gICAgICAgIC8vICAgICBfdXJsID0gJy9ob21lL2luZGV4L2FkZGFjY291bnQnLFxuICAgICAgICAvLyAgICAgX2h3YWNjb3VudCA9ICQoJy5od2FjY291bnQnKS52YWwoKTtcblxuICAgICAgICAvLyBpZiAoL15cXHMqJC9naS50ZXN0KF9od2FjY291bnQpKSB7XG4gICAgICAgIC8vICAgICBhbGVydCgn5biQ5oi35LiN6IO95Li656m6Jyk7XG4gICAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyAkLnBvc3QoX3VybCwge1xuICAgICAgICAvLyAgICAgJ2h3YWNjb3VudCc6IF9od2FjY291bnRcbiAgICAgICAgLy8gfSwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgLy8gICAgIGlmICgvMS9naS50ZXN0KGRhdGEubXNnKSkge1xuICAgICAgICAvLyAgICAgICAgICQoX3RoaXMpLnBhcmVudHMoJy5wYWdlJykuaGlkZSgpO1xuICAgICAgICAvLyAgICAgICAgICQoJy5wYWdlLXJlc3VsdC1saW5ncXUnKS5zaG93KCk7XG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIGFsZXJ0KCfns7vnu5/plJnor6/vvIzor7fliLfmlrDph43or5UnKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSwgJ2pzb24nKTtcblxuICAgIH0pO1xuICAgIC8vIOeguOibi+a1geeoiy3lhbPpl61cbiAgICAkKCcuYnRuLWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAkKCcucGFnZXMgLnBhZ2UnKS5oaWRlKCk7XG4gICAgICAgICQoJy5wYWdlLTAnKS5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpO1xuICAgIH0pO1xuXG5cbiAgICAvLyDmtLvliqjop4TliJlcblxuICAgICQoJy5wYWdlLTAtMScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFsZXJ0LXJ1bGUnKS5zaG93KCk7XG4gICAgICAgICQoJy5sYXllcicpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG4gICAgfSk7XG5cbiAgICAkKCcuYWxlcnQtcnVsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFsZXJ0LXJ1bGUnKS5oaWRlKCk7XG4gICAgICAgICQoJy5sYXllcicpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICB9KTtcbn0pKCk7Il0sIm5hbWVzIjpbIl9odG1sIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiX3ZpZXdwb3J0IiwiX2NvbnRhaW5lciIsIl9kZWZhdWx0IiwiaW5pdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYWdlUmVTaXplIiwiZXZ0IiwiX2RvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiX2NsaWVudCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiX3RhcmdldEZvbnRzaXplIiwid2lkdGgiLCJoZWlnaHQiLCJzZXRBdHRyaWJ1dGUiLCJsYXllcl9sb2FkaW5nIiwiJCIsImJveF9jb250ZW50IiwiaW1ncyIsImltZ3NfbGVuZ3RoIiwibGVuZ3RoIiwiaW1nc19wcm9jZXNzIiwiZXZ0cyIsIm0iLCJuIiwiYXR0ciIsImhpZGUiLCJmb3JFYWNoIiwidiIsImkiLCJpbWciLCJjcmVhdGVFbGVtZW50Iiwib25sb2FkIiwiZGF0YSIsInB1c2giLCJjYWxsYmFjayIsInNyYyIsInUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpc0FuZHJvaWQiLCJpbmRleE9mIiwiaXNpT1MiLCJtYXRjaCIsInNob3ciLCJjc3MiLCJvbiIsIl9hY2NvdW50IiwidmFsIiwiX21vYmlsZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsQ0FBQyxZQUFXO1FBQ0pBLFFBQVFDLFNBQVNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWjtRQUNJQyxZQUFZRixTQUFTQyxhQUFULENBQXVCLHVCQUF2QixDQURoQjtRQUVJRSxhQUFhSCxTQUFTQyxhQUFULENBQXVCLFlBQXZCLENBRmpCOztRQUtJRyxXQUFXO2VBQ0osR0FESTtnQkFFSDtLQUZaOzs7OzthQW1CU0MsSUFBVCxHQUFnQjs7ZUFFTEMsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBVzt1QkFDOUJDLFVBQVgsRUFBdUIsQ0FBdkI7U0FESixFQUVHLEtBRkg7OzthQUtLQSxVQUFULENBQW9CQyxHQUFwQixFQUF5QjtZQUNqQkMsWUFBWVQsU0FBU1UsZUFBekI7WUFFSUMsVUFBVTttQkFDQ0YsVUFBVUcsV0FEWDtvQkFFRUgsVUFBVUk7U0FGMUI7WUFJSUMsZUFKSjs7OztZQVFJSCxRQUFRSSxLQUFSLEdBQWdCSixRQUFRSyxNQUF4QixJQUFrQ1osU0FBU1csS0FBVCxHQUFpQlgsU0FBU1ksTUFBaEUsRUFBd0U7OEJBQ2xELE9BQU9MLFFBQVFJLEtBQVIsR0FBZ0JYLFNBQVNXLEtB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
