/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  // 👇 REQUIRED for GitHub Pages repo deployment
  base: "/tsdc_monitoring/",

  plugins: [
    react(),
    legacy()
  ],

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  }
})