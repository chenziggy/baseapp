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
      '^/subapp/zoom/(@id|@vite|assets|src|__uno.css|node_modules)': {
        target: 'http://localhost:5175',
        changeOrigin: true,
        ws: true,
        rewrite: path =>  path
        
      },
      // '^/subapp/.*/(@id|@vite|assets|src|__uno.css|node_modules)': {
      //   target: 'http://localhost:8090',
      //   changeOrigin: true,
      //   ws: true
      // }
    }
  }
})
