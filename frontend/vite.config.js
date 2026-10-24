/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/extremestartup/',  
  plugins: [react(), svgr()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.js']
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://appbox.qatar.cmu.edu/extremestartup',
        changeOrigin: true
      }
    }
  }
})
