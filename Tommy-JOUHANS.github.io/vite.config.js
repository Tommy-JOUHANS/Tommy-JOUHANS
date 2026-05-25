import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Repo projet GitHub Pages → base = '/NomDuRepo/'
  // Change 'Tommy-JOUHANS' si ton repo a un autre nom
  base: '/Tommy-JOUHANS/',
})
