import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dotenv from 'dotenv'

// https://vitejs.dev/config/

dotenv.config()

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [react()],
    server: {
      port: process.env.PORT
    }
  }
}
)

