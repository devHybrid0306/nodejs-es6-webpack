const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const config = merge(baseConfig, {
  mode: 'production',
});

module.exports = config;
