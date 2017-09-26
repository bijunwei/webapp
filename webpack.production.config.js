var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var package = require('./package.json')
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: {
        app: __dirname + '/app/index.jsx',
        vendor: Object.keys(package.dependencies)
    },
    output: {
        path: __dirname + "/build",
        filename: './js/[name].[hash:8].js'
    },
    module: {
        loaders: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }, {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!postcss-loader!less-loader'
            }, {
                test: /\.css$/,
                exclude: /node_modules/,
                //loader: 'style-loader!css-loader!postcss-loader'
               // loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
               loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    loader: "css-loader!postcss-loader"
                })
            }, {
                test: /\.(png|gif|jpg|jpeg|bmp)$/i,
                loader: 'url-loader?limit=5000-loader&name=img/[name].[hash:8].[ext]'
            }, // 限制大小5kb
            {
                test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
                loader: 'url-loader?limit=5000-loader&name=font/[name].[hash:8].[ext]'
            } // 限制大小小于5k
        ]
    },
    /*postcss: [
        require('autoprefixer') //调用autoprefixer插件，例如 display: flex
    ],*/
    plugins: [

        new webpack.BannerPlugin("Copyright by B"),
        // html 模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tmpl.html'
        }),
        // 定义为生产环境，编译 React 时压缩到最小
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                //supresses warnings, usually from module minification
                warnings: false
            }
        }),
        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),
        //去除警告
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                //supresses warnings, usually from module minification
                warnings: false
            }
        }),
        // 分离CSS和JS文件
        new ExtractTextPlugin({
            filename:'./css/[name].[hash:8].css',
            allChunks: true
        }),
        // 打开浏览器
        new OpenBrowserPlugin({
            url: 'http://localhost:8081'
        }),
        // 提供公共代码
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: './js/[name].[hash:8].js'
        }),
        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
            __DEV__: false
        })
    ],

    devServer: {
        //colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转，在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true, //实时刷新
        hot: true // 使用热加载插件 HotModuleReplacementPlugin
    }
}