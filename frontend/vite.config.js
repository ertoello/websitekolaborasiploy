import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext",
    commonjsOptions: {
      transformMixedEsModules: true, // Memungkinkan CommonJS dicampur dengan ESM
    },
  },
  optimizeDeps: {
    include: ["@emotion/is-prop-valid", "quill", "react-quilljs"],
  },
});
