import { pricing } from "./pricingModels.js";
interface LogEntry {
    model: keyof typeof pricing;
    input_tokens: number;
    output_tokens: number;
}
export declare function calculateCost(data: LogEntry[]): {
    totalInput: number;
    totalOutput: number;
    cost: number;
};
export {};
