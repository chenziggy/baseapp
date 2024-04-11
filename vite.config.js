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
    // {
    //   name: 'my-test-plugin',
    //   configureServer(server) {
    //     return () => {
    //       server.middlewares.use('/', (req, res, next) => {
    //         const route = '/subapp/zoom/helloworld';
  
    //         console.log("🚀🚀🚀🚀 ~  req:",  req.url, req.originalUrl)
    //         if (req.url === '/index.html') {
    //           console.log(res.body)
    //         }
    //       //   if (req.url === '/helloworld' && req.originalUrl === route+'helloworld') {
    //       //      res.writeHead(301, { Location: `http://localhost:5173${route+'helloworld'}`} );
    //       // return res.end();
    //       //   }
    //         next();
    //       });
    //     }
    //   }
    // },
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
