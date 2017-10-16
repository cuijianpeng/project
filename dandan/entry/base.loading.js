(function() {

    var layer_loading = $('.layer-loading'),
        box_content = $('.layer-loading .layer-loading--box .box-content');

    var imgs = [
            './images/000.png',
            './images/001.png',
            './images/01.png',
            './images/002.png',
            './images/02.png',
            './images/003.png',
            './images/004.png',
            './images/005.png',
            './images/006.png',
            './images/app.png',
            './images/box.png',
            './images/layer-alert--bg.png',
            './images/page-content--bg.jpg',
            './images/page-footer--bg--1.png',
            './images/page-footer--bg.png',
            './images/page-header--bg.png',
            './images/page-logo.png',
            './images/page-sub--bg.png',
            './images/result-btn.png',
            './images/result-icon-01.png',
            './images/result-icon-02.png',
            './images/result-icon-03.png',
            './images/result-icon-04.png',
            './images/swipe-bg.png'
        ],
        imgs_length = imgs.length,
        imgs_process = [];

    var evts = {
        callback: function(m, n) {
            box_content.attr('style', "width:" + m / n * 100 + '%');
            if (m / n == 1) {
                setTimeout(function() {
                    layer_loading.hide();
                }, 400);
            }
        }
    };
    imgs.forEach(function(v, i) {
        var img = document.createElement('img');
        img.onload = function(data) {
            imgs_process.push(data);
            evts.callback(imgs_process.length, imgs_length);
        };

        img.src = v;
    });


})();