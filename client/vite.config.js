import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tailwindcss from 'tailwindcss';
import gltf from 'vite-plugin-gltf';

export default defineConfig({
  plugins: [react(), svgr(), tailwindcss(), gltf()],
  build: {
    assetsInclude: ['**/*.gltf', '**/*.glb'],
  },
});
