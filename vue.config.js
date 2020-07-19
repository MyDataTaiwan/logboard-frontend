// vue.config.js
// module.exports = {
//         publicPath: "/dashboard/", //打包后部署在一个子路径上http:xxx/m/
//         productionSourceMap: false,
//         devServer: {
//                 proxy: "https://logboard-dia.numbersprotocol.io/", //测试或正式环境域名和端口号
//         },
// };
module.exports = {
        outputDir: 'dist',
        publicPath: process.env.NODE_ENV === 'production'
                ? '/logboard-frontend/'
                : '/'
}