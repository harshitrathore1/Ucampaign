

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://uoons.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        headers: {
          'Content-Type': 'multipart/form-data',
          'Channel-Code': 'ANDROID',
        },
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            console.log(`Proxying request to: ${proxyReq.path}`);
          });
        },
      },
    },
  },
});