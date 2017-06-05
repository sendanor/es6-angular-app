var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	context: __dirname + "/src",
    entry: './app.js',
    output: {
    	path: __dirname + '/dist',
    	filename: 'index_bundle.js'
    },
	module: {
		loaders: [
			{ test: /\.jpg$/, loader: "file-loader" },
			{ test: /\.png$/, loader: "url-loader?mimetype=image/png" },
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.html$/,
				loader: ["html-loader"]
			},
			{
				test: /\.css$/,
				loaders: ["style-loader", "css-loader"]
			},
			{
				test: /\.scss$/,
				loaders: ["style-loader", "css-loader", "sass-loader"]
			}
		]
	},
	plugins: [new HtmlWebpackPlugin({
		options: {
			lang: 'en'
		},
		title: 'Test App',
		template: __dirname + '/src/index.ejs'
	})]
};
