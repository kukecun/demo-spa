const webpack = require('webpack');
const path = require('path');

module.exports = {
  
  entry: {
    'vendor': ['vue/dist/vue.esm.js', 'element-ui', 'vue-router', 'vuex', 'babel-polyfill', 'axios', 'js-cookie'],
  },

  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: '[name].js',
    library: '[name]_library',
  },

  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dll', '[name]-manifest.json'),
      name: '[name]_library',
      context: __dirname,
    }),
  ]
};