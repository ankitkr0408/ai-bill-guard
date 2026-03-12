import { pricing } from "./pricingModels.js";
export interface Usage {
    prompt_tokens: number;
    completion_tokens: number;
}
export declare class AICostMonitor {
    private logs;
    private silent;
    constructor(options?: {
        silent?: boolean;
    });
    /**
     * Log a single completion usage
     * @param model The model name (e.g., 'gpt-4o')
     * @param usage Usage object with prompt_tokens and completion_tokens
     */
    track(model: string, usage: Usage): {
        model: keyof typeof pricing;
        input_tokens: number;
        output_tokens: number;
        timestamp: string;
    };
    /**
     * Get the total cost of all tracked calls
     */
    getTotalReport(): {
        totalInput: number;
        totalOutput: number;
        cost: number;
    };
    /**
     * Print a beautiful report to the console
     */
    printSummary(): void;
    /**
     * Clear all logs
     */
    clear(): void;
}
export declare const monitor: AICostMonitor;
