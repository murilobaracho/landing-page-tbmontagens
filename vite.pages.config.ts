// Build estático para o GitHub Pages (usado por .github/workflows/deploy.yml).
// O build normal (vite.config.ts) continua apontando para o deploy do Lovable.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: false,
  tanstackStart: {
    server: { entry: "server" },
    spa: {
      enabled: true,
      prerender: { outputPath: "/index.html", crawlLinks: true },
    },
  },
  vite: { base: process.env.PAGES_BASE_PATH ?? "/" },
});
