import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/ChrisEarlAmar/',

  plugins: [react(), tailwindcss()],

  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/js/script.js',

        chunkFileNames: 'assets/js/script.js',

        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'assets/css/style.css'
          }

          return 'assets/media/[name][extname]'
        },
      },
    },
  },
})