import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  base: "/",
  build: {
    outDir: isSsrBuild ? "dist-ssr" : "dist",
    assetsDir: "assets",
    sourcemap: !isSsrBuild,
    // The SSR build takes its entry from the --ssr flag; only the client build
    // needs an explicit HTML input.
    rollupOptions: isSsrBuild
      ? {}
      : { input: { main: path.resolve(__dirname, "index.html") } },
  },
  preview: {
    port: 8080,
  },
  publicDir: "public",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
