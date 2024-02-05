/// <reference types="vitest" />

import path from 'node:path'
import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  publicDir: 'static',
  base: '/promotangogamers/',
  build: {
    chunkSizeWarningLimit: 1000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
  },
})
