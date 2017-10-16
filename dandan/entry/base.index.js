import './base.loading.js';

(function() {
    // layer_alert
    var layer_alert = $('.layer-alert'),
        layer_alert_evts = {
            close: function(evt) {
                layer_alert.hide();
            },
            open: function(evt) {
                layer_alert.show();
            }
        };

    layer_alert.on('click', '.alert--btn', layer_alert_evts.close);
    layer_alert.on('click', '.alert-close--btn', layer_alert_evts.close);

    // 
    $('.layer-swipe-mask').on('click', function() {
        $(this).hide();
    });
    // page-home
    var page_home = $('.page-home'),
        page_home_evts = {
            openlotto: function(evt) {

                var urls = {
                    getPrize: '/home/index/getPrize'
                };

                $.get(urls.getPrize, {}, function(res) {

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
            openrule: function(evt) {
                console.log('openrule')
            }
        };

    page_home.on('click', '.icon-01,.icon-02', page_home_evts.openlotto);
    page_home.on('click', '.layout-flex--btn', page_home_evts.openrule);

    // 结果页点击后关闭
    $('.result-btn').on('click', function() {
        $(this).parents('.page').hide();
    });

    $('.result-btn--lingqu').on('click', function() {
        var _this = this,
            _url = '/home/index/addaccount',
            _hwaccount = $('.hwaccount').val();

        if (/^\s*$/gi.test(_hwaccount)) {
            alert('帐户不能为空');
            return;
        }

        $.post(_url, { 'hwaccount': _hwaccount }, function(data) {
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
            setImgUrl: function() {

                var _temp = _swipe_config.slice(_swipe_index);
                if (_temp.length < 5) {
                    _swipe_config.forEach(function(v, i) {
                        if (_temp.length < 5) {
                            _temp.push(v);;
                        }
                    });
                }
                console.log('----', _swipe_index, '----', _temp[2]['icon'])
                $.each(_icon, function(i, v) {
                    console.log(_temp[i]['icon'])
                    $(this).find('img').attr('src', _temp[i]['icon']);
                });


                _tit.text(_temp[2]['title']);
                _con.html(_temp[2]['content']);

                _img.removeClass('animated flipInX').addClass('animated flipInX');
                _box.removeClass('animated flipInX').addClass('animated flipInX');
                setTimeout(function() {
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
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
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