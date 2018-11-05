// 添加版本
function addVersion(){
    userAuth = document.getElementById("userAuth").value;
    if ( userAuth == "admin" ) {
        var versionName = document.getElementById("versionName").value;
        if ( versionName == "" ) {
            alert("请输入版本号进行添加！！！")
            return
        }
        if ( confirm("请确认是否添加此版本？") == true){
            $.post("/addVersion",{'versionName':versionName},function(ret){
                location.reload()
            })
        }
    }
    else {
        alert("您没有添加版本的权限！！！");
        return
    }
}

// 删除版本
function delVersion(event){
    userAuth = document.getElementById("userAuth").value;
    if ( userAuth == "admin" ) {
        var versionID = event.name.split("_")[1]
        if ( confirm("请确认是否删除此版本？") == true){
            $.post("/delVersion",{'versionID':versionID},function(ret){
                location.reload()
            })
        }
    }
    else {
        alert("您没有删除版本的权限！！！");
        return
    }
}

// 订阅版本
function abonnementReport(event){
    // 获取versionID
    versionID = event.name.split("_")[1]

    // 已订阅,这里处理"取消订阅"的功能
    if (event.value == "0"){
        if ( confirm("请确认是否取消订阅此版本邮件？") == true){
            $.post("/abonnementReport",{'versionID':versionID,'doAction':event.value},function(ret){
                location.reload()
            })
            return
        }
        return
    }
    // 未订阅,这里处理"订阅报告"的功能

    if (event.value == "1"){
        if ( confirm("请确认是否订阅此版本邮件？") == true){
            $.post("/abonnementReport",{'versionID':versionID,'doAction':event.value},function(ret){
                location.reload()
            })
            return
        }
        return
    }
}

// 查看订阅人
function viewVersionUsers(event){
    // 获取版本名称
    versionName = event.name

    // 查看单个版本订阅人
    if ( versionName != "viewAllAbUser" ){
        $.get("/viewVersionUsers",{'versionName':versionName},function(ret){
            var obj = JSON.parse(JSON.stringify(ret))
            alert(obj.userList)
        },"json")
    }
    else{
        $.get("/viewVersionUsers",function(ret){
            alert(JSON.stringify(ret))
        },"json")
    }
    return
}
