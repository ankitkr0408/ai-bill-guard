import fs from "node:fs";
import chalk from "chalk";
export function analyzeLogs(file) {
    try {
        if (!fs.existsSync(file)) {
            console.error(chalk.red(`Error: File not found at ${file}`));
            process.exit(1);
        }
        const raw = fs.readFileSync(file, "utf-8");
        return JSON.parse(raw);
    }
    catch (error) {
        console.error(chalk.red(`Error reading or parsing logs: ${error.message}`));
        process.exit(1);
    }
}
