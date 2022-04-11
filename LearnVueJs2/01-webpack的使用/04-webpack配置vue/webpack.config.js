const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                //css-loader:只负责将css文件进行加载
                //style-loader:负责将样式添加到DOM中
                //使用多个loader时，是从右向左的
                /*use: ['style-loader','css-loader','less-loader']*/
                use: [{
                    loader:'style-loader'
                },{
                    loader: 'css-loader'
                },{
                    loader: 'less-loader'
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            //当加载的图片小于limit时，会将图片编译成base64字符串形式
                            //当加载的图片大于limit时，需要使用file-loader模块进行加载
                            limit: 1300000,
                            //原来什么名字就叫什么名字
                            //就会把name当成一个变量，通过这个变量去取原来文件的名字
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                //exclude:排除 include:包含
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    resolve:{
        //resolve属性是一个对象
        //alias 属性别名
        extensions: ['.js','.css','.vue'],
        alias:{
            'vue$' : "vue/dist/vue.js"  //或 vue/dist/vue.js
        }
    }
}