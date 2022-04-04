const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'boiler-plate-3.0',
      template: './src/html/index.html',
      filename: './index.html',
      inject: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
              '@babel/preset-react',
            ],
            plugins: [['@babel/transform-runtime']],
          },
        },
      },
    ],
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    hot: true,
    static: [
      { directory: path.join(__dirname, 'dist/js') },
      { directory: path.join(__dirname, 'dist/html') },
    ],
    historyApiFallback: true,
    open: true,
  },
}
