 const merge = require('webpack-merge');
 const webpack = require('webpack'); 
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const common = require('./webpack.common.js');
 const path=require('path');
 const OpenBrowserPlugin = require('open-browser-webpack-plugin');

 
 module.exports = merge(common, {
   devtool: 'inline-source-map',
   devServer: {
     contentBase: path.join(__dirname, "dist"),
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
   },
    output: {
      filename: 'static/js/[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins:[
       
    ]
  
 });