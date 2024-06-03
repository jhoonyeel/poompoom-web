// craco.config.js
module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Webpack 설정 변경 예시
      webpackConfig.output = {
        ...webpackConfig.output,
        publicPath: process.env.PUBLIC_URL || '/',
      };
      return webpackConfig;
    },
  },
  // 추가 설정 가능
};
