(function() {

    var layer_loading = $('.layer-loading'),
        box_content = $('.layer-loading .layer-loading--box .box-content');

    var imgs = [
            './images/header.jpg',
            './images/footer.png',
            './images/alert-info-bg.png',
            './images/alert-rule-bg.png',
            './images/page-0-0.png',
            './images/page-0-1.png',
            './images/page-1-0.png',
            './images/page-1-3.png',
            './images/page-2-0.png',
            './images/page-2-2.png',
            './images/page-3-0.png',
            './images/page-4-0.png',
            './images/page-5-0.png',
            './images/page-bg.png'
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