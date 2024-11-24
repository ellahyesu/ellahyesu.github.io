const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // outputDir: '../resources/static', // Build Directory
  publicPath: './', // 상대 경로 설정 (GitHub Pages 호환)
  outputDir: 'docs', // 빌드된 파일을 /docs 디렉토리에 저장
  devServer: {
      proxy: {
        '/api': {
            target: 'http://localhost:8080', // Spring Boot 백엔드 URL
            changeOrigin: true
        }
      }
  }
})
