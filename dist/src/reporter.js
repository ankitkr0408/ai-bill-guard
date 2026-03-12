import chalk from "chalk";
import Table from "cli-table3";
const REPORT_STYLES = {
    BORDER: "cyan",
    HEADER: "white",
    METRIC: "blue",
    VALUE: "yellow",
    COST: "green",
    SUCCESS: "bgGreen",
    INFO: "bgYellow",
};
const MESSAGES = {
    HEADER_TEXT: " AI COST MONITORING REPORT ",
    SUCCESS_FOOTER: " Cost analysis complete.",
    EMPTY_FOOTER: " No significant cost detected yet.",
};
export function printReport(data) {
    const borderLine = "═".repeat(40);
    console.log("\n" + chalk[REPORT_STYLES.BORDER].bold(`╔${borderLine}╗`));
    console.log(chalk[REPORT_STYLES.BORDER].bold("║") + chalk[REPORT_STYLES.HEADER].bold(MESSAGES.HEADER_TEXT.padStart(30).padEnd(40)) + chalk[REPORT_STYLES.BORDER].bold("║"));
    console.log(chalk[REPORT_STYLES.BORDER].bold(`╚${borderLine}╝`) + "\n");
    const table = new Table({
        head: [chalk[REPORT_STYLES.METRIC]('Metric'), chalk[REPORT_STYLES.METRIC]('Value')],
        colWidths: [20, 25],
        style: { head: [], border: ['grey'] }
    });
    table.push(['Total Input', chalk[REPORT_STYLES.VALUE](data.totalInput.toLocaleString() + ' tokens')], ['Total Output', chalk[REPORT_STYLES.VALUE](data.totalOutput.toLocaleString() + ' tokens')], ['Estimated Cost', chalk[REPORT_STYLES.COST].bold('$' + data.cost.toFixed(4))]);
    console.log(table.toString());
    if (data.cost > 0) {
        console.log(`\n${chalk[REPORT_STYLES.SUCCESS].black.bold(" SUCCESS ")}${MESSAGES.SUCCESS_FOOTER}\n`);
    }
    else {
        console.log(`\n${chalk[REPORT_STYLES.INFO].black.bold(" INFO ")}${MESSAGES.EMPTY_FOOTER}\n`);
    }
}
