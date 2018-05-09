window.onload = function(){
	//注册
    var nname = document.getElementById("nname");
    var npwd = document.getElementById("npwd");
    var againpwd = document.getElementById("againpwd");
    var registerbtn = document.getElementById("registerbtn");
    nname.onclick = function ( ){
        if (nname.value == "用户名") {
            nname.value = "";
            nname.style.color = "#666";
        }
    }
    npwd.onclick = function ( ){
        if (npwd.value == "密码") {
            npwd.value = "";
            npwd.style.color = "#666";
            npwd.type = "password";
        }
    }
    againpwd.onclick = function ( ){
        if (againpwd.value == "确认密码") {
            againpwd.value = "";
            againpwd.style.color = "#666";
            againpwd.type = "password";
        }
    }
    registerbtn.onclick = function ( ){
        if (npwd.value == againpwd.value && npwd.value !== "" 
        	&& nname.value !== "" && nname.value !== "用户名") {
        	alert("注册成功！");
        }else{
            alert("注册信息有误！");
        }
    }
}
