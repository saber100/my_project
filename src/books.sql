#设置客户端连接服务器端的编码
SET NAMES UTF8;
#丢弃数据库
DROP DATABASE IF EXISTS books;
#创建数据库，设置存储的编码为UTF8
CREATE DATABASE books CHARSET=UTF8;
#进入数据库
USE books;
#创建保存用户数据的表
CREATE TABLE user(
  uid INT,
  uname VARCHAR(16),
  upwd VARCHAR(32),
  email VARCHAR(32),
  phone VARCHAR(11)
);
#插入数据
INSERT INTO user VALUES('1','dangdang','123456','dangdang@163.com','18112345678');
INSERT INTO user VALUES('2','dingding','123456','dingding@qq.com','18312345678');
INSERT INTO user VALUES('3','mingming','654321','mingming@sina.com','19912345678');


