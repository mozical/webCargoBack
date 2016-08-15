
var modelSidebar = avalon.define({
    $id: "siderbar",
    childUL: menuIndex,
    subMenuSelected: subIndex,

    subMenuClick: function (menuIndex,subIndex) {
        console.log(subIndex);
        if (subIndex == 11) {
            window.location.href = localhostPaht + "/AccountManagement/SupplyAccount/supplyAccount.html?menuIndex=" + menuIndex + "&subIndex="  + subIndex;
        }else if (subIndex == 12) {
            window.location.href = localhostPaht + "/AccountManagement/DriverAccount/driverAccount.html?menuIndex=" + menuIndex + "&subIndex="  + subIndex;
        }else if(subIndex == 13){
            window.location.href = localhostPaht + "/AccountManagement/FleetManagement/fleetManagement.html?menuIndex=" + menuIndex + "&subIndex="  + subIndex;
        }else if(subIndex == 14){
            window.location.href = localhostPaht + "/AccountManagement/SchedulingManagement/schedulingManagement.html?menuIndex=" + menuIndex + "&subIndex="  + subIndex;
        }else if(subIndex == 15){
            window.location.href = localhostPaht + "/AccountManagement/FleetDriverManagement/fleetDriverManagement.html?menuIndex=" + menuIndex + "&subIndex="  + subIndex;
        }
    }
});


// 菜单的展开与收起
function showChildUl(el) {
    var isShow = $(el).next(".childUL").css("display");
    if (isShow == 'block') {
        $(el).next(".childUL").hide();
    } else {
        $(".childUL").hide();
        $(el).next(".childUL").show();
    }
}
