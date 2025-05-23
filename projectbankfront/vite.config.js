// vite.config.js
import { defineConfig, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    // 1) Этот плагин должен быть первым (enforce: 'pre') — иначе HMR и импорты могут сломаться
    {
      name: 'load-transform-js-as-jsx',
      enforce: 'pre',                                  // важно для HMR! :contentReference[oaicite:1]{index=1}
      async transform(code, id) {
        if (!/\/src\/.*\.js$/.test(id)) return null;
        return transformWithEsbuild(code, id, {
          loader: 'jsx',
          jsx: 'automatic',                             // без этого — синтаксис React 17 не будет работать :contentReference[oaicite:2]{index=2}
        });
      },
    },
    // 2) Официальный React-плагин для Fast Refresh и оптимизаций
    react({
      include: ['src/**/*.{js,jsx,ts,tsx}'],           // явно включаем и .js
      jsxRuntime: 'automatic',
    }),
  ],
  optimizeDeps: {
    esbuildOptions: {
      loader: { '.js': 'jsx' },                        // препак зависимостей тоже с JSX :contentReference[oaicite:3]{index=3}
    },
  },
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'], // чтобы не писать расширения в импортах
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5286',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
