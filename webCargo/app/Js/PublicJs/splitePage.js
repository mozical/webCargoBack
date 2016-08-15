// 前端分页

model.$watch('pageSize', function (after, pre) {
    var pageSize = model.pageSize;
    var length = model.dataAllList.length;
    var pageLength;
    var endIndex;
    model.currentPage = 1;
    model.dataPageLength = Math.ceil(length / pageSize);
    pageLength = pageSize * model.currentPage;
    if(pageLength > length){
        endIndex = length;
    }else{
        endIndex = pageLength;
    }
    var newPageData = [];
    for (var i = 0; i < endIndex; i++) {
        newPageData.push(model.dataAllList[i]);
    }
    model.dataTableList = newPageData;
})

// 点击上一页
function prePage() {
    if (model.currentPage == 1) {
        alert("亲，已经是第一页了。");
    } else {
        // 分页
        splitePage("up");
        model.currentPage = model.currentPage * 1 - 1;
    }
}

// 点击下一页
function nextPage() {
    if (model.currentPage == model.dataPageLength) {
        alert("亲，已经是最后一页了。");
    } else {
        // 分页
        splitePage("down");
        model.currentPage = model.currentPage * 1 + 1;
    }
}

// 回到首页
function backwardPage() {
    if (model.currentPage == 1) {
        alert("亲，已经是第一页了。");
    } else {
        // 分页
        splitePage("first");
        model.currentPage = 1;
    }
}

// 回到尾页
function forwardPage() {
    if (model.currentPage == model.dataPageLength) {
        alert("亲，已经是最后一页了。");
    } else {
        // 分页
        splitePage("last");
        model.currentPage = model.dataPageLength * 1;
    }
}

// 刷新
function refereshPage() {
    var currentPage = model.currentPage * 1;
    var dataPageLength = model.dataPageLength * 1;
    if (currentPage > dataPageLength) {
        alert("亲，跳转页数不能超过总页数！");
        //回到首页
        backwardPage();
        return;
    }

    // else{
    //     // 分页
    //     splitePage("refreash");
    // }
    var pageSize = model.pageSize * 1;
    var allLength = currentPage * pageSize;
    // 数据总长度
    var length = model.dataAllList.length;
    // 起始页
    var startIndex;
    // 结束页
    var endIndex;
    if (allLength < length) {
        endIndex = allLength;
    } else {
        endIndex = length;
    }
    startIndex = pageSize * (currentPage - 1);
    var newPageData = [];
    for (var i = startIndex; i < endIndex; i++) {
        newPageData.push(model.dataAllList[i]);
    }
    model.dataTableList = newPageData;
}

// 分页方法
function splitePage(pageAction) {
    // 分页行数
    var pageSize = model.pageSize * 1;
    // 当前页码
    var currentPage = model.currentPage * 1;
    // 数据总长度
    var length = model.dataAllList.length;
    // 起始页
    var startIndex;
    // 结束页
    var endIndex;
    if (pageAction == "up") {
        startIndex = pageSize * (currentPage - 2);
        endIndex = pageSize * (currentPage - 1);
    } else if (pageAction == "down") {
        startIndex = pageSize * currentPage;
        endIndex = pageSize * (currentPage + 1);
        if (endIndex > length) {
            endIndex = length;
        }
    } else if (pageAction == "first") {
        startIndex = 0;
        endIndex = pageSize;
    } else if (pageAction == "last") {
        startIndex = pageSize * (model.dataPageLength - 1);
        endIndex = length;
    }
    // 获取数据
    var newPageData = [];
    for (var i = startIndex; i < endIndex; i++) {
        newPageData.push(model.dataAllList[i]);
    }
    model.dataTableList = newPageData;
}

// 回车跳转指定页面
function turnToPage(event){
     if (event.keyCode == 13) {
         refereshPage();
     }
}
