module.exports = {
  env: { NODE_ENV: '"development"' },
  defineConstants: {},
  mini: {
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
  h5: {},
};
