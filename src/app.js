const express=require('express');
const bodyParser=require('body-parser');
const userRouter=require('./routes/user.js');

//创建web服务器
var server=express();
server.listen(8080, function () {
  console.log('Your application open on 127.0.0.1:8080');
});
//托管静态资源到public目录下
server.use( express.static('mypro') );
//使用body-paeser中间件
server.use( bodyParser.urlencoded({
  extended:false
}) );
//挂载路由器，挂载到/user  路由访问 /user/reg
server.use( '/user',userRouter );
