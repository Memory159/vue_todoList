const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
}
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false //关闭语法检查
})