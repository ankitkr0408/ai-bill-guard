export * from "./costCalculator.js";
export * from "./pricingModels.js";
export * from "./reporter.js";
export * from "./monitor.js";
export * from "./parser.js";
export * from "./middleware.js";
import { calculateCost } from "./costCalculator.js";
import { printReport } from "./reporter.js";
declare const _default: {
    monitor: import("./monitor.js").AICostMonitor;
    MODELS: {
        readonly GPT_4O: "gpt-4o";
        readonly GPT_4O_MINI: "gpt-4o-mini";
        readonly GPT_3_5_TURBO: "gpt-3.5-turbo";
        readonly GEMINI_1_5_PRO: "gemini-1.5-pro";
        readonly GEMINI_1_5_FLASH: "gemini-1.5-flash";
        readonly CLAUDE_3_5_SONNET: "claude-3-5-sonnet";
        readonly CLAUDE_3_OPUS: "claude-3-opus";
        readonly CLAUDE_3_HAIKU: "claude-3-haiku";
    };
    pricing: Readonly<{
        "gpt-4o": {
            input: number;
            output: number;
        };
        "gpt-4o-mini": {
            input: number;
            output: number;
        };
        "gpt-3.5-turbo": {
            input: number;
            output: number;
        };
        "gemini-1.5-pro": {
            input: number;
            output: number;
        };
        "gemini-1.5-flash": {
            input: number;
            output: number;
        };
        "claude-3-5-sonnet": {
            input: number;
            output: number;
        };
        "claude-3-opus": {
            input: number;
            output: number;
        };
        "claude-3-haiku": {
            input: number;
            output: number;
        };
    }>;
    calculateCost: typeof calculateCost;
    printReport: typeof printReport;
};
export default _default;
