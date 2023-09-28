/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
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
      entry: {
        index: './src/index.ts',
        col: './src/components/col',
        row: './src/components/row',
        button: './src/components/button',
        text: './src/components/text',
        icon: './src/components/icon',
        tag: './src/components/tag',
        modal: './src/components/modal',
        pagination: './src/components/pagination',
        'scrollbar-box': './src/components/scrollbar-box',
        carousel: './src/components/carousel',
        timeline: './src/components/timeline',
        loading: './src/components/loading',
        progress: './src/components/progress',
        table: './src/components/table',
      },
      // name: 'index',
      // fileName: 'index',
      formats: ['es'],
    },
  },
  plugins: [vue(), dts({ outDir: 'dist', rollupTypes: true })],
});
