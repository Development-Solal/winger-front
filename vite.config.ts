import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import prerender from "vite-plugin-prerender";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    prerender({
      staticDir: path.resolve(__dirname, "dist"),

      // routes to prerender
      routes: [
        "/",
        "/profilsAidantAide",
        "/concept",
        "/rendezvous",
        "/tarifs",
        "/espacePro",
        "/qui-sommes-nous"
      ]
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "es2018"
  }
});
