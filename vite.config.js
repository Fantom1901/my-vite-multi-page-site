import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        var1: resolve(__dirname, 'index.html'),
        var2: resolve(__dirname, 'var2.html'),
        var3: resolve(__dirname, 'var3.html'),
        var4: resolve(__dirname, 'var4.html'),
      },
    },
  },
});