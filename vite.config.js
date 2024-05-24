import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.REACT_APP_EXPRESS_URL': '"http://localhost:3000"',
    'import.meta.env.REACT_APP_API_KEY':'"eeaae625e3mshff8bcf610e230d6p175860jsn2864a119990b"'
  }
})
