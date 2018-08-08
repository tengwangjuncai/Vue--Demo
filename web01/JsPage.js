//第一步

//第二步  操作谁获取谁
var  otab = document.getElementById("tab");
var olis = otab.getElementsByTagName("li");
var oDivs=otab.getElementsByTagName("div");

//都散步：写方法 实现需求
function  tabChange(index) {

    for(var i=0;i<olis.length;i++){
        olis[i].className="";
        oDivs[i].className="";
    }
    olis[index].className="select";
    oDivs[index].className="select";
}

for (var i = 0;i<olis.length;i++){
    olis[i].wpy = i;
    olis[i].onmouseover= function () {
        tabChange(this.wpy);
    }
}