 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 const path=require('path');
 
 module.exports = merge(common, {
   devtool: 'inline-source-map',
   devServer: {
     contentBase: path.join(__dirname, "dist"),
     host:'127.0.0.1',
     proxy:{
       "/fwcode":{
         target:'http://127.0.0.1:8011/fw',
         changeOrigin:false,
         secure:false
       }
     }
   }
 });