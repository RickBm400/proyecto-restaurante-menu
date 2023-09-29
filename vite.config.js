import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dotenv from 'dotenv'
import * as path from 'path'

// https://vitejs.dev/config/

dotenv.config()
console.log(path.resolve(__dirname, 'src', 'style'));

export default defineConfig(() => {
  return {
    plugins: [react()],
    server: {
      port: process.env.PORT
    },
    resolve:{
      alias: {
       styles : path.resolve(__dirname, 'src', 'style'),
       pages : path.resolve(__dirname, 'src', 'pages'),
       components : path.resolve(__dirname, 'src', 'components'),
       public: path.resolve(__dirname, 'public')
      }
    }
  }
}
)

