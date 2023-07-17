const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false, //关闭语法检查
    configureWebpack: (config) => {
        const plugins = []
        plugins.push(new NodePolyfillPlugin())
    }
})