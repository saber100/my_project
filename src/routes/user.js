//引入express
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();

//添加路由
//1.用户登陆（插入）
router.post("/login",(req,res)=>{
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	if (!$uname)
	{
		res.send("用户名不存在");
		return;
	}
	if (!$upwd)
	{
		res.send("密码不存在");
		return;
	}
	var sql="select * from user where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err)throw err;
		if(result.length>0){
			res.send("1")
			
		}else {
			res.send("0")
		}
	})
})

//2.用户注册(插入)
router.get("/regster",(req,res)=>{
	//验证用户名是否重复
	var $uname=req.query.uname
	var sql="select * from user where uname=?";
	pool.query(sql,[$uname],(err,result)=>{
		if(err)throw err;
		res.send(result);
	})

})
//插入用户信息
router.post("/regsters",(req,res)=>{
	//验证数据是否为空
	if(!req.body.uname){
		res.send({msg:'用户名为空'});
		return;
	}
	if(!req.body.upwd){
		res.send({msg:'密码为空'});
		return;
	}
	if(!req.body.email){
		res.send({msg:'邮箱为空'});
		return;
	}
	if(!req.body.phone){
		res.send({msg:'手机号为空'});
		return;
	}
	
	//把数据插入数据库
	pool.query('INSERT INTO user SET ?',[req.body],(err,result)=>{
		if(err)throw err;
		if(result.affectedRows>0){
			res.send("1")
		}else{
			res.send("0")
		}
	})
})

//导出路由器
module.exports=router;