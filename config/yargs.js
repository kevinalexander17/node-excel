const options = {
  base: {
    demand: true,
    alias: "b",
  },
};

const argv = require("yargs")
  .command("list", "Print to the console a factorial table", options)
  .command("create", "Create a factorial table as an excel file", options)
  .help().argv;

module.exports = {
  argv,
};
