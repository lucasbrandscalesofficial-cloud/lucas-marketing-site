/**
 * Chroma-keys near-black / near-white matte pixels to transparency for the logo PNG.
 * Reads the file into memory so src and dest can be the same path.
 */
import fs from "fs/promises";
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const srcPath = process.argv[2] || path.join(root, "public", "lucas-marketing-logo.png");
const destPath = process.argv[3] || path.join(root, "public", "lucas-marketing-logo.png");

const input = await fs.readFile(srcPath);
const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
const px = new Uint8ClampedArray(data);

for (let i = 0; i < px.length; i += channels) {
  const r = px[i];
  const g = px[i + 1];
  const b = px[i + 2];
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const sat = max === 0 ? 0 : (max - min) / max;
  const lum = 0.299 * r + 0.587 * g + 0.114 * b;

  // Dark / black export background / plate
  if (lum < 44 && max < 62) {
    px[i + 3] = 0;
    continue;
  }
  // Light gray / white halos (some exports bake a bright matte)
  if (lum > 248 && sat < 0.12 && min > 230) {
    px[i + 3] = 0;
  }
}

const out = await sharp(Buffer.from(px), {
  raw: { width, height, channels: 4 },
})
  .png({ compressionLevel: 9 })
  .toBuffer();

await fs.writeFile(destPath, out);
console.log("Wrote", destPath, `${width}x${height}`);
