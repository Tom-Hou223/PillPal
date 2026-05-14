const path = require('path');

const config = {
  projectName: 'app-taro',
  date: '2026-05-14',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    375: 2,
    828: 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [
    '@tarojs/plugin-framework-react',
    '@tarojs/plugin-platform-weapp',
  ],
  defineConstants: {},
  copy: {
    patterns: [
      { from: 'src/assets/images', to: 'dist/assets/images' },
    ],
    options: {},
  },
  framework: 'react',
  compiler: {
    type: 'webpack5',
    prebundle: { enable: false },
  },
  cache: { enable: false },
  mini: {
    postcss: {
      pxtransform: { enable: true, config: {} },
      cssModules: {
        enable: false,
        config: {
          namingPattern: 'module',
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
    optimizeMainPackage: { enable: false },
    webpackChain(chain) {
      chain.optimization.minimize(false);
      chain.optimization.concatenateModules(false);
      chain.optimization.splitChunks(false);
      chain.optimization.removeAvailableModules(false);
      chain.optimization.removeEmptyChunks(false);
      chain.optimization.mergeDuplicateChunks(false);
      chain.optimization.flagIncludedChunks(false);
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: { enable: true, config: {} },
      cssModules: {
        enable: false,
        config: {
          namingPattern: 'module',
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  alias: {
    '@': path.resolve(__dirname, '../src'),
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
