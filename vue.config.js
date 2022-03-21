const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: false,
  pluginOptions: {
    electronBuilder: {
      preload: 'src/preload.js',
    }
  }
})
