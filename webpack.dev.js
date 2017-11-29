 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 const path=require('path');
 
 module.exports = merge(common, {
   devtool: 'inline-source-map',
   devServer: {
     contentBase: path.join(__dirname, "dist"),
    watchOptions: {
        aggregateTimeout: 20,
        poll: 1000
    },
     host:'127.0.0.1',
     proxy:{
       "/fw":{
         target:'http://127.0.0.1:8011/',
         changeOrigin:true,
         secure:false
       },
       "/SendAcVerifyInfo":{
         target:'http://127.0.0.1:8011/',
         changeOrigin:true,
         secure:false
       }
     }
   }
 });