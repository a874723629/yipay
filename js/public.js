$(function () {
    $(".head-menu-li").mouseover(function () {
        $(this).find(".drop-list").stop().slideDown(300);

    }).mouseout(function () {
        $(this).find(".drop-list").stop().slideUp(300);
    })

    $(".drop-list").mouseover(function () {
        $(this).stop().slideDown(300);
    }).mouseout(function () {
        $(this).stop().slideUp(300);
        })
    $(".help").click(function () {
        alert("暂时无法提供注册服务，请联系客服");
    })
                //显示状态
    var showtype;
    $(".fx-show-button").click(function () {
        showtype = $(".fx").css("right");
        if (showtype == "-240px") {
            $(".fx").addClass("fx-show");
            $(this).text(">")
        } else if (showtype == "0px") {
            $(".fx").removeClass("fx-show");
            $(this).text("<")
        }
    })
})