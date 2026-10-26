import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

/**
 * Custom lightweight plugin to include HTML partials with recursive support and HMR.
 * Syntax: <!-- include: src/partials/filename.html -->
 */
function htmlIncludePlugin() {
  function processIncludes(content, projectRoot) {
    const includeRegex = /<!--\s*include:\s*([^\s]+)\s*-->/g;
    let hasMatch = false;

    const result = content.replace(includeRegex, (match, relPath) => {
      hasMatch = true;
      const fullPath = path.resolve(projectRoot, relPath);
      if (fs.existsSync(fullPath)) {
        return fs.readFileSync(fullPath, 'utf-8');
      }
      console.warn(`[html-include] Partial not found: ${fullPath}`);
      return `<!-- Missing partial: ${relPath} -->`;
    });

    if (hasMatch && includeRegex.test(result)) {
      return processIncludes(result, projectRoot);
    }
    return result;
  }

  return {
    name: 'vite-plugin-html-include',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        return processIncludes(html, process.cwd());
      }
    },
    handleHotUpdate({ file, server }) {
      if (file.endsWith('.html')) {
        server.ws.send({
          type: 'full-reload',
          path: '*'
        });
      }
    }
  };
}

export default defineConfig(({ command }) => {
  // During local development, serve at root '/'
  // During production build, use relative './' so assets load properly on both custom domains and GitHub Pages subpaths
  return {
    base: command === 'serve' ? '/' : './',
    plugins: [htmlIncludePlugin()],
    server: {
      port: 5173,
      host: '127.0.0.1',
      open: false
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false
    }
  };
});
