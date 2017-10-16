(function () {
'use strict';

(function () {

    var layer_loading = $('.layer-loading'),
        box_content = $('.layer-loading .layer-loading--box .box-content');

    var imgs = ['./images/000.png', './images/001.png', './images/01.png', './images/002.png', './images/02.png', './images/003.png', './images/004.png', './images/005.png', './images/006.png', './images/app.png', './images/box.png', './images/layer-alert--bg.png', './images/page-content--bg.jpg', './images/page-footer--bg--1.png', './images/page-footer--bg.png', './images/page-header--bg.png', './images/page-logo.png', './images/page-sub--bg.png', './images/result-btn.png', './images/result-icon-01.png', './images/result-icon-02.png', './images/result-icon-03.png', './images/result-icon-04.png', './images/swipe-bg.png'],
        imgs_length = imgs.length,
        imgs_process = [];

    var evts = {
        callback: function callback(m, n) {
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
    // layer_alert
    var layer_alert = $('.layer-alert'),
        layer_alert_evts = {
        close: function close(evt) {
            layer_alert.hide();
        },
        open: function open(evt) {
            layer_alert.show();
        }
    };

    layer_alert.on('click', '.alert--btn', layer_alert_evts.close);
    layer_alert.on('click', '.alert-close--btn', layer_alert_evts.close);

    // 
    $('.layer-swipe-mask').on('click', function () {
        $(this).hide();
    });
    // page-home
    var page_home = $('.page-home'),
        page_home_evts = {
        openlotto: function openlotto(evt) {

            var urls = {
                getPrize: '/home/index/getPrize'
            };

            $.get(urls.getPrize, {}, function (res) {

                var page_result = $('.page-result-' + res.id);
                if (/0|1|4|6|10/gi.test(res.id)) {
                    page_result.show();
                    return;
                }

                if (/2|3|5/gi.test(res.id)) {
                    var _info = {
                        '2': 20,
                        '3': 12,
                        '5': 5
                    };
                    $('.page-result-2').find('.fs-24').text('获得' + _info[res.id] + '花币');
                    $('.page-result-2').show();
                    return;
                }
            }, 'json');
        },
        openrule: function openrule(evt) {
            console.log('openrule');
        }
    };

    page_home.on('click', '.icon-01,.icon-02', page_home_evts.openlotto);
    page_home.on('click', '.layout-flex--btn', page_home_evts.openrule);

    // 结果页点击后关闭
    $('.result-btn').on('click', function () {
        $(this).parents('.page').hide();
    });

    $('.result-btn--lingqu').on('click', function () {
        var _this = this,
            _url = '/home/index/addaccount',
            _hwaccount = $('.hwaccount').val();

        if (/^\s*$/gi.test(_hwaccount)) {
            alert('帐户不能为空');
            return;
        }

        $.post(_url, { 'hwaccount': _hwaccount }, function (data) {
            if (/1/gi.test(data.msg)) {
                $(_this).parents('.page').hide();
                $('.page-result-lingqu').show();
            } else {
                alert('系统错误，请刷新重试');
            }
        });
    });

    // swipe
    var _swipe_index = 0,
        _swipe_config = [{
        icon: './images/000.png',
        title: '华为主题',
        content: '购买付费主题及付费字体<br/>精美主题/字体随心而换，让你的手机与众不同'
    }, {
        icon: './images/001.png',
        title: '华为应用市场',
        content: '购买付费应用/应用内购买项目<br/>畅享无广告、独家定制、专业功能的精品应用'
    }, {
        icon: './images/002.png',
        title: '华为游戏中心',
        content: '购买游戏道具、热门游戏VIP权益<br/>稀有坐骑、华丽时装、超萌宠物轻松拥有，游戏生活更精彩'
    }, {
        icon: './images/003.png',
        title: '华为音乐',
        content: '开通音乐VIP<br/>最新、最热歌曲随心下载， 极致音效点燃你的耳朵'
    }, {
        icon: './images/004.png',
        title: '华为阅读',
        content: '购买阅读会员/电子书<br/>50万册正版图书，海量原创优先享受'
    }, {
        icon: './images/005.png',
        title: '华为视频',
        content: '购买视频会员/付费影片<br/>热门院线大片想看就看，畅享无广告高清观影'
    }, {
        icon: './images/006.png',
        title: '云服务',
        content: '购买云储存空间套餐<br/>照片、联系人等信息可存云端安全保密，超大空间，数据如影随行'
    }],
        _swipe_length = _swipe_config.length,
        _swipe_evts = {
        setImgUrl: function setImgUrl() {

            var _temp = _swipe_config.slice(_swipe_index);
            if (_temp.length < 5) {
                _swipe_config.forEach(function (v, i) {
                    if (_temp.length < 5) {
                        _temp.push(v);
                    }
                });
            }
            console.log('----', _swipe_index, '----', _temp[2]['icon']);
            $.each(_icon, function (i, v) {
                console.log(_temp[i]['icon']);
                $(this).find('img').attr('src', _temp[i]['icon']);
            });

            _tit.text(_temp[2]['title']);
            _con.html(_temp[2]['content']);

            _img.removeClass('animated flipInX').addClass('animated flipInX');
            _box.removeClass('animated flipInX').addClass('animated flipInX');
            setTimeout(function () {
                _img.removeClass('animated flipInX');
                _box.removeClass('animated flipInX');
            }, 800);
        }
    },
        _box = $('.page-sub .icon-box'),
        _icon = $('.page-sub .page-content .icon'),
        _img = $('.page-sub .page-content .icon img'),
        _tit = $('.page-sub .page-footer--bg--1 .icon-box--title'),
        _con = $('.page-sub .page-footer--bg--1 .icon-box--content');

    _swipe_evts.setImgUrl.call(this);

    $(".page-sub .page-content .layout-flex--body").swipe({
        swipe: function swipe(event, direction, distance, duration, fingerCount, fingerData) {
            console.log(direction, distance, duration, fingerCount, fingerData);
            if (/right/gi.test(direction)) {
                if (_swipe_index == 0) {
                    _swipe_index = _swipe_length - 1;
                } else {
                    _swipe_index--;
                }
            }

            if (/left/gi.test(direction)) {
                if (_swipe_index == _swipe_length - 1) {
                    _swipe_index = 0;
                } else {
                    _swipe_index++;
                }
            }

            _swipe_evts.setImgUrl.call(this);
        }
    });
})();

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5pbmRleC5qcyIsInNvdXJjZXMiOlsiLi4vZW50cnkvYmFzZS5sb2FkaW5nLmpzIiwiLi4vZW50cnkvYmFzZS5pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgbGF5ZXJfbG9hZGluZyA9ICQoJy5sYXllci1sb2FkaW5nJyksXG4gICAgICAgIGJveF9jb250ZW50ID0gJCgnLmxheWVyLWxvYWRpbmcgLmxheWVyLWxvYWRpbmctLWJveCAuYm94LWNvbnRlbnQnKTtcblxuICAgIHZhciBpbWdzID0gW1xuICAgICAgICAgICAgJy4vaW1hZ2VzLzAwMC5wbmcnLFxuICAgICAgICAgICAgJy4vaW1hZ2VzLzAwMS5wbmcnLFxuICAgICAgICAgICAgJy4vaW1hZ2VzLzAxLnBuZycsXG4gICAgICAgICAgICAnLi9pbWFnZXMvMDAyLnBuZycsXG4gICAgICAgICAgICAnLi9pbWFnZXMvMDIucG5nJyxcbiAgICAgICAgICAgICcuL2ltYWdlcy8wMDMucG5nJyxcbiAgICAgICAgICAgICcuL2ltYWdlcy8wMDQucG5nJyxcbiAgICAgICAgICAgICcuL2ltYWdlcy8wMDUucG5nJyxcbiAgICAgICAgICAgICcuL2ltYWdlcy8wMDYucG5nJyxcbiAgICAgICAgICAgICcuL2ltYWdlcy9hcHAucG5nJyxcbiAgICAgICAgICAgICcuL2ltYWdlcy9ib3gucG5nJyxcbiAgICAgICAgICAgICcuL2ltYWdlcy9sYXllci1hbGVydC0tYmcucG5nJyxcbiAgICAgICAgICAgICcuL2ltYWdlcy9wYWdlLWNvbnRlbnQtLWJnLmpwZycsXG4gICAgICAgICAgICAnLi9pbWFnZXMvcGFnZS1mb290ZXItLWJnLS0xLnBuZycsXG4gICAgICAgICAgICAnLi9pbWFnZXMvcGFnZS1mb290ZXItLWJnLnBuZycsXG4gICAgICAgICAgICAnLi9pbWFnZXMvcGFnZS1oZWFkZXItLWJnLnBuZycsXG4gICAgICAgICAgICAnLi9pbWFnZXMvcGFnZS1sb2dvLnBuZycsXG4gICAgICAgICAgICAnLi9pbWFnZXMvcGFnZS1zdWItLWJnLnBuZycsXG4gICAgICAgICAgICAnLi9pbWFnZXMvcmVzdWx0LWJ0bi5wbmcnLFxuICAgICAgICAgICAgJy4vaW1hZ2VzL3Jlc3VsdC1pY29uLTAxLnBuZycsXG4gICAgICAgICAgICAnLi9pbWFnZXMvcmVzdWx0LWljb24tMDIucG5nJyxcbiAgICAgICAgICAgICcuL2ltYWdlcy9yZXN1bHQtaWNvbi0wMy5wbmcnLFxuICAgICAgICAgICAgJy4vaW1hZ2VzL3Jlc3VsdC1pY29uLTA0LnBuZycsXG4gICAgICAgICAgICAnLi9pbWFnZXMvc3dpcGUtYmcucG5nJ1xuICAgICAgICBdLFxuICAgICAgICBpbWdzX2xlbmd0aCA9IGltZ3MubGVuZ3RoLFxuICAgICAgICBpbWdzX3Byb2Nlc3MgPSBbXTtcblxuICAgIHZhciBldnRzID0ge1xuICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24obSwgbikge1xuICAgICAgICAgICAgYm94X2NvbnRlbnQuYXR0cignc3R5bGUnLCBcIndpZHRoOlwiICsgbSAvIG4gKiAxMDAgKyAnJScpO1xuICAgICAgICAgICAgaWYgKG0gLyBuID09IDEpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBsYXllcl9sb2FkaW5nLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9LCA0MDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBpbWdzLmZvckVhY2goZnVuY3Rpb24odiwgaSkge1xuICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBpbWdzX3Byb2Nlc3MucHVzaChkYXRhKTtcbiAgICAgICAgICAgIGV2dHMuY2FsbGJhY2soaW1nc19wcm9jZXNzLmxlbmd0aCwgaW1nc19sZW5ndGgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGltZy5zcmMgPSB2O1xuICAgIH0pO1xuXG5cbn0pKCk7IiwiaW1wb3J0ICcuL2Jhc2UubG9hZGluZy5qcyc7XG5cbihmdW5jdGlvbigpIHtcbiAgICAvLyBsYXllcl9hbGVydFxuICAgIHZhciBsYXllcl9hbGVydCA9ICQoJy5sYXllci1hbGVydCcpLFxuICAgICAgICBsYXllcl9hbGVydF9ldnRzID0ge1xuICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgICAgICAgIGxheWVyX2FsZXJ0LmhpZGUoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcGVuOiBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICAgICAgICBsYXllcl9hbGVydC5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICBsYXllcl9hbGVydC5vbignY2xpY2snLCAnLmFsZXJ0LS1idG4nLCBsYXllcl9hbGVydF9ldnRzLmNsb3NlKTtcbiAgICBsYXllcl9hbGVydC5vbignY2xpY2snLCAnLmFsZXJ0LWNsb3NlLS1idG4nLCBsYXllcl9hbGVydF9ldnRzLmNsb3NlKTtcblxuICAgIC8vIFxuICAgICQoJy5sYXllci1zd2lwZS1tYXNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykuaGlkZSgpO1xuICAgIH0pO1xuICAgIC8vIHBhZ2UtaG9tZVxuICAgIHZhciBwYWdlX2hvbWUgPSAkKCcucGFnZS1ob21lJyksXG4gICAgICAgIHBhZ2VfaG9tZV9ldnRzID0ge1xuICAgICAgICAgICAgb3BlbmxvdHRvOiBmdW5jdGlvbihldnQpIHtcblxuICAgICAgICAgICAgICAgIHZhciB1cmxzID0ge1xuICAgICAgICAgICAgICAgICAgICBnZXRQcml6ZTogJy9ob21lL2luZGV4L2dldFByaXplJ1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAkLmdldCh1cmxzLmdldFByaXplLCB7fSwgZnVuY3Rpb24ocmVzKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2VfcmVzdWx0ID0gJCgnLnBhZ2UtcmVzdWx0LScgKyByZXMuaWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoLzB8MXw0fDZ8MTAvZ2kudGVzdChyZXMuaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlX3Jlc3VsdC5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoLzJ8M3w1L2dpLnRlc3QocmVzLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9pbmZvID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcyJzogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzMnOiAxMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnNSc6IDVcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcucGFnZS1yZXN1bHQtMicpLmZpbmQoJy5mcy0yNCcpLnRleHQoJ+iOt+W+lycgKyBfaW5mb1tyZXMuaWRdICsgJ+iKseW4gScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2UtcmVzdWx0LTInKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgfSwgJ2pzb24nKTtcblxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3BlbnJ1bGU6IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvcGVucnVsZScpXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICBwYWdlX2hvbWUub24oJ2NsaWNrJywgJy5pY29uLTAxLC5pY29uLTAyJywgcGFnZV9ob21lX2V2dHMub3BlbmxvdHRvKTtcbiAgICBwYWdlX2hvbWUub24oJ2NsaWNrJywgJy5sYXlvdXQtZmxleC0tYnRuJywgcGFnZV9ob21lX2V2dHMub3BlbnJ1bGUpO1xuXG4gICAgLy8g57uT5p6c6aG154K55Ye75ZCO5YWz6ZetXG4gICAgJCgnLnJlc3VsdC1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcucGFnZScpLmhpZGUoKTtcbiAgICB9KTtcblxuICAgICQoJy5yZXN1bHQtYnRuLS1saW5ncXUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcyxcbiAgICAgICAgICAgIF91cmwgPSAnL2hvbWUvaW5kZXgvYWRkYWNjb3VudCcsXG4gICAgICAgICAgICBfaHdhY2NvdW50ID0gJCgnLmh3YWNjb3VudCcpLnZhbCgpO1xuXG4gICAgICAgIGlmICgvXlxccyokL2dpLnRlc3QoX2h3YWNjb3VudCkpIHtcbiAgICAgICAgICAgIGFsZXJ0KCfluJDmiLfkuI3og73kuLrnqbonKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICQucG9zdChfdXJsLCB7ICdod2FjY291bnQnOiBfaHdhY2NvdW50IH0sIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIGlmICgvMS9naS50ZXN0KGRhdGEubXNnKSkge1xuICAgICAgICAgICAgICAgICQoX3RoaXMpLnBhcmVudHMoJy5wYWdlJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICQoJy5wYWdlLXJlc3VsdC1saW5ncXUnKS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCfns7vnu5/plJnor6/vvIzor7fliLfmlrDph43or5UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cblxuICAgIC8vIHN3aXBlXG4gICAgdmFyIF9zd2lwZV9pbmRleCA9IDAsXG4gICAgICAgIF9zd2lwZV9jb25maWcgPSBbe1xuICAgICAgICAgICAgaWNvbjogJy4vaW1hZ2VzLzAwMC5wbmcnLFxuICAgICAgICAgICAgdGl0bGU6ICfljY7kuLrkuLvpopgnLFxuICAgICAgICAgICAgY29udGVudDogJ+i0reS5sOS7mOi0ueS4u+mimOWPiuS7mOi0ueWtl+S9kzxici8+57K+576O5Li76aKYL+Wtl+S9k+maj+W/g+iAjOaNou+8jOiuqeS9oOeahOaJi+acuuS4juS8l+S4jeWQjCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgaWNvbjogJy4vaW1hZ2VzLzAwMS5wbmcnLFxuICAgICAgICAgICAgdGl0bGU6ICfljY7kuLrlupTnlKjluILlnLonLFxuICAgICAgICAgICAgY29udGVudDogJ+i0reS5sOS7mOi0ueW6lOeUqC/lupTnlKjlhoXotK3kubDpobnnm648YnIvPueVheS6q+aXoOW5v+WRiuOAgeeLrOWutuWumuWItuOAgeS4k+S4muWKn+iDveeahOeyvuWTgeW6lOeUqCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgaWNvbjogJy4vaW1hZ2VzLzAwMi5wbmcnLFxuICAgICAgICAgICAgdGl0bGU6ICfljY7kuLrmuLjmiI/kuK3lv4MnLFxuICAgICAgICAgICAgY29udGVudDogJ+i0reS5sOa4uOaIj+mBk+WFt+OAgeeDremXqOa4uOaIj1ZJUOadg+ebijxici8+56iA5pyJ5Z2Q6aqR44CB5Y2O5Li95pe26KOF44CB6LaF6JCM5a6g54mp6L275p2+5oul5pyJ77yM5ri45oiP55Sf5rS75pu057K+5b2pJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBpY29uOiAnLi9pbWFnZXMvMDAzLnBuZycsXG4gICAgICAgICAgICB0aXRsZTogJ+WNjuS4uumfs+S5kCcsXG4gICAgICAgICAgICBjb250ZW50OiAn5byA6YCa6Z+z5LmQVklQPGJyLz7mnIDmlrDjgIHmnIDng63mrYzmm7Lpmo/lv4PkuIvovb3vvIwg5p6B6Ie06Z+z5pWI54K554eD5L2g55qE6ICz5py1J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBpY29uOiAnLi9pbWFnZXMvMDA0LnBuZycsXG4gICAgICAgICAgICB0aXRsZTogJ+WNjuS4uumYheivuycsXG4gICAgICAgICAgICBjb250ZW50OiAn6LSt5Lmw6ZiF6K+75Lya5ZGYL+eUteWtkOS5pjxici8+NTDkuIflhozmraPniYjlm77kuabvvIzmtbfph4/ljp/liJvkvJjlhYjkuqvlj5cnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGljb246ICcuL2ltYWdlcy8wMDUucG5nJyxcbiAgICAgICAgICAgIHRpdGxlOiAn5Y2O5Li66KeG6aKRJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfotK3kubDop4bpopHkvJrlkZgv5LuY6LS55b2x54mHPGJyLz7ng63pl6jpmaLnur/lpKfniYfmg7PnnIvlsLHnnIvvvIznlYXkuqvml6Dlub/lkYrpq5jmuIXop4LlvbEnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGljb246ICcuL2ltYWdlcy8wMDYucG5nJyxcbiAgICAgICAgICAgIHRpdGxlOiAn5LqR5pyN5YqhJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfotK3kubDkupHlgqjlrZjnqbrpl7TlpZfppJA8YnIvPueFp+eJh+OAgeiBlOezu+S6uuetieS/oeaBr+WPr+WtmOS6keerr+WuieWFqOS/neWvhu+8jOi2heWkp+epuumXtO+8jOaVsOaNruWmguW9semaj+ihjCdcbiAgICAgICAgfV0sXG4gICAgICAgIF9zd2lwZV9sZW5ndGggPSBfc3dpcGVfY29uZmlnLmxlbmd0aCxcbiAgICAgICAgX3N3aXBlX2V2dHMgPSB7XG4gICAgICAgICAgICBzZXRJbWdVcmw6IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgdmFyIF90ZW1wID0gX3N3aXBlX2NvbmZpZy5zbGljZShfc3dpcGVfaW5kZXgpO1xuICAgICAgICAgICAgICAgIGlmIChfdGVtcC5sZW5ndGggPCA1KSB7XG4gICAgICAgICAgICAgICAgICAgIF9zd2lwZV9jb25maWcuZm9yRWFjaChmdW5jdGlvbih2LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RlbXAubGVuZ3RoIDwgNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90ZW1wLnB1c2godik7O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0nLCBfc3dpcGVfaW5kZXgsICctLS0tJywgX3RlbXBbMl1bJ2ljb24nXSlcbiAgICAgICAgICAgICAgICAkLmVhY2goX2ljb24sIGZ1bmN0aW9uKGksIHYpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coX3RlbXBbaV1bJ2ljb24nXSlcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdpbWcnKS5hdHRyKCdzcmMnLCBfdGVtcFtpXVsnaWNvbiddKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAgICAgX3RpdC50ZXh0KF90ZW1wWzJdWyd0aXRsZSddKTtcbiAgICAgICAgICAgICAgICBfY29uLmh0bWwoX3RlbXBbMl1bJ2NvbnRlbnQnXSk7XG5cbiAgICAgICAgICAgICAgICBfaW1nLnJlbW92ZUNsYXNzKCdhbmltYXRlZCBmbGlwSW5YJykuYWRkQ2xhc3MoJ2FuaW1hdGVkIGZsaXBJblgnKTtcbiAgICAgICAgICAgICAgICBfYm94LnJlbW92ZUNsYXNzKCdhbmltYXRlZCBmbGlwSW5YJykuYWRkQ2xhc3MoJ2FuaW1hdGVkIGZsaXBJblgnKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBfaW1nLnJlbW92ZUNsYXNzKCdhbmltYXRlZCBmbGlwSW5YJyk7XG4gICAgICAgICAgICAgICAgICAgIF9ib3gucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkIGZsaXBJblgnKTtcbiAgICAgICAgICAgICAgICB9LCA4MDApO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIF9ib3ggPSAkKCcucGFnZS1zdWIgLmljb24tYm94JyksXG4gICAgICAgIF9pY29uID0gJCgnLnBhZ2Utc3ViIC5wYWdlLWNvbnRlbnQgLmljb24nKSxcbiAgICAgICAgX2ltZyA9ICQoJy5wYWdlLXN1YiAucGFnZS1jb250ZW50IC5pY29uIGltZycpLFxuICAgICAgICBfdGl0ID0gJCgnLnBhZ2Utc3ViIC5wYWdlLWZvb3Rlci0tYmctLTEgLmljb24tYm94LS10aXRsZScpLFxuICAgICAgICBfY29uID0gJCgnLnBhZ2Utc3ViIC5wYWdlLWZvb3Rlci0tYmctLTEgLmljb24tYm94LS1jb250ZW50Jyk7XG5cbiAgICBfc3dpcGVfZXZ0cy5zZXRJbWdVcmwuY2FsbCh0aGlzKTtcblxuICAgICQoXCIucGFnZS1zdWIgLnBhZ2UtY29udGVudCAubGF5b3V0LWZsZXgtLWJvZHlcIikuc3dpcGUoe1xuICAgICAgICBzd2lwZTogZnVuY3Rpb24oZXZlbnQsIGRpcmVjdGlvbiwgZGlzdGFuY2UsIGR1cmF0aW9uLCBmaW5nZXJDb3VudCwgZmluZ2VyRGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGlyZWN0aW9uLCBkaXN0YW5jZSwgZHVyYXRpb24sIGZpbmdlckNvdW50LCBmaW5nZXJEYXRhKTtcbiAgICAgICAgICAgIGlmICgvcmlnaHQvZ2kudGVzdChkaXJlY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgaWYgKF9zd2lwZV9pbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIF9zd2lwZV9pbmRleCA9IF9zd2lwZV9sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF9zd2lwZV9pbmRleC0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKC9sZWZ0L2dpLnRlc3QoZGlyZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgIGlmIChfc3dpcGVfaW5kZXggPT0gX3N3aXBlX2xlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgX3N3aXBlX2luZGV4ID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfc3dpcGVfaW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgX3N3aXBlX2V2dHMuc2V0SW1nVXJsLmNhbGwodGhpcyk7XG5cbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTsiXSwibmFtZXMiOlsibGF5ZXJfbG9hZGluZyIsIiQiLCJib3hfY29udGVudCIsImltZ3MiLCJpbWdzX2xlbmd0aCIsImxlbmd0aCIsImltZ3NfcHJvY2VzcyIsImV2dHMiLCJtIiwibiIsImF0dHIiLCJoaWRlIiwiZm9yRWFjaCIsInYiLCJpIiwiaW1nIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwib25sb2FkIiwiZGF0YSIsInB1c2giLCJjYWxsYmFjayIsInNyYyIsImxheWVyX2FsZXJ0IiwibGF5ZXJfYWxlcnRfZXZ0cyIsImV2dCIsInNob3ciLCJvbiIsImNsb3NlIiwicGFnZV9ob21lIiwicGFnZV9ob21lX2V2dHMiLCJ1cmxzIiwiZ2V0IiwiZ2V0UHJpemUiLCJyZXMiLCJwYWdlX3Jlc3VsdCIsImlkIiwidGVzdCIsIl9pbmZvIiwiZmluZCIsInRleHQiLCJsb2ciLCJvcGVubG90dG8iLCJvcGVucnVsZSIsInBhcmVudHMiLCJfdGhpcyIsIl91cmwiLCJfaHdhY2NvdW50IiwidmFsIiwicG9zdCIsIm1zZyIsIl9zd2lwZV9pbmRleCIsIl9zd2lwZV9jb25maWciLCJfc3dpcGVfbGVuZ3RoIiwiX3N3aXBlX2V2dHMiLCJfdGVtcCIsInNsaWNlIiwiZWFjaCIsIl9pY29uIiwiaHRtbCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJfYm94IiwiX2ltZyIsIl90aXQiLCJfY29uIiwic2V0SW1nVXJsIiwiY2FsbCIsInN3aXBlIiwiZXZlbnQiLCJkaXJlY3Rpb24iLCJkaXN0YW5jZSIsImR1cmF0aW9uIiwiZmluZ2VyQ291bnQiLCJmaW5nZXJEYXRhIl0sIm1hcHBpbmdzIjoiOzs7QUFBQSxDQUFDLFlBQVc7O1FBRUpBLGdCQUFnQkMsRUFBRSxnQkFBRixDQUFwQjtRQUNJQyxjQUFjRCxFQUFFLGlEQUFGLENBRGxCOztRQUdJRSxPQUFPLENBQ0gsa0JBREcsRUFFSCxrQkFGRyxFQUdILGlCQUhHLEVBSUgsa0JBSkcsRUFLSCxpQkFMRyxFQU1ILGtCQU5HLEVBT0gsa0JBUEcsRUFRSCxrQkFSRyxFQVNILGtCQVRHLEVBVUgsa0JBVkcsRUFXSCxrQkFYRyxFQVlILDhCQVpHLEVBYUgsK0JBYkcsRUFjSCxpQ0FkRyxFQWVILDhCQWZHLEVBZ0JILDhCQWhCRyxFQWlCSCx3QkFqQkcsRUFrQkgsMkJBbEJHLEVBbUJILHlCQW5CRyxFQW9CSCw2QkFwQkcsRUFxQkgsNkJBckJHLEVBc0JILDZCQXRCRyxFQXVCSCw2QkF2QkcsRUF3QkgsdUJBeEJHLENBQVg7UUEwQklDLGNBQWNELEtBQUtFLE1BMUJ2QjtRQTJCSUMsZUFBZSxFQTNCbkI7O1FBNkJJQyxPQUFPO2tCQUNHLGtCQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZTt3QkFDVEMsSUFBWixDQUFpQixPQUFqQixFQUEwQixXQUFXRixJQUFJQyxDQUFKLEdBQVEsR0FBbkIsR0FBeUIsR0FBbkQ7Z0JBQ0lELElBQUlDLENBQUosSUFBUyxDQUFiLEVBQWdCOzJCQUNELFlBQVc7a0NBQ0pFLElBQWQ7aUJBREosRUFFRyxHQUZIOzs7S0FKWjtTQVVLQyxPQUFMLENBQWEsVUFBU0MsQ0FBVCxFQUFZQyxDQUFaLEVBQWU7WUFDcEJDLE1BQU1DLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjtZQUNJQyxNQUFKLEdBQWEsVUFBU0MsSUFBVCxFQUFlO3lCQUNYQyxJQUFiLENBQWtCRCxJQUFsQjtpQkFDS0UsUUFBTCxDQUFjZixhQUFhRCxNQUEzQixFQUFtQ0Qs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
