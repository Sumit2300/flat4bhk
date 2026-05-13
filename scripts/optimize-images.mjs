#!/usr/bin/env node
/**
 * Convert all project images to WebP using sharp (local, lossless pipeline).
 * Targets: src/assets/picasa/, src/assets/brand/, src/assets/mv-realtor-logo.jpeg
 * After running: imports in picasa-4bhk.tsx are updated automatically.
 * Run: node scripts/optimize-images.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

// Root-level assets we actually use (the rest are unused template files)
const ROOT_ASSETS_IN_USE = new Set(["mv-realtor-logo.jpeg"]);

function collectImages() {
  const files = [];

  const picasa = path.join(ROOT, "src/assets/picasa");
  fs.readdirSync(picasa)
    .filter((f) => /\.(jpg|jpeg|png)$/i.test(f))
    .forEach((f) => files.push(path.join(picasa, f)));

  const brand = path.join(ROOT, "src/assets/brand");
  if (fs.existsSync(brand)) {
    fs.readdirSync(brand)
      .filter((f) => /\.(jpg|jpeg|png)$/i.test(f))
      .forEach((f) => files.push(path.join(brand, f)));
  }

  const rootAssets = path.join(ROOT, "src/assets");
  fs.readdirSync(rootAssets)
    .filter((f) => /\.(jpg|jpeg|png)$/i.test(f) && ROOT_ASSETS_IN_USE.has(f))
    .filter((f) => fs.statSync(path.join(rootAssets, f)).isFile())
    .forEach((f) => files.push(path.join(rootAssets, f)));

  return files;
}

async function toWebP(filePath) {
  const outPath = filePath.replace(/\.(jpg|jpeg|png)$/i, ".webp");
  const original = fs.statSync(filePath).size;

  await sharp(filePath)
    .webp({ quality: 70, effort: 6 })
    .toFile(outPath);

  const compressed = fs.statSync(outPath).size;
  return { outPath, original, compressed };
}

function updateImports(convertedFiles) {
  const tsxPath = path.join(ROOT, "src/routes/picasa-4bhk.tsx");
  let source = fs.readFileSync(tsxPath, "utf8");

  for (const file of convertedFiles) {
    const rel = path.relative(path.join(ROOT, "src"), file).replace(/\\/g, "/");
    const from = `@/${rel}`;
    const to = from.replace(/\.(jpg|jpeg|png)$/i, ".webp");
    if (from !== to) source = source.replaceAll(`"${from}"`, `"${to}"`);
  }

  fs.writeFileSync(tsxPath, source);
}

async function main() {
  const images = collectImages();
  console.log(`\nConverting ${images.length} images to WebP (quality 82)...\n`);

  const converted = [];
  let totalOrig = 0;
  let totalNew = 0;

  for (const img of images) {
    const name = path.basename(img);
    const origKB = (fs.statSync(img).size / 1024).toFixed(0);
    process.stdout.write(`  ${name.padEnd(30)} ${String(origKB + "KB").padStart(7)} → `);

    try {
      const { outPath, original, compressed } = await toWebP(img);
      const newKB = (compressed / 1024).toFixed(0);
      const pct = (((original - compressed) / original) * 100).toFixed(1);
      console.log(`${String(newKB + "KB").padStart(6)}  (-${pct}%)  → ${path.basename(outPath)}`);
      totalOrig += original;
      totalNew += compressed;
      converted.push(img);
    } catch (err) {
      console.log(`FAILED — ${err.message}`);
    }
  }

  const totalPct = (((totalOrig - totalNew) / totalOrig) * 100).toFixed(1);
  console.log(
    `\n  Total: ${(totalOrig / 1024 / 1024).toFixed(2)} MB → ` +
      `${(totalNew / 1024 / 1024).toFixed(2)} MB  (-${totalPct}%)\n`,
  );

  if (converted.length > 0) {
    updateImports(converted);
    console.log(`✓ Updated imports in src/routes/picasa-4bhk.tsx`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
