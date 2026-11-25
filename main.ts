import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "One star. The waiter sat me at a table for one, served a cold Monday, and charged me for a whole week.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
