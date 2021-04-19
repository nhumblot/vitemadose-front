import { defineConfig } from 'vite'
import autoprefixer = require('autoprefixer')
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default ({ command, mode }) => ({
  build: {
    sourcemap: false
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer()
      ]
    }
  },
  plugins: [
      legacy({
        targets: ['defaults']
      })
  ]
});
