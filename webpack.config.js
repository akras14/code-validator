var path = require('path');
require('webpack');

var babelQuery = {
  presets: ["es2015", "react"],
  plugins: [
    'transform-es3-member-expression-literals',
    'transform-es3-property-literals'
  ]
};

module.exports = {
  entry: path.resolve(__dirname, 'src/main.jsx'),
  output: {
    path: path.resolve(__dirname, './build/'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['es3ify', `babel?${JSON.stringify(babelQuery)}`]
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
