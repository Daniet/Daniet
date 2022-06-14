const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: path.resolve(__dirname, "../web/branding"),
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/'
});
