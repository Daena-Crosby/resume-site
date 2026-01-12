import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Only process node_modules dependencies
          if (!id.includes('node_modules')) {
            return;
          }

          // React core libraries - group together to avoid circular dependencies
          if (
            id.includes('/react/') && !id.includes('/react-router/') ||
            id.includes('/react-dom/') ||
            id.includes('/scheduler/')
          ) {
            return 'react-vendor';
          }

          // React Router (separate as it depends on React)
          if (id.includes('/react-router/')) {
            return 'react-router-vendor';
          }

          // Radix UI components (large library, group together)
          if (id.includes('/@radix-ui/')) {
            return 'ui-vendor';
          }

          // Supabase (large library, separate chunk)
          if (id.includes('/@supabase/')) {
            return 'supabase-vendor';
          }

          // All other dependencies - let Vite auto-split large ones
          // Don't force into single vendor chunk to avoid circular deps
          // Vite will handle this automatically
        },
      },
    },
    chunkSizeWarningLimit: 600,
    sourcemap: mode === 'development',
    minify: 'esbuild',
    cssCodeSplit: true,
    target: 'es2015',
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
  },
}));