const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  devtool: false,
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
    hot: true,
  },
  entry: {
    main: "./src/index.tsx",
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve("dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'public/index.html'
    }),
  ],
};
