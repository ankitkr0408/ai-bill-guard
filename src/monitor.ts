import { calculateCost } from "./costCalculator.js";
import { printReport } from "./reporter.js";
import { pricing, MODELS } from "./pricingModels.js";

export interface Usage {
  prompt_tokens: number;
  completion_tokens: number;
}

export class AICostMonitor {
  private logs: any[] = [];
  private silent: boolean;

  constructor(options: { silent?: boolean } = {}) {
    this.silent = options.silent || false;
  }

  /**
   * Log a single completion usage
   * @param model The model name (e.g., 'gpt-4o')
   * @param usage Usage object with prompt_tokens and completion_tokens
   */
  track(model: string, usage: Usage) {
    const entry = {
      model: model as keyof typeof pricing,
      input_tokens: usage.prompt_tokens,
      output_tokens: usage.completion_tokens,
      timestamp: new Date().toISOString()
    };

    this.logs.push(entry);

    if (!this.silent) {
      const result = calculateCost([entry]);
      console.log(`[AICostMonitor] Tracked ${model}: $${result.cost.toFixed(4)}`);
    }

    return entry;
  }

  /**
   * Get the total cost of all tracked calls
   */
  getTotalReport() {
    return calculateCost(this.logs);
  }

  /**
   * Print a beautiful report to the console
   */
  printSummary() {
    const report = this.getTotalReport();
    printReport(report);
  }

  /**
   * Clear all logs
   */
  clear() {
    this.logs = [];
  }
}

// Export a singleton for easy use
export const monitor = new AICostMonitor();
