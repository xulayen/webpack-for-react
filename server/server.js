'use strict';
var http=require('http');
var express=require('express');
var soap = require('soap');
var sha1 = require('sha1');
var bodyParser = require('body-parser');
var logger = require('morgan');

var app=express();
var Until=require('./until.js');
var Config=require('./config/config.js');
console.log(Config.url)

app.use(bodyParser.urlencoded({extended:false}));
app.use(logger('dev'));


const PORT = parseInt(process.env.LEANCLOUD_APP_PORT || 8011);

var server = http.createServer(app);
server.listen(PORT, function(){
    console.log('App (dev) is now running on port '+PORT);
});

app.post('/fw', function(req, res,next) {
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
            res.send(result); 
            return next();
        });
    });
})

