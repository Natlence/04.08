<?php
//1.定义字典保存用户信息
$user = array (
    1 => array('username'=> '123','password' => '123'),
    2 => array('username'=> '234','password' => '234'),
    3 => array('username'=> '345','password' => '345')
);
//2.判断是否有登录表单提交
if (isset($_GET['username'])&& isset($_GET['password'])){
      //取出用户名和密码
    $username = strtolower(trim($_GET['username']));
    $password = $_GET['password'];
      //到数组中查询
    foreach($user_data as $k => $v){
        if ($v['username'] == $username && $v['password'] == $password){
            echo ('LALALAL');
        }
        else{
            echo('failed');
        }
    }
}
