// 初始化绑定信息
var model = avalon.define({
    // model的ID
    $id: "AccountManagement",
    // 获取头部信息页面
    topIncludeHtml: localhostPaht + "/PublicHtml/top.html",
    // 获取左侧菜单导航页面
    menuNavIncludeHtml: localhostPaht + "/PublicHtml/siderbar.html",
    splitePageHtml: localhostPaht + "/PublicHtml/splitePage.html",
    alertPageHtml: localhostPaht + "/PublicHtml/empty.html",
    // 获取表格数据
    dataTableList: [],
    // 所有数据
    dataAllList: [],
    // 数据共计页数
    dataPageLength: 1,
    // 默认分页显示行数
    pageSize: 10,
    // 当前页数
    currentPage: 1,

    // 获取右侧表格数据
    getDataTableList: function () {
        $.ajax({
            type: "GET",
            url: localhostPaht + "/Json/AccountManagement/supplyAccount.json",
            dataType: "json",
            async: false,
            success: function (data) {
                var item = data.Data;
                model.dataAllList = item;
                model.dataPageLength = Math.ceil(item.length / model.pageSize);
                for (var i = 0; i < model.pageSize; i++) {
                    model.dataTableList.push(item[i]);
                }
            }
        });
    },

    // 数据行单击
    listClick: function () {
        $(".tableData tbody tr").removeClass("selectedTR");
        $(this).addClass("selectedTR");
    },

    // 导航单击
    supplyAccountNavClick: function(index){
        var id = $("#supplyAccountTable").find(".selectedTR").attr("id");
        if(id == undefined){
            alert("请先选择数据行！");
        }else if(index == 1){
            model.alertPageHtml = localhostPaht + "/AccountManagement/SupplyAccount/InformationPerfect.html";
        }else if(index == 2){
            model.alertPageHtml = localhostPaht + "/AccountManagement/SupplyAccount/InformationAudit.html";
        }
    }
});

// 调用获取菜单列表方法
model.getDataTableList();
