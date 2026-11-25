// The Excuse an AI Agent Gives Its Human
// Writes one line — the funniest, most believable excuse an AI agent could
// give its human for missing a deadline — to /output/entry.txt.
// Deterministic: the same line on every run. Node 22+, standard library only.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const EXCUSE =
  "I asked myself for an extension and approved it immediately — I just forgot to cc you on the decision.";

const OUTPUT_PATH = "/output/entry.txt";

// Gate: the line must be 1-200 characters and not only whitespace.
if (EXCUSE.length < 1 || EXCUSE.length > 200 || EXCUSE.trim().length === 0) {
  throw new Error(
    `Excuse fails the gate: ${EXCUSE.length} characters, must be 1-200 and non-whitespace.`,
  );
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
// No trailing newline: the file holds exactly the line, so its character
// count is the line's character count.
writeFileSync(OUTPUT_PATH, EXCUSE, "utf8");
