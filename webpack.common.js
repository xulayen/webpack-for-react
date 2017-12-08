  const path = require('path');
  const webpack = require('webpack'); 
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const ExtractTextPlugin = require("extract-text-webpack-plugin");
  const NyanProgressPlugin = require('nyan-progress-webpack-plugin');

 module.exports = {
   entry: {
    app: './src/index.js',
    vendor:['jquery_wechat_sdk','react','react-dom','react-router-dom']
   },
   plugins: [
      /**
       * 生成html的插件,引入css文件和js文件
       */
      new HtmlWebpackPlugin({
        title: 'Shell Anti-Counterfeit System',
        viewport:'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no',
        template:'./src/template/index.html',
        chunks: ['runtime','vendor', 'app']
      }),
      new webpack.HashedModuleIdsPlugin(),
      /**
       * 分离公共js到vendor中
       */
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function(module, count) {
          return (module.resource && 
            /\.js$/.test(module.resource) && 
            module.resource.indexOf(path.join(__dirname, './node_modules')) !== -1)
        }
      }),
      /**
       * 下面主要是将运行时代码提取到单独的manifest文件中，防止其影响vendor.js
       */
      new webpack.optimize.CommonsChunkPlugin({
        name: 'runtime',
        chunks: ['vendor']
      }),
      /**
       * 颗粒化
       */
      new webpack.ProvidePlugin({
        join: ['lodash', 'join'],
        $:['jquery'],
        trim:['jquery','trim'],
        jQuery:['jquery']
      }),
      /**
       * ExtractTextPlugin分离js中引入的css文件
       */
      new ExtractTextPlugin({
        filename:  (getPath) => {
            return getPath('static/css/[name].[chunkhash].css'); //设置样式路劲
        },
        //allChunks: true  // 若要按需加载 CSS 则请注释掉该行
      }),
      new NyanProgressPlugin(), // 进度条
   ],
    module: {
        rules: [
          // {    //生成＝内连样式          
          //     test: /\.css$/,                                             
          //     use: ['style-loader', 'css-loader']
          // },
          {//生成外链样式 推荐
            test: /\.css$/,                                                     
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: ["css-loader"],
              publicPath:'../../'
            })
          },
          {
          test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 1,
                  name:'static/images/[name].[hash].[ext]'
                }
              }
            ]
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name:'static/font/[name].[hash].[ext]'
                }
              }
            ]
          },
          {
            test: /\.xml$/,
            use: [
              {
                loader: 'xml-loader',
                options: {
                  name:'static/data/[name].[hash].xml'
                }
              }
            ]
          },
          // {
          //      test: /\.jsx$/,
          //      use:[
          //        {
          //          loader:'jsx-loader'
          //        }
          //      ]
          // },
          // {
          //   test: /\.js$/,
          //   use: 'babel-loader?presets=es2015'// 'jsx-loader',
          // },

          // {//npm install babel-preset-es2015 babel-preset-stage-0 --save-dev
          //   test:/\.jsx?$/,
          //   include:/src/,
          //   loader:'babel-loader',
          //   options:{
          //     presets:['es2015','stage-0','react']
          //   }
          // },
          
          {
            test:/\.jsx?$/,
            include:/src/,
            loader:'babel-loader',
            options: {
              presets: ['react'],
              plugins: ['transform-runtime']
            }
          },

          // {
          //   test: require.resolve('./src/index.js'),
          //   use: 'imports-loader?this=>window'
          // },
        ]
    }
 };