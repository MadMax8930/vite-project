import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
   proxy: {
     '/api': {
       target: 'https://candidat.adcleek.it',
       changeOrigin: true,
       rewrite: (path) => path.replace(/^\/api/, ''),
     },
   },
 },
})
