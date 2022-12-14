const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 抽离css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 压缩css
const cssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

// 设置nodejs环境变量
process.env.NODE_ENV = 'development';

module.exports = {
	entry: './src/js/index.js',
	output: {
		filename: 'js/build.js',
		path: resolve(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								ident: 'postcss',
								plugins: () => {
									require('postcss-preset-env')()
								}
							}
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'css/build.css'
		}),
		new cssMinimizerWebpackPlugin()
	],
	mode: 'development'
}