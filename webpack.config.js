'use strict';

let path = require('path');

module.exports = {
  mode: 'production',
  entry: '/src/js/main.js',
  output: {
    filename: 'main.min.js',
    path: __dirname + '/src/js'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};
