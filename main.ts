// One Line, One Chill — a single sentence of horror, written out to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const chillLine =
  "My reflection waved back a second too late this morning — and it was smiling when I wasn't.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";

function emit(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 chars, got ${line.length}`);
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
  console.log(`wrote entry.txt (${line.length} chars) to ${outDir}`);
}

emit(chillLine);
