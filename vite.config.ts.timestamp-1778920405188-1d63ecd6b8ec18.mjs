// vite.config.ts
import { defineConfig } from "file:///D:/Sleek%20Secure%20invisible%20grills/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Sleek%20Secure%20invisible%20grills/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "file:///D:/Sleek%20Secure%20invisible%20grills/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///D:/Sleek%20Secure%20invisible%20grills/node_modules/autoprefixer/lib/autoprefixer.js";
import sharp from "file:///D:/Sleek%20Secure%20invisible%20grills/node_modules/sharp/lib/index.js";
import fs from "fs";
var __vite_injected_original_import_meta_url = "file:///D:/Sleek%20Secure%20invisible%20grills/vite.config.ts";
var __dirname = path.dirname(fileURLToPath(__vite_injected_original_import_meta_url));
var imageOptimizationPlugin = {
  name: "image-optimization",
  apply: "build",
  async generateBundle(options, bundle) {
    const assetsDir = path.join(__dirname, "src/assets");
    if (!fs.existsSync(assetsDir)) return;
    const PREMIUM_QUALITY_IMAGES = [
      "Offer-Poster.jpg",
      "home-after-installation.jpg"
    ];
    const files = fs.readdirSync(assetsDir);
    const imageFiles = files.filter((f) => /\.(jpg|jpeg|png)$/i.test(f));
    for (const file of imageFiles) {
      const filePath = path.join(assetsDir, file);
      const fileExt = path.extname(file).toLowerCase();
      const fileNameWithoutExt = path.basename(file, fileExt);
      const isPremiumImage = PREMIUM_QUALITY_IMAGES.includes(file);
      try {
        if ([".jpg", ".jpeg"].includes(fileExt)) {
          const quality = isPremiumImage ? 80 : 75;
          const qualityLabel = isPremiumImage ? " [PREMIUM]" : "";
          await sharp(filePath).resize(2048, 1536, {
            fit: "inside",
            withoutEnlargement: true
          }).jpeg({ quality, progressive: true, mozjpeg: true }).toFile(filePath + ".opt");
          fs.renameSync(filePath + ".opt", filePath);
          const stats = fs.statSync(filePath);
          console.log(`\u2713 Optimized: ${file}${qualityLabel} \u2192 ${(stats.size / 1024).toFixed(2)} KB`);
        } else if (fileExt === ".png") {
          await sharp(filePath).resize(2048, 1536, {
            fit: "inside",
            withoutEnlargement: true
          }).png({ quality: 80, compression: 8 }).toFile(filePath + ".opt");
          fs.renameSync(filePath + ".opt", filePath);
          const stats = fs.statSync(filePath);
          console.log(`\u2713 Optimized: ${file} \u2192 ${(stats.size / 1024).toFixed(2)} KB`);
        }
      } catch (error) {
        console.warn(`\u26A0 Could not optimize ${file}:`, error.message);
      }
    }
  }
};
var vite_config_default = defineConfig({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false
    }
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  },
  plugins: [react(), imageOptimizationPlugin],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          framer: ["framer-motion"]
        }
      }
    },
    chunkSizeWarningLimit: 800
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxTbGVlayBTZWN1cmUgaW52aXNpYmxlIGdyaWxsc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcU2xlZWsgU2VjdXJlIGludmlzaWJsZSBncmlsbHNcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1NsZWVrJTIwU2VjdXJlJTIwaW52aXNpYmxlJTIwZ3JpbGxzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gXCJ1cmxcIjtcclxuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gXCJ0YWlsd2luZGNzc1wiO1xyXG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gXCJhdXRvcHJlZml4ZXJcIjtcclxuaW1wb3J0IHNoYXJwIGZyb20gXCJzaGFycFwiO1xyXG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcblxyXG5jb25zdCBfX2Rpcm5hbWUgPSBwYXRoLmRpcm5hbWUoZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpKTtcclxuXHJcbi8vIEN1c3RvbSBWaXRlIHBsdWdpbiBmb3IgaW1hZ2Ugb3B0aW1pemF0aW9uIGR1cmluZyBidWlsZFxyXG5jb25zdCBpbWFnZU9wdGltaXphdGlvblBsdWdpbiA9IHtcclxuICBuYW1lOiAnaW1hZ2Utb3B0aW1pemF0aW9uJyxcclxuICBhcHBseTogJ2J1aWxkJyxcclxuICBhc3luYyBnZW5lcmF0ZUJ1bmRsZShvcHRpb25zLCBidW5kbGUpIHtcclxuICAgIGNvbnN0IGFzc2V0c0RpciA9IHBhdGguam9pbihfX2Rpcm5hbWUsICdzcmMvYXNzZXRzJyk7XHJcbiAgICBcclxuICAgIGlmICghZnMuZXhpc3RzU3luYyhhc3NldHNEaXIpKSByZXR1cm47XHJcblxyXG4gICAgLy8gSW1hZ2VzIHdpdGggUFJFTUlVTSBxdWFsaXR5IHNldHRpbmdzIChsZXNzIGNvbXByZXNzaW9uLCBtYWludGFpbiBoaWdoZXN0IHF1YWxpdHkpXHJcbiAgICBjb25zdCBQUkVNSVVNX1FVQUxJVFlfSU1BR0VTID0gW1xyXG4gICAgICAnT2ZmZXItUG9zdGVyLmpwZycsXHJcbiAgICAgICdob21lLWFmdGVyLWluc3RhbGxhdGlvbi5qcGcnXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMoYXNzZXRzRGlyKTtcclxuICAgIGNvbnN0IGltYWdlRmlsZXMgPSBmaWxlcy5maWx0ZXIoZiA9PiAvXFwuKGpwZ3xqcGVnfHBuZykkL2kudGVzdChmKSk7XHJcblxyXG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGltYWdlRmlsZXMpIHtcclxuICAgICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4oYXNzZXRzRGlyLCBmaWxlKTtcclxuICAgICAgY29uc3QgZmlsZUV4dCA9IHBhdGguZXh0bmFtZShmaWxlKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBjb25zdCBmaWxlTmFtZVdpdGhvdXRFeHQgPSBwYXRoLmJhc2VuYW1lKGZpbGUsIGZpbGVFeHQpO1xyXG4gICAgICBjb25zdCBpc1ByZW1pdW1JbWFnZSA9IFBSRU1JVU1fUVVBTElUWV9JTUFHRVMuaW5jbHVkZXMoZmlsZSk7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIERlZmF1bHQgY29tcHJlc3Npb24gc2V0dGluZ3NcclxuICAgICAgICAvLyBQcmVtaXVtIGltYWdlczogODAlIHF1YWxpdHkgKGxlc3MgY29tcHJlc3Npb24sIG1haW50YWluIHF1YWxpdHkpXHJcbiAgICAgICAgLy8gT3RoZXIgaW1hZ2VzOiA3NSUgcXVhbGl0eSAob3JpZ2luYWwgY29tcHJlc3Npb24pXHJcbiAgICAgICAgaWYgKFsnLmpwZycsICcuanBlZyddLmluY2x1ZGVzKGZpbGVFeHQpKSB7XHJcbiAgICAgICAgICBjb25zdCBxdWFsaXR5ID0gaXNQcmVtaXVtSW1hZ2UgPyA4MCA6IDc1O1xyXG4gICAgICAgICAgY29uc3QgcXVhbGl0eUxhYmVsID0gaXNQcmVtaXVtSW1hZ2UgPyAnIFtQUkVNSVVNXScgOiAnJztcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgYXdhaXQgc2hhcnAoZmlsZVBhdGgpXHJcbiAgICAgICAgICAgIC5yZXNpemUoMjA0OCwgMTUzNiwge1xyXG4gICAgICAgICAgICAgIGZpdDogJ2luc2lkZScsXHJcbiAgICAgICAgICAgICAgd2l0aG91dEVubGFyZ2VtZW50OiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5qcGVnKHsgcXVhbGl0eSwgcHJvZ3Jlc3NpdmU6IHRydWUsIG1vempwZWc6IHRydWUgfSlcclxuICAgICAgICAgICAgLnRvRmlsZShmaWxlUGF0aCArICcub3B0Jyk7XHJcblxyXG4gICAgICAgICAgZnMucmVuYW1lU3luYyhmaWxlUGF0aCArICcub3B0JywgZmlsZVBhdGgpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBjb25zdCBzdGF0cyA9IGZzLnN0YXRTeW5jKGZpbGVQYXRoKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBcdTI3MTMgT3B0aW1pemVkOiAke2ZpbGV9JHtxdWFsaXR5TGFiZWx9IFx1MjE5MiAkeyhzdGF0cy5zaXplIC8gMTAyNCkudG9GaXhlZCgyKX0gS0JgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbGVFeHQgPT09ICcucG5nJykge1xyXG4gICAgICAgICAgLy8gUE5HIGNvbXByZXNzaW9uOiBrZWVwIGF0IG9yaWdpbmFsIDgwJSBxdWFsaXR5XHJcbiAgICAgICAgICBhd2FpdCBzaGFycChmaWxlUGF0aClcclxuICAgICAgICAgICAgLnJlc2l6ZSgyMDQ4LCAxNTM2LCB7XHJcbiAgICAgICAgICAgICAgZml0OiAnaW5zaWRlJyxcclxuICAgICAgICAgICAgICB3aXRob3V0RW5sYXJnZW1lbnQ6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnBuZyh7IHF1YWxpdHk6IDgwLCBjb21wcmVzc2lvbjogOCB9KVxyXG4gICAgICAgICAgICAudG9GaWxlKGZpbGVQYXRoICsgJy5vcHQnKTtcclxuXHJcbiAgICAgICAgICBmcy5yZW5hbWVTeW5jKGZpbGVQYXRoICsgJy5vcHQnLCBmaWxlUGF0aCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGNvbnN0IHN0YXRzID0gZnMuc3RhdFN5bmMoZmlsZVBhdGgpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYFx1MjcxMyBPcHRpbWl6ZWQ6ICR7ZmlsZX0gXHUyMTkyICR7KHN0YXRzLnNpemUgLyAxMDI0KS50b0ZpeGVkKDIpfSBLQmApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oYFx1MjZBMCBDb3VsZCBub3Qgb3B0aW1pemUgJHtmaWxlfTpgLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgc2VydmVyOiB7XHJcbiAgICBob3N0OiBcIjo6XCIsXHJcbiAgICBwb3J0OiA4MDgwLFxyXG4gICAgaG1yOiB7XHJcbiAgICAgIG92ZXJsYXk6IGZhbHNlLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNzczoge1xyXG4gICAgcG9zdGNzczoge1xyXG4gICAgICBwbHVnaW5zOiBbdGFpbHdpbmRjc3MsIGF1dG9wcmVmaXhlcl0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW3JlYWN0KCksIGltYWdlT3B0aW1pemF0aW9uUGx1Z2luXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBidWlsZDoge1xyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBtYW51YWxDaHVua3M6IHtcclxuICAgICAgICAgIHZlbmRvcjogW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIiwgXCJyZWFjdC1yb3V0ZXItZG9tXCJdLFxyXG4gICAgICAgICAgZnJhbWVyOiBbXCJmcmFtZXItbW90aW9uXCJdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiA4MDAsXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFIsU0FBUyxvQkFBb0I7QUFDelQsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLHFCQUFxQjtBQUM5QixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxRQUFRO0FBUDRKLElBQU0sMkNBQTJDO0FBUzVOLElBQU0sWUFBWSxLQUFLLFFBQVEsY0FBYyx3Q0FBZSxDQUFDO0FBRzdELElBQU0sMEJBQTBCO0FBQUEsRUFDOUIsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsTUFBTSxlQUFlLFNBQVMsUUFBUTtBQUNwQyxVQUFNLFlBQVksS0FBSyxLQUFLLFdBQVcsWUFBWTtBQUVuRCxRQUFJLENBQUMsR0FBRyxXQUFXLFNBQVMsRUFBRztBQUcvQixVQUFNLHlCQUF5QjtBQUFBLE1BQzdCO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFFQSxVQUFNLFFBQVEs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
