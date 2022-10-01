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
			 * 语法检查 eslint-loader eslint
			 * 注意：只检查源代码，第三方的库不检查
			 * 
			 * 设置检查规则:
			 * package.json 中 eslintConfig 设置
			 * airbnb ---> eslint-config-airbnb-base eslint eslint-plugin-import
			 * */
			{
				test: /\.js$/,
				// 一定要排除依赖包
				exclude: /node_modules/,
				loader: "eslint-loader",
				options: {
					// 自动修改eslint错误
					fix: true
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