$(document).ready(function(){
    // jQuery取input里的值的方法
    var username = $("#username").val();
    var password = $("#password").val();
    var oBtn = $("#button");
    oBtn.click(function(){
        ajax({
            url:"js-5.php",
            data:{
                "name":username.getAttribute("name"),
                "psw":password.getAttribute("name")
            },
            type:"get",
            timeout:3000,
            success:function(xhr){
                alert(xhr.responseText);
            },
            error:function (xhr) {
                alert(xhr.status);
            }
        })
    })
})
//js取input里的值的方法
// var username = document.getElementById("username").value;
// alert(username);
// var password = document.getElementById("password").value;
// alert(password);
