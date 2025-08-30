import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3009,
    open: true,
    watch: {
      usePolling: true,
    },
  },
  base: process.env.NODE_ENV === "production" ? "/ReactJS-Practice-F88/" : "/",
});
