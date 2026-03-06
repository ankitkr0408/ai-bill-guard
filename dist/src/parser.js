import fs from "fs";
export function analyzeLogs(file) {
    const raw = fs.readFileSync(file, "utf-8");
    return JSON.parse(raw);
}
