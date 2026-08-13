import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";
import ffmpeg from "fluent-ffmpeg";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const dir = path.join(root, "public/entregaveis-v2");

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

function runFfmpeg(input, output, args) {
  return new Promise((resolve, reject) => {
    ffmpeg(input)
      .outputOptions(args)
      .on("end", resolve)
      .on("error", reject)
      .save(output);
  });
}

async function optimizeWebp(name, width, quality = 78, suffix = "") {
  const base = name.replace(/\.webp$/, "");
  const outName = `${base}${suffix}.webp`;
  const input = path.join(dir, name);
  const output = path.join(dir, outName);
  if (!fs.existsSync(input)) return outName;
  const buf = await sharp(input)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toBuffer();
  fs.writeFileSync(output, buf);
  const meta = await sharp(buf).metadata();
  const kb = Math.round(buf.length / 1024);
  console.log(`${outName}: ${meta.width}x${meta.height} (${kb}KB)`);
  return outName;
}

async function main() {
  const videoIn = path.join(dir, "hero-timelapse.mp4");
  const videoOut = path.join(dir, "hero-timelapse-opt.mp4");
  const posterOut = path.join(dir, "hero-poster.webp");

  if (fs.existsSync(videoIn)) {
    const videoTmp = path.join(dir, "hero-timelapse-opt.mp4");
    if (!fs.existsSync(videoTmp)) {
      await runFfmpeg(videoIn, videoTmp, [
        "-vf",
        "scale=480:480:force_original_aspect_ratio=increase,crop=480:480",
        "-c:v",
        "libx264",
        "-preset",
        "slow",
        "-crf",
        "28",
        "-movflags",
        "+faststart",
        "-an",
      ]);
    }
    if (fs.existsSync(videoTmp)) {
      try {
        fs.unlinkSync(videoIn);
        fs.renameSync(videoTmp, videoIn);
      } catch {
        /* dev server may lock source; keep opt copy */
      }
    }

    if (!fs.existsSync(posterOut)) {
      const posterJpg = path.join(dir, "hero-poster.jpg");
      await runFfmpeg(
        fs.existsSync(videoIn) ? videoIn : videoTmp,
        posterJpg,
        ["-frames:v", "1", "-q:v", "2"],
      );
      await sharp(posterJpg).webp({ quality: 82, effort: 6 }).toFile(posterOut);
      fs.unlinkSync(posterJpg);
    }

    const vPath = fs.existsSync(videoIn) ? videoIn : videoTmp;
    const vkb = Math.round(fs.statSync(vPath).size / 1024);
    const pkb = Math.round(fs.statSync(posterOut).size / 1024);
    console.log(`hero video: ${vkb}KB`);
    console.log(`hero-poster.webp: ${pkb}KB`);
  }

  for (let i = 1; i <= 14; i++) {
    const n = String(i).padStart(2, "0");
    await optimizeWebp(`entregaveis-${n}.webp`, 520, 78, "-520");
  }

  for (const n of [45, 46, 47, 48, 49, 50, 51]) {
    await optimizeWebp(`instagram-post-${n}.webp`, 500, 78, "-500");
  }

  for (let i = 1; i <= 5; i++) {
    await optimizeWebp(`bonus-${i}.webp`, 640, 78, "-640");
  }

  await optimizeWebp("plano-basico-v2.webp", 640, 78, "-640");
  await optimizeWebp("plano-completo-v2.webp", 640, 78, "-640");
  await optimizeWebp("compra-segura-hotmart.webp", 640, 85, "-640");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
