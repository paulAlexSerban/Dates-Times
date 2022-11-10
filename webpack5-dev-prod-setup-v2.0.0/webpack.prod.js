const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const NODE_ENV = process.env.NODE_ENV || "development";

module.exports = merge(common, {
  mode: NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          filename: "./images/[name][contenthash:12][ext]",
        },
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                quality: 40
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              }
            },
          },
        ],
      },
    ],
  },
});
