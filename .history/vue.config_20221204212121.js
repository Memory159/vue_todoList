const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")


module.exports = defineConfig({
    configureWebpack: {
        resolve: {
            fallback: {
                fs: false,
                crypto: require.resolve("crypto-browserify")
            }
        },
        plugins: [new NodePolyfillPlugin()],
    },
    transpileDependencies: true,
    lintOnSave: false, //关闭语法检查

})