import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Pour GitHub Pages sur le repo username.github.io, base = '/'
  base: '/',
})
