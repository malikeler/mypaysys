var move1 = '<ul class="std-move-inof">'+
                '<li class="std-move-nub">'+
                    '<img src="/Public/En/images/0bg1.png" alt="">'+
                    '<svg width="1735" height="53" viewBox="0 0 1735 53" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                    '<path d="M916.664 42.0882C619.528 42.0882 204.718 0 7.17397e-06 0L0 53H1735L1735 0C1519 0 1213.8 42.0882 916.664 42.0882Z" fill="var(--bg)"/>'+
                    '</svg>'+
                '</li>'+
                '<li class="std-move-nub">'+
                    '<img src="/Public/En/images/0bg1.png" alt="">'+
                    '<svg width="1735" height="53" viewBox="0 0 1735 53" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                    '<path d="M916.664 42.0882C619.528 42.0882 204.718 0 7.17397e-06 0L0 53H1735L1735 0C1519 0 1213.8 42.0882 916.664 42.0882Z" fill="var(--bg)"/>'+
                   '</svg>'+
                '</li>'+
                '<li class="std-move-nub">'+
                    '<img src="/Public/En/images/0bg1.png" alt="">'+
                    '<svg width="1735" height="53" viewBox="0 0 1735 53" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                    '<path d="M916.664 42.0882C619.528 42.0882 204.718 0 7.17397e-06 0L0 53H1735L1735 0C1519 0 1213.8 42.0882 916.664 42.0882Z" fill="var(--bg)"/>'+
                    '</svg>'+
                '</li>'+
            '</ul>';
$('.std-move').each(function () {  
    $(this).append(move1);
});
$('.std-img').each(function () {
    $(this).attr('src', $(this).data('src'));
});
$(function () {
    new WOW().init(); // wow初始化
    if($(window).width()<1200){
        ys.phNavInit(4);// 移动端导航
    }
    $(".ys-phnav-menubtn").click(function() {
        $('.ys-ph-navbar').toggleClass('act');
    });
    ys.navSlide();// pc端导航默认下拉一级
    ys.yxlenis(1.2,true);
    ys.screenh();  // 移动端屏幕高度
    ys.dots1(); // slick-轮播进度条
    // 导航不在顶部时加类名isfixed,hover时加类名ishover
    ys.isFixed(".ys-hd-pc");
    isFixed1(".ys-hd-ph");
    // search
    ys.pcSearch(5);
    // lang
    ys.lang('.head-lang','.head-lang-down');
    // 底部二维码  pc hover的li   ph 点击的按钮   二维码盒子
    ys.footershare(".footer-share li",'.footer-share-btn','.footer-share-code');
    ys.navSlide2('.hnid-ul-li-cont','.hnid-ul-li',"yxnav-active2");
});
$(".ys-phnav3-lang-hd").click(function() {
    $(this).toggleClass("on");
    $(".ys-phnav3-lang-bd").stop().slideToggle();
});
$('.ys-phnav3-lang-hd a').click(function(e) {
    e.stopPropagation();
});
$(window).scroll(function(){
    navtop();
});
function navtop(){
    // 滑动导航消失与否
    if ($(window).scrollTop() > 0) {
        $(window).mousewheel(function (event) { 
            if(event.deltaY >= 0){
                $('.ys-header').stop().removeClass('on');
                $('.ys-page-wrap').stop().removeClass('on1');
            }else{
                $('.ys-header').stop().addClass('on');
                $('.ys-page-wrap').stop().addClass('on1');
            }
        });
    } else {
        $(".ys-header").stop().removeClass('on');
        $('.ys-page-wrap').stop().removeClass('on1');
    }
}
function isFixed1(selector,pos) {
    var $obj = $(selector);
    var pos = pos || 0;
    $(function() {
        judgeTop()
    });
    $(window).on("scroll", judgeTop);
    $(window).on("load", judgeTop);
    $(window).on("resize", judgeTop);
    function judgeTop() {
        if ($(window).scrollTop() > pos) {
            $obj.addClass("isfixed");
        } else {
            $obj.removeClass("isfixed");
        }
    }
}


