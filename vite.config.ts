import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react':  ['react', 'react-dom'],
          'vendor-router': ['react-router-dom'],
          'vendor-three':  ['three'],
          'vendor-motion': ['motion'],
          'vendor-i18n':   ['i18next', 'react-i18next'],
          'vendor-icons':  ['react-icons'],
        },
      },
    },
  },
});
