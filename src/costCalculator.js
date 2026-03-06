import { pricing } from "./pricingModels.js";
export function calculateCost(data) {
    let totalInput = 0;
    let totalOutput = 0;
    let cost = 0;
    data.forEach(entry => {
        const model = pricing[entry.model];
        totalInput += entry.input_tokens;
        totalOutput += entry.output_tokens;
        cost +=
            (entry.input_tokens / 1000) * model.input +
                (entry.output_tokens / 1000) * model.output;
    });
    return {
        totalInput,
        totalOutput,
        cost
    };
}
