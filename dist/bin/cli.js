#!/usr/bin/env node
import { analyzeLogs } from "../src/parser.ts";
import { calculateCost } from "../src/costCalculator.ts";
import { printReport } from "../src/reporter.ts";
const file = process.argv[2];
if (!file) {
    console.log("Usage: ai-bill-guard <logfile.json>");
    process.exit(1);
}
const logs = analyzeLogs(file);
const result = calculateCost(logs);
printReport(result);
