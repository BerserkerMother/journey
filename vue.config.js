const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    experiments: {
      asyncWebAssembly: true, // or 'asyncWebAssembly' depending on your needs
    },
  },
});
