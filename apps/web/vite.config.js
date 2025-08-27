import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Proxy /api/* to backend during dev
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": "http://localhost:4000"
    }
  }
});
