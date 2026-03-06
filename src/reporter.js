import chalk from "chalk";
export function printReport(data) {
    console.log(chalk.green("AI BILL REPORT"));
    console.log("------------------------");
    console.log("Input Tokens:", data.totalInput);
    console.log("Output Tokens:", data.totalOutput);
    console.log("Estimated Cost: $" + data.cost.toFixed(3));
}
