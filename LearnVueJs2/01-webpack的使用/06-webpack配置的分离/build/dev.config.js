const webpackMerge = require('webpack-merge')
const baseconfig = require('./base.config')

module.exports = webpackMerge.merge(baseconfig,{
    devServer: {
        contentBase: './dist',
        inline: true
    }
})