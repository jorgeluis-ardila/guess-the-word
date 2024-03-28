import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
const srcFolder = path.resolve(__dirname, './src');
const alias = [
  {
    find: '@',
    replacement: srcFolder,
  },
];

const dirs = fs.readdirSync(srcFolder);

for (const dir of dirs) {
  const dirPath = path.resolve(srcFolder, dir);
  if (fs.statSync(dirPath).isDirectory()) {
    alias.push({
      find: dir,
      replacement: dirPath,
    });
  }
}

export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: { exportType: 'named', ref: true, svgo: false, titleProp: true },
      include: '**/*.svg',
    }),
    react(),
    checker({
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
  ],
  resolve: {
    alias,
  },
});
