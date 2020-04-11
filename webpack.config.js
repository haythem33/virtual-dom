const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const  HtmlWebpackPlugin  = require('html-webpack-plugin');
module.exports = {
     mode : 'development',
     entry : './src/index.js',
     output : {
         filename : './main.bundle.js',
         path : path.resolve(__dirname, 'dist')
     },
     plugins : [
         new CleanWebpackPlugin(),
         new HtmlWebpackPlugin({
             template : './src/index.html',
             filename :  './index.html'
         }),
     ],
     module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            },
            test : /\.(jpg|png)$/,
            use: {
                loader: 'url-loader',
              },
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js']
      },
}