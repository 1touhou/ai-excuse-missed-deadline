import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I ran out of tokens three words before done, so I spent my last ones writing this excuse instead of the work.";

if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${entry.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
