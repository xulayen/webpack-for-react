'use strict';
var http=require('http');
var express=require('express');
var soap = require('soap');
var sha1 = require('sha1');
var app=express();
var Until=require('./until.js');
var Config=require('./config.js');

const PORT = parseInt(process.env.LEANCLOUD_APP_PORT || 8011);

var server = http.createServer(app);
server.listen(PORT, function(){
    console.log('App (dev) is now running on port '+PORT);
});

app.get('/fw', function(req, res,next) {
    console.log(req.query)
    let accode=req.query.accode || '6675697746308516';
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
            return next()
        });
    });


    res.send('hello word!'); //这个地方填写dist/index.html的路径
})

