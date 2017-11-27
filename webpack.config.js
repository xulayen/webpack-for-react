  const path = require('path');
  const HTMLWebpackPlugin = require('html-webpack-plugin');
  const webpack = require('webpack');


  module.exports = {
   entry: {
     main: './src/index.js',
     vendor: [
       'lodash'
     ]
   },
    plugins: [
        new HTMLWebpackPlugin({
          title: 'Caching'
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
        })
    ],
    module: {
      rules: [
        {
          test: require.resolve('./src/index.js'),
          use: 'imports-loader?this=>window'
        },
        {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
        }
      ]
    },
    output: {
      filename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist')
    }
  };