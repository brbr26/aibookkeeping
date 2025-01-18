import { defineConfig } from "vite";
import path from "path";
import { componentTagger } from "lovable-tagger";
import react from "@vitejs/plugin-react-swc";

// Common security headers for both server and preview
const securityHeaders = {
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  'Content-Security-Policy': `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.gpteng.co https://cdn.calendly.com https://www.googletagmanager.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    font-src 'self' https://fonts.gstatic.com;
    img-src 'self' data: https:;
    connect-src 'self' wss: https://kxdkublyvozvwaolwusy.supabase.co https://www.google-analytics.com;
    frame-src 'self' https://calendly.com;
    frame-ancestors 'self' https://*.lovable.app https://*.gpteng.co;
    base-uri 'self';
    form-action 'self'
  `.replace(/\s+/g, ' ').trim()
}

export default defineConfig({
  plugins: [react(), componentTagger()],
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-components': [
            '@radix-ui/react-tooltip',
            '@radix-ui/react-toast',
            '@radix-ui/react-slot'
          ],
          'analytics': ['@tanstack/react-query']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'esbuild',
    modulePreload: {
      polyfill: false
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext',
      supported: {
        'top-level-await': true,
        'dynamic-import': true,
        'import-meta': true
      }
    }
  },
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
    middlewareMode: false,
    headers: securityHeaders
  },
  preview: {
    port: 8080,
    strictPort: true,
    host: true,
    cors: true,
    headers: securityHeaders
  }
});
