var aniname;
//被卷去的高度
var ws;
//窗口高度
var whight;

//需要执行动画的元素添加class alla
//data-aniname=执行动画名
//页面加载时遍历要执行动画的元素
function reload() {
    //获取窗口被卷去的内容
    ws = $(window).scrollTop();
    //获取窗口高度
    whight = $(window).height();
}
function alla() {
    $(".alla").each(function () {
        //获取data-aniname属性
        aniname = $(this).data("aniname");
        if ($(this).offset().top <= whight + ws || $(this).offset().top <= whight) {
            $(this).addClass("animated" + " " + aniname);
        }
    });
}
$(function () {
    reload();
    alla();
})
$(window).resize(function () {
    reload() 
    alla();
}).scroll(function () {
    reload()
    alla();
    })
////当页面滚动时
//$(window).scroll(function () {
//    reload() 
//    alla();

//})