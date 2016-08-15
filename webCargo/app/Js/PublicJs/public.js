// 获取根路径
var localhostPaht;
var subIndex;
var menuIndex;
function getRootPath(){
    var curWwwPath=window.document.location.href;
    var pathName=window.document.location.pathname;
    var pos=curWwwPath.indexOf(pathName);
    localhostPaht=curWwwPath.substring(0,pos);

    var urlParam = window.location.search;
    var urlParamArray = urlParam.split("&");
    menuIndex = urlParamArray[0].split("=")[1];
    subIndex = urlParamArray[1].split("=")[1];

    if(menuIndex == undefined){
        menuIndex = 1;
    }else{
        menuIndex = menuIndex * 1;
    }

    if(subIndex == undefined){
        subIndex = 11;
    }else{
        subIndex = subIndex * 1;
    }
}
getRootPath();

$(document).ready(function () {
    // 自定义下拉框样式
    $("div.selectInput").live('click', function () {
        var $element = $(this);
        selectbox($element);
    });

    // 下拉框移开消失
    $(".selectLable").live('mouseleave', function () {
        $("div.selectLable").hide();
    });
});

// 自定义下拉框样式
function selectbox($element) {
    var $nextSelectLable = $element.next("div.selectLable");
    $nextSelectLable.show();
    $nextSelectLable.find("li").unbind("click").bind('click',function () {
        var html = $(this).html();
        var value = $(this).attr("index");
        var $chooseText = $element.find("input.chooseText");
        $chooseText.val(html);
        $("div.selectLable").hide();
        $chooseText.attr("index",value);
    });
}
