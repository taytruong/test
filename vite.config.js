import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/test-growth-intern/", // Đặt base URL theo tên repository trên GitHub
});
