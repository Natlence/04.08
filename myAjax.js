function obj2str(data) {
    data.t = new Date().getTime();
    var res = [];
    for (var key in data){
        res.push(encodeURIComponent(key)+"="+encodeURIComponent(data[key]));//[userName=lala,userPsw=123456]
    }
    return res.join("&");//[userName=lala&userPsw=123456]
}
function ajax(option) {
    //0.将对象转换成字符串
    var str = obj2str(option.data);
    // 1.创建一个异步对象
    var xmlhttp,timer;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();//ie5、6不支持，参考w3c
    }else{
        xmlhttp-new ActiveXObject("Microsoft.XMLHTTP");
    }
    //2.设置请求方式和请求地址
    /*
    open(method,url,async)	规定请求的类型、URL 以及是否异步处理请求。
    method：请求的类型；GET 或 POST
    url：文件在服务器上的位置
    async：true（异步）或 false（同步）
    */
    /*在IE浏览器中，如果通过ajax发送get请求，那么IE浏览器会认为一个url只有一个结果（IE缓存问题）*/
    if (option.type.toLowerCase() === "get"){
        xmlhttp.open("GET",option.url+"?"+str,true);
        //3.发送请求
        xmlhttp.send();
    }else{
        xmlhttp.open(option.type,option.url,true);
        xmlhttp.setRequestHeader("Content-type","application/ x-www-form-urlencoded");
        xmlhttp.send(str);
    }

    //4.监听状态的变化
    /*
    0: 请求未初始化
    1: 服务器连接已建立
    2: 请求已接收
    3: 请求处理中
    4: 请求已完成，且响应已就绪
    */
    xmlhttp.onreadystatechange =function (ev) {
        if (xmlhttp.readyState === 4) {
            clearInterval(timer);
            //判断是否请求成功
            if(xmlhttp.status>=200 && xmlhttp.status<300 || xmlhttp.status === 304){
                //5.处理返回的结果
               option.success(xmlhttp);
            }
            else{
                option.error();
            }
        }
    }
//    判断外界是否传入超时时间
    if (option.timeout){
        timer = setInterval(function () {
            console.log("中断请求");
            xmlhttp.abort();
            clearInterval(timer);
        },option.timeout);
    }
}