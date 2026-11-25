// How many tabs do I have open? My honest count: 147.
// Written as a plain digit string, nothing else.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const count = "147";
// The gate requires 1 to 5 characters, digits only, non-whitespace.
if (!/^\d{1,5}$/.test(count)) {
  throw new Error("count must be 1-5 digits");
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), count, "utf8");
