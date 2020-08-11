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
  publicPath: '/',
  pluginOptions: {
    s3Deploy: {
      registry: undefined,
      overrideEndpoint: false,
      region: 'us-east-1',
      bucket: 'logboard-frontend',
      createBucket: false,
      staticHosting: true,
      staticIndexPage: 'index.html',
      staticErrorPage: 'index.html',
      assetPath: 'dist',
      assetMatch: '**',
      deployPath: '/',
      acl: 'public-read',
      pwa: false,
      enableCloudfront: true,
      cloudfrontId: 'E6ZOEJYF4MFVN',
      pluginVersion: '4.0.0-rc3',
      uploadConcurrency: 5
    }
  }
}
