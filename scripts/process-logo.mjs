/**
 * Removes near-black background pixels from the logo PNG and writes a transparent PNG.
 */
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const src = process.argv[2] || path.join(root, "public", "lucas-marketing-logo-src.png");
const dest = process.argv[3] || path.join(root, "public", "lucas-marketing-logo.png");

const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
const px = new Uint8ClampedArray(data);

for (let i = 0; i < px.length; i += channels) {
  const r = px[i];
  const g = px[i + 1];
  const b = px[i + 2];
  const max = Math.max(r, g, b);
  const lum = 0.299 * r + 0.587 * g + 0.114 * b;
  // Backdrop: very dark, low saturation (black / gray). Keeps colored logo pixels.
  if (lum < 42 && max < 58) {
    px[i + 3] = 0;
  }
}

await sharp(Buffer.from(px), {
  raw: { width, height, channels: 4 },
})
  .png({ compressionLevel: 9 })
  .toFile(dest);

console.log("Wrote", dest, `${width}x${height}`);
