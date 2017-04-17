const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = function(useSourceMap) {
  return {
    plugins: [
      new UglifyJSPlugin(),
    ],
  };
};