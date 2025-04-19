import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permite que otros dispositivos en la red accedan
    port: 5173,      // Asegura que se use el puerto correcto
    strictPort: true, // Evita que Vite cambie de puerto si el 5173 está ocupado
    open: true       // Abre la app en el navegador automáticamente
  }
});