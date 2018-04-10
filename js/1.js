window.onload = function(){
    // 关闭topbanner的图片
    var jd_close = document.getElementById("jd_close");
    var top_banner = document.getElementById("top_banner");
    jd_close.onclick = function ( ) {
        top_banner.style.display = "none";
    }

    // 三角箭头
    var arr = document.getElementById("arr");
    var slider = document.getElementById("slider");
    slider.onmouseover = function(){
        arr.style.display = "block";  // 显示三角
    }
    slider.onmouseout = function(){
        arr.style.display = "none";  // 隐藏三角
    }

    // 轮播
    var circle1 = document.getElementById("circle1");
    var circle2 = document.getElementById("circle2");
    var circle3 = document.getElementById("circle3");
    var circle4 = document.getElementById("circle4");
    var circle5 = document.getElementById("circle5");
    var circle6 = document.getElementById("circle6");
    var slider_img = document.getElementById("slider-img");
    circle1.onmouseover = function(){
        slider_img.src = "images/11.jpg";
        circle1.style.backgroundColor = "#B61B1F";
        circle2.style.backgroundColor = "#3E3E3E";
        circle3.style.backgroundColor = "#3E3E3E";
        circle4.style.backgroundColor = "#3E3E3E";
        circle5.style.backgroundColor = "#3E3E3E";
        circle6.style.backgroundColor = "#3E3E3E";
    }
    circle2.onmouseover = function(){
        slider_img.src = "images/22.jpg";
        circle1.style.backgroundColor = "#3E3E3E";
        circle2.style.backgroundColor = "#B61B1F";
        circle3.style.backgroundColor = "#3E3E3E";
        circle4.style.backgroundColor = "#3E3E3E";
        circle5.style.backgroundColor = "#3E3E3E";
        circle6.style.backgroundColor = "#3E3E3E";
    }
    circle3.onmouseover = function(){
        slider_img.src = "images/33.jpg";
        circle1.style.backgroundColor = "#3E3E3E";
        circle2.style.backgroundColor = "#3E3E3E";
        circle3.style.backgroundColor = "#B61B1F";
        circle4.style.backgroundColor = "#3E3E3E";
        circle5.style.backgroundColor = "#3E3E3E";
        circle6.style.backgroundColor = "#3E3E3E";
    }
    circle4.onmouseover = function(){
        slider_img.src = "images/44.jpg";
        circle1.style.backgroundColor = "#3E3E3E";
        circle2.style.backgroundColor = "#3E3E3E";
        circle3.style.backgroundColor = "#3E3E3E";
        circle4.style.backgroundColor = "#B61B1F";
        circle5.style.backgroundColor = "#3E3E3E";
        circle6.style.backgroundColor = "#3E3E3E";
    }
    circle5.onmouseover = function(){
        slider_img.src = "images/55.jpg";
        circle1.style.backgroundColor = "#3E3E3E";
        circle2.style.backgroundColor = "#3E3E3E";
        circle3.style.backgroundColor = "#3E3E3E";
        circle4.style.backgroundColor = "#3E3E3E";
        circle5.style.backgroundColor = "#B61B1F";
        circle6.style.backgroundColor = "#3E3E3E";
    }
    circle6.onmouseover = function(){
        slider_img.src = "images/66.jpg";
        circle1.style.backgroundColor = "#3E3E3E";
        circle2.style.backgroundColor = "#3E3E3E";
        circle3.style.backgroundColor = "#3E3E3E";
        circle4.style.backgroundColor = "#3E3E3E";
        circle5.style.backgroundColor = "#3E3E3E";
        circle6.style.backgroundColor = "#B61B1F";
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

}