const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
			/**
			 * js 兼容性处理：babel-loader @babel/core @babel/preset-env
			 * 1. @babel/preset-env
			 * 2. @babel/polyfill
			 * */
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					// 预设：指示babel做怎么样的兼容性处理
					presets: ['@babel/preset-env']
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	mode: 'development'
}