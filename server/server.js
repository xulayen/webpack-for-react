'use strict';
var http=require('http');
var express=require('express');
var path=require('path');
var ejs=require('ejs');
var bodyParser = require('body-parser');
var logger = require('morgan');
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
var app=express();
var log4js=require('./lib/log4js/logger.js');
var config=require('./lib/config/config.js');


app.use(bodyParser.urlencoded({extended:false}));
app.use(logger('dev'));
app.engine('.html',ejs.__express);
app.set('view engine','html');
app.set('views',path.join(__dirname));
app.use(express.static(__dirname));

// session 中间件
app.use(session({
  name: config.session.key, // 设置 cookie 中保存 session id 的字段名称
  secret: config.session.secret, // 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
  resave: true, // 强制更新 session
  saveUninitialized: false, // 设置为 false，强制创建一个 session，即使用户未登录
  cookie: {
    maxAge: config.session.maxAge// 过期时间，过期后 cookie 中的 session id 自动删除
  },
    //   store: new MongoStore({// 将 session 存储到 mongodb
    //     url: config.mongodb// mongodb 地址
    //   })
}));


var routes = require('./router/router.js')(app);
const PORT = parseInt(process.env.LEANCLOUD_APP_PORT || config.port);
var server = http.createServer(app);
let _s='';
if(process.env.NODE_ENV && process.env.NODE_ENV.indexOf('production')>-1){
    server.listen(PORT, function(){
        _s='App (production) is now running on port '+PORT;
        console.log(_s);
        log4js.info(_s);
    });

}else{
    server.listen(PORT, function(){
        _s='App (dev) is now running on port '+PORT;
        console.log(_s);
        log4js.info(_s);
    });
}




