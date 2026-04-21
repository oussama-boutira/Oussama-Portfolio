import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, parse } from 'path';

const ASSETS_DIR = './src/assets';
const MAX_WIDTH = 1200;
const WEBP_QUALITY = 80;

// Only convert files larger than 100KB
const MIN_SIZE = 100 * 1024;

async function optimizeImages() {
  const files = await readdir(ASSETS_DIR);
  const imageFiles = files.filter(f => /\.(png|jpg|jpeg)$/i.test(f));

  console.log(`Found ${imageFiles.length} images to process...\n`);

  for (const file of imageFiles) {
    const inputPath = join(ASSETS_DIR, file);
    const fileInfo = await stat(inputPath);

    if (fileInfo.size < MIN_SIZE) {
      console.log(`⏭️  SKIP ${file} (${(fileInfo.size / 1024).toFixed(0)} KB — too small)`);
      continue;
    }

    const { name } = parse(file);
    const outputPath = join(ASSETS_DIR, `${name}.webp`);

    try {
      const metadata = await sharp(inputPath).metadata();
      const needsResize = metadata.width > MAX_WIDTH;

      let pipeline = sharp(inputPath);

      if (needsResize) {
        pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
      }

      const result = await pipeline
        .webp({ quality: WEBP_QUALITY })
        .toFile(outputPath);

      const savings = ((1 - result.size / fileInfo.size) * 100).toFixed(1);
      console.log(
        `✅ ${file} (${(fileInfo.size / 1024).toFixed(0)} KB) → ${name}.webp (${(result.size / 1024).toFixed(0)} KB) — ${savings}% smaller${needsResize ? ` [resized ${metadata.width}→${MAX_WIDTH}px]` : ''}`
      );
    } catch (err) {
      console.error(`❌ Error processing ${file}:`, err.message);
    }
  }

  console.log('\n🎉 Done! Update your imports to use .webp files.');
}

optimizeImages();
