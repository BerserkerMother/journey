const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  configureWebpack: {
    experiments: {
      asyncWebAssembly: true, // or 'asyncWebAssembly' depending on your needs
    },
  },
});
