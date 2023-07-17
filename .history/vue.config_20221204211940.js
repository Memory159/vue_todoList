const { defineConfig } = require('@vue/cli-service')
const nodeExternals = require("webpack-node-externals");
externals: [nodeExternals()],


    module.exports = defineConfig({
        transpileDependencies: true,
        lintOnSave: false, //关闭语法检查
        configureWebpack: {
            target: "node",
            externals: [nodeExternals()],
        }
    })