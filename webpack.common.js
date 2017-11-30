  const path = require('path');
  const webpack = require('webpack'); 
  const CleanWebpackPlugin = require('clean-webpack-plugin');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const ExtractTextPlugin = require("extract-text-webpack-plugin");
 module.exports = {
   entry: {
    app: './src/index.js',
    vendor:[]
   },
   plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'Shell Anti-Counterfeit System',
        viewport:'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no',
        template:'./src/template/index.html'
      }),
      new webpack.HashedModuleIdsPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'runtime'
      }),
      new webpack.ProvidePlugin({
        join: ['lodash', 'join']
      }),
      new ExtractTextPlugin({
        filename:  (getPath) => {
            return getPath('static/css/[name].[chunkhash].css'); //设置样式路劲
        },
        allChunks: true
      })
   ],
    module: {
        rules: [
          // {            
          //     test: /\.css$/,                                              //生成＝内连样式
          //     use: ['style-loader', 'css-loader']
          // },
          {
            test: /\.js$/,
            use: 'babel-loader?presets=es2015'// 'jsx-loader',
          },
          {
            test: /\.css$/,                                                     //生成外链样式
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: ["css-loader"],
              publicPath:'/'
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
          {
               test: /\.jsx$/,
               use:[
                 {
                   loader:'jsx-loader'
                 }
               ]
          }
          // {
          //   test: require.resolve('./src/index.js'),
          //   use: 'imports-loader?this=>window'
          // },
        ]
    },
   output: {
     filename: '[name].[chunkhash].js',
     path: path.resolve(__dirname, 'dist')
   }
 };