const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
					// 创建style标签，将样式放入
					// 'style-loader', 
					// MiniCssExtractPlugin.loader 取代style-loader. 用于提取js中的css成单独文件
					MiniCssExtractPlugin.loader,
					// 将css文件整合到js文件中
					'css-loader',
					/**
					 * css兼容性处理
					 * postcss ---> postcss-loader postcss-preset-env
					 * 
					 * 帮postcss找到package.json中browserslist里面的配置，通过配置加载指定的css兼容样式
					 * 
					 * "browserslist": {
					 *      开发环境 ---> 需要设置node环境变量: process.env.NODE_ENV = "development"
					 * 		"development": [
					 * 			兼容最近的一个chrome 版本
					 *			"last 1 chrome version",
					 * 			兼容最近的一个 chrome 版本
					 *			"last 1 firefox version",
					 * 			兼容最近的一个 safari 版本
					 *			"last 1 safari version"
					 *		],
					 *		默认使用生产环境
					 *		"production": [
					 *			大于99.8%的浏览器
					 *			">0.2%",
					 *          不要死的浏览器 IE8
					 *			"not dead",
					 *			不要 欧朋Opera op_mini(已死)
					 *			"not op_mini all"
					 *		]
					 *	}
					 *
					 * github.com search "browserslist" 查看最新配置
					 *  */
					// 使用loader的默认配置
					// 'postcss-loader'  
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								ident: 'postcss',
								plugins: () => {
									// postcss的插件
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
		})
	],
	mode: 'development'
}