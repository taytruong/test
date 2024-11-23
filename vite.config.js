import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          BASE_URL: "/test-growth-engineer/",
        },
      },
    }),
  ],
  base: "/test-growth-engineer/",
});
