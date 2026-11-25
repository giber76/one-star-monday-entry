import { mkdirSync, writeFileSync } from "node:fs";

// One-star review of Monday, written as though Monday were a restaurant.
// 22 words — inside the 25-word cap, short enough to retype into a group chat.
const ENTRY =
  "One star. The waiter sat me at a table for one, served a cold Monday, and charged me for a whole week.";

const words = ENTRY.trim().split(/\s+/).length;
if (words > 25) throw new Error(`entry is ${words} words, over the 25-word cap`);
if (ENTRY.length < 1 || ENTRY.length > 180) {
  throw new Error(`entry is ${ENTRY.length} chars, outside the 1-180 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
