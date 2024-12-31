import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // Optionally add global SCSS variables or mixins
        additionalData: `@use './src/styles/variables' as *;` // Make variables globally available
      }
    }
  }
});
