import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

/**
 * Custom Vite plugin for GitHub Pages SPA routing.
 * GitHub Pages returns 404.html when a user refreshes on an SPA route.
 * Copying index.html to 404.html in dist/ guarantees GitHub Pages serves
 * the single-page application entry point without a blank page or 404 error.
 */
function githubPagesSpaPlugin(): Plugin {
  return {
    name: 'vite-plugin-github-pages-spa',
    apply: 'build',
    closeBundle() {
      const rootDir = process.cwd();
      const distDir = path.resolve(rootDir, 'dist');
      const indexHtmlPath = path.join(distDir, 'index.html');
      const fallbackHtmlPath = path.join(distDir, '404.html');

      if (fs.existsSync(indexHtmlPath)) {
        fs.copyFileSync(indexHtmlPath, fallbackHtmlPath);
        // Also create .nojekyll to prevent GitHub Pages from ignoring files that begin with underscores
        fs.writeFileSync(path.join(distDir, '.nojekyll'), '');
      }
    },
  };
}

export default defineConfig(() => {
  // Support GITHUB_REPOSITORY (e.g. "username/repo-name" in GitHub Actions) or custom BASE_PATH env var
  const repoName = process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` : undefined;
  const basePath = process.env.BASE_PATH || repoName || './';

  return {
    base: basePath,
    plugins: [react(), tailwindcss(), githubPagesSpaPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), '.'),
      },
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      emptyOutDir: true,
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
                return 'vendor-react';
              }
              if (id.includes('lucide-react')) {
                return 'vendor-icons';
              }
              return 'vendor';
            }
          },
          // Predictable naming convention for cache-busting static assets
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]',
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});


