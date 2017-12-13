var Until=require('../lib/Util/until.js');
var Config=require('../lib/config/config.js');
var sha1 = require('sha1');
var soap = require('soap');
var fs=require('fs');

// routes/index.js
module.exports = function (app) {

    app.get('/',function(req, res,next){
        console.log(__dirname);
        res.render('index.html');  
    });

    app.get('/index',function(req, res,next){
        res.send('反向代理 nodejs root ~~~'); 
    });

    app.post('/fw', function(req, res,next) {
        req.session.user = "1111111111111111111";
        let accode=req.body.accode || '6675697746308516';
        let ip='10.20.26.19';//Until.getClientIp(req);
        let message='-1',result='-1',systemState='-1';
        let args={
            userID: Config.userID,
            userPwd: Config.userPwd,
            ip: ip,
            acCode: accode,
            language: Config.language,
            channel: Config.channel,
            channeltype: Config.channeltype,
            country: Config.country,
            sign: sha1(accode+Config.token).toUpperCase(),
            message:"",
            reply:"",
            systemState:""
        };
        soap.createClient(Config.url, function(err, client) {
        client.Get_QRCodeIsTrue(args, function(err, result) {
                console.log(result);
                return res.send(result); 
            });
        });
    });


    app.post('/SendAcVerifyInfo',function(req, res,next){
        let accode=req.body.accode || '6675697746308516';
        let queryid=req.body.queryid;
        let feedback=req.body.feedback;
        let ip='10.20.26.19';//Until.getClientIp(req);
        let message='-1',systemState='-1';
        let args={
            userID: Config.userID,
            userPwd: Config.userPwd,
            ip: ip,
            acCode: accode,
            queryID: queryid,
            feedBack: feedback,
            sign: sha1(accode+Config.token).toUpperCase(),
            reply: "",
            systemState: ""
        };
        soap.createClient(Config.url, function(err, client) {
        client.SendAcVerifyInfo(args, function(err, result) {
                console.log(result);
                return res.send(result); 
            });
        });
    });


    app.use(function(req, res, next) {
        //判断是主动导向404页面，还是传来的前端路由。
    　　 //如果是前端路由则如下处理
        fs.readFile('./server/index.html','utf-8', function(err, data){
            if(err){
                console.log(err);
                res.send('后台错误');
                return next();
            } else {
                res.writeHead(200, {
                    'Content-type': 'text/html',
                    'Connection':'keep-alive'
                });
                res.end(data);
                return next();
            }
        })
    });

};
