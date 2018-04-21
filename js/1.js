window.onload = function(){
    // 关闭topbanner的图片
    var jd_close = document.getElementById("jd_close");
    jd_close.onclick = function ( ) {
        this.parentNode.style.display = "none";
    }

    // 轮播
    var scroll = document.getElementById("scroll");
    var circle = document.createElement("div");
    circle.setAttribute("class", "circle");//更改类名
    scroll.appendChild(circle);
    var ul = document.getElementById("ul");
    var lis = ul.children;
    //大盒子里要放入n个小的span
    for (var i = 0; i < lis.length; i++) {
        var newspan = document.createElement("span");
        //创建6次span
        newspan.innerHTML = i+1;
        circle.appendChild(newspan);
    }
    var spans = circle.children;
    spans[0].setAttribute("class","current");
    for (var i = 0; i < spans.length; i++) {
        spans[i].index = i;
        spans[i].onmouseover = function(){
        for (var j = 0; j < spans.length; j++) {
            spans[j].setAttribute("class","");
            lis[j].setAttribute("class","arrow");
        }
        this.setAttribute("class","current");
        lis[this.index].setAttribute("class","");
        }
    }
    
    // 三角箭头
    var arr = document.getElementById("arr");
    var scroll = document.getElementById("scroll");
    scroll.onmouseover = function(){
        arr.style.display = "block";  // 显示三角
    }
    scroll.onmouseout = function(){
        arr.style.display = "none";  // 隐藏三角
    }


    // 登录
    var login = document.getElementById("login");
    var mask = document.getElementById("mask");
    var box = document.getElementById("box");
    login.onclick = function ( ) {
        mask.style.display = "block";
        box.style.display = "block";
    }
    // 关闭登录
    var close_all = document.getElementById("close_all");
    close_all.onclick = function ( ) {
        mask.style.display = "none";
        box.style.display = "none";
    }

    //12张图片遍历
    //找到所有的i
    var iis = document.getElementById("iconsprite").getElementsByTagName("i");
    for(var i=0; i<iis.length; i++)
    {
        iis[i].style.backgroundPosition ="-25px "+(-25*i)+"px";
    }
}