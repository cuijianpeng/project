import './base.auto.js';
import './base.loading.js';




(function () {


    // 终端判断
    var u = navigator.userAgent,
        app = navigator.appVersion;
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