import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import sharp from "sharp";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Custom Vite plugin for image optimization during build
const imageOptimizationPlugin = {
  name: 'image-optimization',
  apply: 'build',
  async generateBundle(options, bundle) {
    const assetsDir = path.join(__dirname, 'src/assets');
    
    if (!fs.existsSync(assetsDir)) return;

    // Images with PREMIUM quality settings (less compression, maintain highest quality)
    const PREMIUM_QUALITY_IMAGES = [
      'Offer-Poster.jpg',
      'home-after-installation.jpg'
    ];

    const files = fs.readdirSync(assetsDir);
    const imageFiles = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f));

    for (const file of imageFiles) {
      const filePath = path.join(assetsDir, file);
      const fileExt = path.extname(file).toLowerCase();
      const fileNameWithoutExt = path.basename(file, fileExt);
      const isPremiumImage = PREMIUM_QUALITY_IMAGES.includes(file);

      try {
        // Default compression settings
        // Premium images: 80% quality (less compression, maintain quality)
        // Other images: 75% quality (original compression)
        if (['.jpg', '.jpeg'].includes(fileExt)) {
          const quality = isPremiumImage ? 80 : 75;
          const qualityLabel = isPremiumImage ? ' [PREMIUM]' : '';
          
          await sharp(filePath)
            .resize(2048, 1536, {
              fit: 'inside',
              withoutEnlargement: true
            })
            .jpeg({ quality, progressive: true, mozjpeg: true })
            .toFile(filePath + '.opt');

          fs.renameSync(filePath + '.opt', filePath);
          
          const stats = fs.statSync(filePath);
          console.log(`✓ Optimized: ${file}${qualityLabel} → ${(stats.size / 1024).toFixed(2)} KB`);
        } else if (fileExt === '.png') {
          // PNG compression: keep at original 80% quality
          await sharp(filePath)
            .resize(2048, 1536, {
              fit: 'inside',
              withoutEnlargement: true
            })
            .png({ quality: 80, compression: 8 })
            .toFile(filePath + '.opt');

          fs.renameSync(filePath + '.opt', filePath);
          
          const stats = fs.statSync(filePath);
          console.log(`✓ Optimized: ${file} → ${(stats.size / 1024).toFixed(2)} KB`);
        }
      } catch (error) {
        console.warn(`⚠ Could not optimize ${file}:`, error.message);
      }
    }
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [react(), imageOptimizationPlugin],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          framer: ["framer-motion"],
        },
      },
    },
    chunkSizeWarningLimit: 800,
  },
});
