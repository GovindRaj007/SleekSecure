#!/usr/bin/env node

/**
 * Image Compression Script
 * Compresses all images in src/assets and creates WebP versions
 * 
 * Usage: node scripts/compress-images.js
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, '../src/assets');
const backupDir = path.join(__dirname, '../src/assets-backup');

// Image optimization settings
const JPEG_QUALITY = 75; // 0-100, default compression
const WEBP_QUALITY = 75;
const PNG_QUALITY = 80;

// Images that should NOT be compressed (used as-is)
const EXCLUDE_FROM_COMPRESSION = [
  'home-after-installation.jpg'
];

async function ensureBackupDir() {
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }
}

async function backupImage(filename) {
  const source = path.join(assetsDir, filename);
  const destination = path.join(backupDir, filename);
  
  if (!fs.existsSync(destination)) {
    fs.copyFileSync(source, destination);
    console.log(`✓ Backed up: ${filename}`);
  }
}

async function getImageStats(filepath) {
  const stats = fs.statSync(filepath);
  return {
    sizeKb: (stats.size / 1024).toFixed(2),
    sizeMb: (stats.size / 1024 / 1024).toFixed(3)
  };
}

async function compressImage(filename) {
  const inputPath = path.join(assetsDir, filename);
  const ext = path.extname(filename).toLowerCase();
  const nameWithoutExt = path.basename(filename, ext);

  try {
    const originalStats = await getImageStats(inputPath);
    
    // Determine quality based on file size
    let quality = JPEG_QUALITY;
    if (parseFloat(originalStats.sizeMb) > 1.5) {
      quality = 65; // Reduce quality for very large files
    } else if (parseFloat(originalStats.sizeMb) > 1) {
      quality = 70;
    }

    // Compress JPEG
    if (['.jpg', '.jpeg'].includes(ext)) {
      const outputPath = inputPath;
      
      await sharp(inputPath)
        .resize(1920, 1440, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .jpeg({ quality, progressive: true, mozjpeg: true })
        .toFile(outputPath + '.temp');
      
      fs.renameSync(outputPath + '.temp', outputPath);
      
      const compressedStats = await getImageStats(outputPath);
      const savings = ((1 - compressedStats.sizeKb / originalStats.sizeKb) * 100).toFixed(1);
      
      console.log(`✓ ${filename}`);
      console.log(`  Original: ${originalStats.sizeKb} KB → Compressed: ${compressedStats.sizeKb} KB (${savings}% saved)`);

      // Create WebP version
      const webpPath = path.join(assetsDir, nameWithoutExt + '.webp');
      await sharp(outputPath)
        .webp({ quality: WEBP_QUALITY })
        .toFile(webpPath);
      
      const webpStats = await getImageStats(webpPath);
      console.log(`  WebP: ${webpStats.sizeKb} KB created`);
    }
    // Compress PNG
    else if (ext === '.png') {
      const outputPath = inputPath;
      
      await sharp(inputPath)
        .resize(1920, 1440, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .png({ quality: PNG_QUALITY })
        .toFile(outputPath + '.temp');
      
      fs.renameSync(outputPath + '.temp', outputPath);
      
      const compressedStats = await getImageStats(outputPath);
      const savings = ((1 - compressedStats.sizeKb / originalStats.sizeKb) * 100).toFixed(1);
      
      console.log(`✓ ${filename}`);
      console.log(`  Original: ${originalStats.sizeKb} KB → Compressed: ${compressedStats.sizeKb} KB (${savings}% saved)`);
    }
  } catch (error) {
    console.error(`✗ Error processing ${filename}:`, error.message);
  }
}

async function main() {
  console.log('🖼️  Image Optimization Script\n');
  console.log('📁 Assets Directory:', assetsDir);
  console.log('💾 Backup Directory:', backupDir);
  console.log('---\n');

  // Ensure backup directory exists
  await ensureBackupDir();

  // Get all image files
  const files = fs.readdirSync(assetsDir);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    const isLogo = file.includes('logo');
    const isExcluded = EXCLUDE_FROM_COMPRESSION.includes(file);
    return ['.jpg', '.jpeg', '.png'].includes(ext) && !isLogo && !isExcluded;
  });

  if (imageFiles.length === 0) {
    console.log('No image files found in assets directory');
    return;
  }

  console.log(`Found ${imageFiles.length} images to optimize`);
  console.log('(Logo files and excluded images are skipped)\n');

  // Backup all images first
  console.log('Creating backups...');
  for (const file of imageFiles) {
    await backupImage(file);
  }
  console.log('');

  // Compress each image
  console.log('Compressing images...\n');
  for (const file of imageFiles) {
    await compressImage(file);
  }

  console.log('\n✅ Image optimization complete!');
  console.log('\n📊 Summary:');
  console.log('- Original images backed up in src/assets-backup/');
  console.log('- Compressed JPEGs replaced originals');
  console.log('- WebP versions created for modern browsers');
  console.log('\n💡 Next steps:');
  console.log('1. Test the website to ensure images look good');
  console.log('2. Update image components to use WebP with JPEG fallback');
  console.log('3. Run "npm run build" to verify bundle size improvement');
}

main().catch(console.error);
