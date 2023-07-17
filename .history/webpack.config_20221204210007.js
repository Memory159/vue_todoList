module.exports = {
    ...
    resolve: {
        // https://github.com/babel/babel/issues/8462
        // https://blog.csdn.net/qq_39807732/article/details/110089893
        // 如果确认需要node polyfill，设置resolve.fallback安装对应的依赖
        fallback: {
            crypto: require.resolve('crypto-browserify'),
            path: require.resolve('path-browserify'),
            url: require.resolve('url'),
            buffer: require.resolve('buffer/'),
            util: require.resolve('util/'),
            stream: require.resolve('stream-browserify/'),
            vm: require.resolve('vm-browserify')
        },
        // 如果确认不需要node polyfill，设置resolve.alias设置为false
        alias: {
            crypto: false
        }
    }
}