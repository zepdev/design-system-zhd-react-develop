/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import preserveDirectives from 'rollup-plugin-preserve-directives';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import eslint from 'vite-plugin-eslint';
import { peerDependencies } from './package.json';

export default defineConfig({
  plugins: [react(), eslint(), dts({ include: ['lib', 'src'] })],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '~': resolve(__dirname, 'node_modules'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib', 'index.ts'),
      formats: ['es'],
      name: 'design-system-zsd-react',
      fileName: (ext) => `index.${ext}.js`,
    },
    rollupOptions: {
      plugins: [preserveDirectives({ supressPreserveModulesWarning: true })],
      output: {
        preserveModules: true,
      },
      external: [...Object.keys(peerDependencies), 'react/jsx-runtime'],
    },
    target: 'esnext',
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.js',
  },
});
