import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    open: true,
    port: 3000,
  },
  plugins: [tsconfigPaths()],
})