const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseconfig = require('./base.config')

module.exports = webpackMerge.merge(baseconfig,{
    plugins: [
        new UglifyjsWebpackPlugin()
    ]
})
