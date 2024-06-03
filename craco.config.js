// craco.config.js
const { whenProd } = require('@craco/craco');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output = {
        ...webpackConfig.output,
        publicPath: process.env.PUBLIC_URL || '/',
        filename: whenProd(() => 'static/js/[name].[contenthash:8].js', 'static/js/bundle.js'),
        chunkFilename: whenProd(() => 'static/js/[name].[contenthash:8].chunk.js', 'static/js/[name].chunk.js'),
      };
      return webpackConfig;
    },
  },
};
