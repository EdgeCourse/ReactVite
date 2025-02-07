

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  server: {
    port: 3000,  // Change the dev server port
    open: true,  // Opens the browser when running the dev server
  },
  build: {
    outDir: 'prod', // Change output directory
    sourcemap: true, // Generate source maps
    chunkSizeWarningLimit: 500, // Increase chunk size limit warning
  },

    esbuild: {
    jsxInject: `import React from 'react'`,
  },

  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});


