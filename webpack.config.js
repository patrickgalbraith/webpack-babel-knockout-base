var webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/main.js',
    vendor: ['jquery', 'knockout', 'ramda']
  },
  output: {
    filename: './dist/app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html?attrs=false',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
          cacheDirectory: true,
        },
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', './dist/vendor.bundle.js')
  ]
};