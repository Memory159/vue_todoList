// module.exports = {
//     resolve: {
//         fallback: {
//             crypto: require.resolve('crypto-browserify'),
//             path: require.resolve('path-browserify'),
//             url: require.resolve('url'),
//             buffer: require.resolve('buffer/'),
//             util: require.resolve('util/'),
//             stream: require.resolve('stream-browserify/'),
//             vm: require.resolve('vm-browserify')
//         },
//         // 如果确认不需要node polyfill，设置resolve.alias设置为false
//         alias: {
//             crypto: false
//         }
//     }
// }

// module.exports = {
//     resolve: {
//         fallback: {
//             fs: false,
//             crypto: require.resolve("crypto-browserify")
//         }
//     },
//     plugins: [new NodePolyfillPlugin()],
// }

module.exports = {
    resolve: {
        fallback: {
            crypto: false,
            path: false,
            url: false,
            buffer: false,
            util: false,
            stream: false,
            vm: false
        },
        // 如果确认不需要node polyfill，设置resolve.alias设置为false
        alias: {
            crypto: false
        }
    }
}