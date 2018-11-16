window.onload=function (ev) {
    var oBtn =document.querySelector("button");
    oBtn.onclick = function (ev1) {
        $.ajax({
            type:"get",
            url:"js-5.php",
            data:"userName=John&userPsw=Boston",
            success:function(msg){
                alert("Data Saved:" + msg);
            },
            error:function(xhr){
                alert(xhr.status);
            }
        })
    }
}
//优点
//1.提交请求的方式用大小写都可以正常发送，但是正常的ajax只能识别大写的（可以用toLowerCase）
//2.原本的传参顺序是固定的，但是jQuery参数顺序打乱之后依然能被识别，因为jQuery里面传递的参数是对象
//