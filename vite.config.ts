import { sentryVitePlugin } from "@sentry/vite-plugin";
import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "ggomez1403",
    project: "snapgram-integracion-continua"
  })],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    host: true,
    strictPort: true,
    port: 8081,
  },

  build: {
    sourcemap: true
  }
});