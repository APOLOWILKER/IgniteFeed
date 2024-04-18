import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // alterando/definindo a porta de render do vite
  server: {
    port: 3001,
  }
})
