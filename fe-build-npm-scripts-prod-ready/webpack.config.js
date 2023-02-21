const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV || "development";
const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
	entry: path.join(SRC_DIR, "js", "main.js"),
	output: {
		filename: "[name].js",
		path: DIST_DIR,
		publicPath: "",
		clean: false,
	},
	mode: NODE_ENV,
	devServer: {
		port: 9000,
		compress: true,
		static: {
			directory: DIST_DIR,
		},
		devMiddleware: {
			index: "index.html",
			writeToDisk: true,
		},
		client: {
			overlay: false,
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
            "presets": [
              [
                "@babel/preset-env",
                {
                  "targets": {
                    "edge": "17",
                    "firefox": "60",
                    "chrome": "67",
                    "safari": "11.1"
                  },
                  "useBuiltIns": "usage",
                  "corejs": "3.6.5"
                }
              ]
            ],
            "plugins": ["@babel/plugin-transform-arrow-functions"]
					},
				},
			},
		],
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(SRC_DIR, "index.html"),
			filename: "index.html",
		}),
	],
};
