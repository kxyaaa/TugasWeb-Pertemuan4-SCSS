import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // Dart Sass compiler API terbaru
        api: 'modern-compiler',
      },
    },
  },
});
