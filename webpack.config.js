const HtmlWebpackPlugin = require('html-webpack-plugin')

const { pages } = require('./src/config.json')

const baseConfig = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

  output: {
    path: `${__dirname}/dist`,
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  target: ['web', 'es5'],
}

const htmlPluginBaseConfig = {
  filename: '[name].html',
}

module.exports = [
  {
    ...baseConfig,
    entry: {
      index: './src/index.ts',
    },
    plugins: [
      new HtmlWebpackPlugin({
        ...htmlPluginBaseConfig,
        title: 'Index',
      }),
    ],
  },
  ...pages.map((page) => ({
    ...baseConfig,
    entry: {
      [page]: `./src/${page}/index.ts`,
    },
    plugins: [
      new HtmlWebpackPlugin({
        ...htmlPluginBaseConfig,
        title: page,
      }),
    ],
  })),
]
