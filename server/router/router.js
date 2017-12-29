var Until=require('../lib/Util/until.js');
var Config=require('../lib/config/config.js');
var log4js=require('../lib/log4js/logger.js');
const auth = require('../lib/auth/auth.service.js');
const config = require('../lib/config/config.js')
var sha1 = require('sha1');
var soap = require('soap');
var fs=require('fs');
const path=require('path');
const token = "Bearer "+auth.signToken(config.session.secret);
var edge = require('edge');
// routes/index.js
module.exports = function (app) {


    app.get('/c',function(){

    });

    app.post('/gettoken',function(req, res,next){
        res.writeHead(200,{
            'authorization':token
        });
        res.end(token);


        
    });

    
    app.post('/index',auth.isAuthenticated(),function(req, res,next){
        return res.send("index api"); 
    });


    app.post('/fw',function(req, res,next) {
        log4js.info("【action: /fw 】");
        return res.send("fw api"); 
    });


    app.post('/SendAcVerifyInfo',function(req, res,next){
        log4js.info("【action: /SendAcVerifyInfo 】");
        return res.send("SendAcVerifyInfo api"); 
    });


    app.use(function(req, res, next) {

        //判断是主动导向404页面，还是传来的前端路由。
    　　 //如果是前端路由则如下处理'./server/index.html'
    
        fs.readFile(path.join(__dirname,'../index.html'),'utf-8', function(err, data){
            if(err){
                console.log(err);
                res.send('后台错误');
                return next();
            } else {
                res.writeHead(200,{
                    'Content-type': 'text/html',
                    'Connection':'keep-alive'
                });
                res.end(data);
                return next();
            }
        })
    });

};
