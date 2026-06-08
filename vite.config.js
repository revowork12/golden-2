import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  server: { port: 3002, open: true, allowedHosts: true },
  build: { outDir: 'dist' }
});
