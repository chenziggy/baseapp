import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import MyPlugin from './my-plugin'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  plugins: [
    MyPlugin(),
    vue(),
    UnoCSS({
      mode: 'vue-scoped'
    })
  ],
  server: {
    proxy: {
      '/subapp/zoom': {
        target: 'http://localhost:5175',
        changeOrigin: true,
        ws: true
      }
    }
  }
})
