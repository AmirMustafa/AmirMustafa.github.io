#!/usr/bin/env node
/** Merge scripts/patches/{locale}.json into assets/data/localization/{locale}.json */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOC_DIR = path.join(__dirname, "../assets/data/localization");
const PATCH_DIR = path.join(__dirname, "patches");
const SKIP = new Set(["en", "ar", "hi"]);

const en = JSON.parse(fs.readFileSync(path.join(LOC_DIR, "en.json"), "utf8"));
const enKeys = Object.keys(en);

if (!fs.existsSync(PATCH_DIR)) {
  console.error("No patches directory");
  process.exit(1);
}

for (const file of fs.readdirSync(PATCH_DIR).filter((f) => f.endsWith(".json"))) {
  const code = file.replace(/\.json$/, "");
  if (SKIP.has(code)) continue;
  const locPath = path.join(LOC_DIR, `${code}.json`);
  if (!fs.existsSync(locPath)) continue;
  const patch = JSON.parse(fs.readFileSync(path.join(PATCH_DIR, file), "utf8"));
  const loc = JSON.parse(fs.readFileSync(locPath, "utf8"));
  Object.assign(loc, patch);
  const out = {};
  for (const k of enKeys) {
    if (k in loc) out[k] = loc[k];
  }
  fs.writeFileSync(locPath, JSON.stringify(out, null, 2) + "\n", "utf8");
  console.log(`${code}: ${Object.keys(patch).length} keys patched`);
}
