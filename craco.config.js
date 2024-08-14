// const { whenProd } = require('@craco/craco');

// module.exports = {
//   webpack: {
//     configure: (webpackConfig) => {
//       webpackConfig.output = {
//         ...webpackConfig.output,
//         publicPath: process.env.PUBLIC_URL || '/',
//         filename: whenProd(() => 'static/js/[name].[contenthash:8].js', 'static/js/[name].js'),
//         chunkFilename: whenProd(() => 'static/js/[name].[contenthash:8].chunk.js', 'static/js/[name].chunk.js'),
//       };
//       webpackConfig.cache = false; // 캐시 비활성화
//       return webpackConfig;
//     },
//   },
// };
