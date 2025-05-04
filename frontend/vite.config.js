import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext",
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  optimizeDeps: {
    // Gabungkan semua dependensi yang perlu di-optimize dalam satu array
    include: ["@emotion/is-prop-valid", "quill", "react-quilljs"],
  },
});
