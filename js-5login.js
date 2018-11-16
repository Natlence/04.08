$(document).ready(function(){
    // jQuery取input里的值的方法
    var username = $("#username").val();
    var password = $("#password").val();
    var oBtn = $("#button");
    oBtn.click(function(){
        ajax({
            url:"https://natlence.github.io/04.08/03.31.02.html",
            data:{"name":this.getAttribute("name")},
            type:"get",
            timeout:3000,
            success:function(xhr){
            alert(xhr.responseText);
            },
            error:function (xhr) {
            alert("请求失败");
            }
        })
    })
})
//js取input里的值的方法
// var username = document.getElementById("username").value;
// alert(username);
// var password = document.getElementById("password").value;
// alert(password);
