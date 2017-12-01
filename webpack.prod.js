const webpack = require('webpack'); 
const merge = require('webpack-merge');
 const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
 var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
 const common = require('./webpack.common.js');
 var CompressionWebpackPlugin = require('compression-webpack-plugin');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const path = require('path');

 module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
        /**
         * 清空发布目录
         */
        new CleanWebpackPlugin(['./server/static']),
        /**
         * 压缩JS
         */
        new UglifyJSPlugin({
            sourceMap: true
        }),
        /**
         * 优化CSS
         */
        new OptimizeCSSPlugin(),
        /**
         * 设置环境变量为production
         */
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new CompressionWebpackPlugin({
            asset: '[path].gz[query]', //目标文件名
            algorithm: 'gzip', //使用gzip压缩
            test: /\.css|\.js|\.html|\.jpg|\.png|\.gif|\.html/,//满足正则表达式的文件会被压缩
            threshold: 1024, //资源文件大于10240B=10kB时会被压缩
            minRatio: 0.8 //最小压缩比达到0.8时才会被压缩
        })
    ],
    output: {
      filename: 'static/js/[name].[chunkhash].js',
      path: path.resolve(__dirname, './server')
    }
});