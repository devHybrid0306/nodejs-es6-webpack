const path = require('path');
const nodeExternals = require('webpack-node-externals');
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  mode: 'development',
  entry: ['babel-regenerator-runtime', './app.js'],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'server.js',
  },
  resolve: {
    modules: ['node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['transform-flow-strip-types'],
              presets: ['flow', 'stage-2'],
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new FlowBabelWebpackPlugin()],
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty',
    fs: 'empty',
    __dirname: true,
  },
  watchOptions: {
    ignored: ['node_modules'],
  },
};
