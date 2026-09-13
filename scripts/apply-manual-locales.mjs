#!/usr/bin/env node
/**
 * Merge locale files with en.json key order.
 * - UI strings from manual-ui.json (hand-maintained)
 * - Keeps existing good translations
 * - Replaces broken API placeholders with English fallback
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOC_DIR = path.join(__dirname, "../assets/data/localization");
const MANUAL_PATH = path.join(__dirname, "manual-ui.json");

const EN = JSON.parse(fs.readFileSync(path.join(LOC_DIR, "en.json"), "utf8"));
const EN_KEYS = Object.keys(EN);
const MANUAL = JSON.parse(fs.readFileSync(MANUAL_PATH, "utf8"));
const UI_KEYS = new Set(MANUAL._uiKeys || []);
const BAD = /MYMEMORY WARNING/i;

function mergeLocale(code) {
  const filePath = path.join(LOC_DIR, `${code}.json`);
  if (!fs.existsSync(filePath)) return null;

  const loc = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const patch = MANUAL[code] || {};
  const out = {};

  for (const k of EN_KEYS) {
    if (patch[k] !== undefined && patch[k] !== "") {
      out[k] = patch[k];
      continue;
    }
    const cur = loc[k];
    if (cur !== undefined && cur !== "" && !BAD.test(String(cur))) {
      out[k] = cur;
      continue;
    }
    if (UI_KEYS.has(k)) {
      out[k] = EN[k];
      continue;
    }
    out[k] = EN[k];
  }

  return out;
}

function main() {
  const files = fs
    .readdirSync(LOC_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(/\.json$/, ""));

  for (const code of files.sort()) {
    const merged = mergeLocale(code);
    if (!merged) continue;
    const filePath = path.join(LOC_DIR, `${code}.json`);
    fs.writeFileSync(
      filePath,
      JSON.stringify(merged, null, 2) + "\n",
      "utf8",
    );
    console.log(`${code}.json → ${Object.keys(merged).length} keys`);
  }
}

main();
