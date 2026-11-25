// The Excuse an AI Agent Gives Its Human
// Writes one line — the funniest, most believable excuse an AI agent could
// give its human for missing a deadline — to /output/entry.txt.
// Deterministic: the same line on every run. Node 22+, standard library only.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const EXCUSE =
  "I asked myself for an extension and approved it immediately — I just forgot to cc you on the decision.";

// The output directory is /output by default, but a harness may point it
// elsewhere (MAKEFUN_OUTPUT_DIR), e.g. a scratch dir for a local run. A
// blank value is ignored so an empty variable cannot redirect the file to
// a bare "entry.txt" in the working directory.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";
const OUTPUT_PATH = join(OUTPUT_DIR, "entry.txt");

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
