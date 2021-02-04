#!/usr/bin/env node
const { Command } = require("commander");
const chalk = require("chalk");
const envinfo = require("envinfo");
const program = new Command("name1");

let projectName;

program
  .version("1.0.0")
  .arguments("<project-directory>")
  .usage(`${chalk.green("<project-directory>")} [options]`)
  .option("--info", "print environment debug info")
  .action((name) => {
    projectName = name;
  })
  .allowUnknownOption()
  .on("--help", () => {
    console.log(`    Only ${chalk.green("<project-directory>")} is required.`);
  })
  .parse(process.argv);

const options = program.opts();

if (options.debug) console.log(options);
if (options.small) console.log("- small pizza size");
if (options.pizzaType) console.log(`- ${options.pizzaType}`);

if (options.info) {
  console.log(chalk.bold("\nEnvironment Info:"));
  console.log(`  running from ${__dirname}`);

  return envinfo
    .run(
      {
        System: ["OS", "CPU"],
        Binaries: ["Node", "npm", "Yarn"],
        Browsers: ["Chrome", "Edge", "Firefox", "Safari"],
      },
      {
        duplicates: true,
        showNotFound: true,
      },
    )
    .then(console.log);
}
