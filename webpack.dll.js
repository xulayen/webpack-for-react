const webpack = require('webpack');
const path=require('path');



const vendors = [
  'jquery_wechat_sdk',
  'react',
  'react-dom',
  'react-router',
];
module.exports = {
  output: {
    path: path.resolve(__dirname, 'server'),
    filename: 'static/js/[name].[chunkhash].js',
    library: '[name]_[chunkhash]',
  },
  entry: {
    vendor: vendors,
  },
  plugins: [
    new webpack.DllPlugin({
        path: path.join(__dirname, "manifest.json"),
        name: "[name].[chunkhash]",
        context: __dirname
    }),
  ],
};