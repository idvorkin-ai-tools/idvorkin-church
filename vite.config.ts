import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile()],
  server: {
    allowedHosts: true,
  },
  build: {
    assetsInlineLimit: 1048576, // 1MB — force inline for singlefile
  },
})
