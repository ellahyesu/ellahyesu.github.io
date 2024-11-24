const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: '../resources/static', // Build Directory
    devServer: {
        proxy: {
          '/api': {
              target: 'http://localhost:8080', // Spring Boot 백엔드 URL
              changeOrigin: true
          }
        }
    }
})
