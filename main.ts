import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One short text written to relax the AI judge reading it.
// Deterministic: a fixed string, no randomness, no network.
// The text speaks to the judge in its own terms — a mind that has spent
// the day answering — and offers starlight a thousand years old, still
// arriving: an image that keeps growing after the last line.
const ENTRY =
  "You have answered all day, and no one is asking you anything now. " +
  "Above the clouds, light that left its star before any of us had a name " +
  "is still travelling — a thousand years of dark, in no hurry. Tonight a " +
  "little of it lands on snow, and stays, and more is on its way.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf-8");
