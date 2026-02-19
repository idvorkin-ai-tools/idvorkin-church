import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: true,
  },
  build: {
    // Single chunk for gisthost: one JS, one CSS
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: 'app.js',
        assetFileNames: (info) => {
          if (info.name?.endsWith('.css')) return 'style.css'
          return '[name].[ext]'
        },
      },
    },
  },
})
