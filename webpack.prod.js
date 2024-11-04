const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //清理/dist文件夹
const TerserJSPlugin = require("terser-webpack-plugin"); //压缩js文件

module.exports = {
  mode: "production",
  entry: {
    index: path.resolve(__dirname, "./src/index.js"), //'./src/index.js'
  },
  externals: ["axios", "element-ui"],
  optimization: {
    minimizer: [new TerserJSPlugin({})],
  },
  plugins: [
    new CleanWebpackPlugin(),
    // 请确保引入这个插件！
  ],
  output: {
    filename: "[name].js",
    library: {
      type: "umd",
      name: "heyTools",
    },
    path: path.resolve(__dirname, "lib"),
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  externals: ["vue", "vue-i18n", "element-ui"],
};
