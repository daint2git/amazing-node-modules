const parseArgs = require("minimist");

const argv = parseArgs(process.argv.slice(2));

console.log(argv);
