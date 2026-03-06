import fs from "fs";

export function analyzeLogs(file: string): any {
  const raw = fs.readFileSync(file, "utf-8");
  return JSON.parse(raw);
}