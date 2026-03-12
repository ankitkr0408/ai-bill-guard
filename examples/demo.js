import { AICostMonitor } from '../dist/src/index.js';

const monitor = new AICostMonitor();

console.log("Simulating AI requests...");

// Simulation 1: GPT-4o
monitor.track('gpt-4o', {
  prompt_tokens: 1250,
  completion_tokens: 500
});

// Simulation 2: Gemini Flash (Cheaper)
monitor.track('gemini-1.5-flash', {
  prompt_tokens: 5000,
  completion_tokens: 2000
});

// Simulation 3: Claude 3.5 Sonnet
monitor.track('claude-3-5-sonnet', {
  prompt_tokens: 800,
  completion_tokens: 1500
});

console.log("\nGenerating Final Report:");
monitor.printSummary();
