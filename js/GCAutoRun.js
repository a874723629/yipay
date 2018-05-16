function GCAutoRun(ImagesName, speed) {
    $(ImagesName).css({
        "width": "100%",
        "position": "absolute",
        "opacity": "0"
    })
    function GCrun() {
        //轮播图数量
        var num = $(ImagesName).length;
        //轮播编号
        var number = 0;
        numbercheck = function () {
            number++;
            if (number >= num) {
                number = 0;
            };
        }
        function run() {
            $(ImagesName).eq(number).stop().animate({
                width: "120%",
                left: "-10%",
                opacity: "1"
            }, speed).siblings().stop().animate({
                width: "100%",
                left: "0",
                opacity: "0"
            }, speed);
        }
        return run;
    }
    var Grun = GCrun();
    numbercheck();
    Grun();
    setInterval(function () {
        numbercheck();
        Grun();
    }, speed);
}
$(".help").click(function () {
    alert("暂时无法提供注册服务，请联系客服");
})