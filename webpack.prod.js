const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //清理/dist文件夹
const TerserJSPlugin = require("terser-webpack-plugin"); //压缩js文件
module.exports = [
  {
    entry: "./src/index.js",
    externals: ["axios", "element-ui", "vue-i18n"],
    optimization: {
      minimizer: [new TerserJSPlugin({})],
    },
    plugins: [
      new CleanWebpackPlugin(),
    ],
    output: {
      filename: "index.cjs.js",
      path: path.resolve(__dirname, "lib"),
      library: {
        name: "heyTools",
        type: "umd",
      },
      globalObject: "this",
    },
    mode: "production",
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
  },

  {
    entry: "./src/index.js",
    externals: ["axios", "element-ui"],
    optimization: {
      minimizer: [new TerserJSPlugin({})],
    },
    plugins: [
      new CleanWebpackPlugin(),
    ],
    output: {
      filename: "index.esm.js",
      path: path.resolve(__dirname, "lib"),
      library: {
        type: "module",
      },
      module: true,
    },
    experiments: {
      outputModule: true,
    },
    mode: "production",
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
  },
];
