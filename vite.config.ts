/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    // 打包后文件目录
    outDir: 'es',
    // 压缩
    minify: false,
    rollupOptions: {
      // 忽略打包vue文件
      external: ['vue'],
      output: {
        entryFileNames: '[name].js',
        globals: {
          vue: 'Vue',
        },
        dir: 'dist',
      },
    },
    lib: {
      entry: './src/index.ts',
      // name: 'index',
      // fileName: 'index',
      formats: ['es'],
    },
  },
  plugins: [vue(), dts({ outDir: 'dist' })],
});
