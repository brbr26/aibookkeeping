import { defineConfig } from "vite";
import path from "path";
import { componentTagger } from "lovable-tagger";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react(), componentTagger()],
  server: {
    host: "0.0.0.0",
    port: 8080,
    strictPort: true,
    hmr: {
      protocol: 'wss',
      clientPort: 443
    },
    fs: {
      strict: true,
    },
    middlewareMode: false
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-components': [
            '@radix-ui/react-tooltip',
            '@radix-ui/react-toast',
            '@radix-ui/react-slot'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
});