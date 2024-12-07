import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use dynamic import for vite-plugin-static-copy
const viteStaticCopy = () => import('vite-plugin-static-copy');

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy().then((module) => module.viteStaticCopy({
      targets: [
        { src: 'manifest.json', dest: '.' },
        { src: 'icons', dest: 'icons' },
      ],
    })),
  ],
});
