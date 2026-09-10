import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          search: ['cmdk', 'fuse.js'],
          icons: ['lucide-react'],
          ui: ['clsx', 'sonner', 'usehooks-ts'],
        },
      },
    },
  },
});
