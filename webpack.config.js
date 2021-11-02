const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = path.resolve(__dirname);
const {presets} = require(`${appDirectory}/babel.config.js`);

const compileNodeModules = [
  // Add every react-native package that needs compiling
  // 'react-native-gesture-handler',
].map(moduleName => path.resolve(appDirectory, `node_modules/${moduleName}`));

const babelLoaderConfiguration = {
  test: /\.js$|tsx?$/,
  include: [
    path.resolve(__dirname, 'index.web.js'),
    path.resolve(__dirname, './src/web/App.tsx'),
    path.resolve(__dirname, 'src'),
    ...compileNodeModules,
  ],
  use: {
    loader: 'babel-loader',
    options: {
      presets,
      plugins: ['react-native-web'],
    },
  },
};

const imageLoaderConfiguration = {
  test: /\.(jpe?g|png)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]',
    },
  },
};

module.exports = {
  entry: {
    app: path.join(__dirname, 'index.web.js'),
  },
  output: {
    path: path.resolve(appDirectory, 'dist'),
    publicPath: '/',
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.web.js', '.js'],
    alias: {
      'react-native$': 'react-native-web',
    },
  },
  module: {
    rules: [babelLoaderConfiguration, imageLoaderConfiguration],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(true),
    }),
  ],
};
