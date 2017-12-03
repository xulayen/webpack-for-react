'use strict';
var http=require('http');
var express=require('express');
var path=require('path');
var ejs=require('ejs');
var bodyParser = require('body-parser');
var logger = require('morgan');

var app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(logger('dev'));
app.engine('.html',ejs.__express);
app.set('view engine','html');
app.set('views',path.join(__dirname));
app.use(express.static(__dirname));
var routes = require('./router/router.js')(app);

const PORT = parseInt(process.env.LEANCLOUD_APP_PORT || 8011);

var server = http.createServer(app);
server.listen(PORT, function(){
    console.log('App (dev) is now running on port '+PORT);
});



