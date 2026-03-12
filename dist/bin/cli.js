#!/usr/bin/env node
import { analyzeLogs } from "../src/parser.js";
import { calculateCost } from "../src/costCalculator.js";
import { printReport } from "../src/reporter.js";
const file = process.argv[2];
if (!file) {
    console.log("Usage: aicostmonitor <logfile.json>");
    process.exit(1);
}
const logs = analyzeLogs(file);
const result = calculateCost(logs);
printReport(result);
