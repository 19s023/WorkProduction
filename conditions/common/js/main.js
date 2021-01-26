// サイト読み込み時無駄なアニメーション実行を行わないようにする
$(window).on('load' , function() {
    $("body").removeClass("preload");
});

// ハンバーガーメニュー
// click on action
$(function(){
    $('.Toggle').click(function(){
        $(this).toggleClass('active');
        $('.header').toggleClass('active');
        $('body').toggleClass('bodyActive');
    });
});