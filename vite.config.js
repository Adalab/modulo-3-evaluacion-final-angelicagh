import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
/* export default defineConfig({
  base: "./",
  plugins: [react()],
  server: {
    open: "/",
    watch: {
      usePolling: true
    }
  }
}); */

export default defineConfig({
  plugins: [react()],
  base: "/modulo-3-evaluacion-final-angelicagh/",
});


