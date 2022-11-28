import { fileURLToPath, URL } from "node:url";
import legacy from "@vitejs/plugin-legacy";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

console.log(process.env.NODE_ENV);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
  base: process.env.NODE_ENV === "production" ? "/paikama/" : "/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    chunkSizeWarningLimit: 1600,
  
  },
});
