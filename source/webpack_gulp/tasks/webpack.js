import path from "path";
import webpack from "webpack";

const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const TerserPlugin = require('terser-webpack-plugin');

let config = {
  entry: "./scripts/main.js",
  output: {
    filename: "./dist/bundle.js",
    path: path.resolve(__dirname, "../site"),
  },
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      parallel: 4,
      terserOptions: {
        mangle: true, // Note `mangle.properties` is `false` by default.
      },
    })],
  },
  context: path.resolve(__dirname, "../site"),
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }]],
            plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-object-rest-spread'],
          },
        },
      }
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new WebpackManifestPlugin({ publicPath: '' }),
  ],
};

function scripts() {
  return new Promise((resolve) =>
    webpack(config, (err, stats) => {
      if (err) console.log("Webpack", err);

      console.log(
        stats.toString({
          colors: true
        })
      );
      resolve();
    })
  );
}

module.exports = { config, scripts };
