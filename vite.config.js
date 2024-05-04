import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // Agregamos el plugin de React
  ],
  build: {
    outDir: 'dist', // Carpeta de salida para los archivos compilados
  },
});
