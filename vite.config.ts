import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	base:"https://github.com/thailoeduardo/brazil-zip-code-search",
  plugins: [react()],
})
