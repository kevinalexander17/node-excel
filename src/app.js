const argv = require("../config/yargs").argv;
const { createExcelFile, listTable } = require("./index");

let command = argv._[0];
switch (command) {
  case "list":
    //do something
    listTable(argv.base);
    break;
  case "create":
    //do something

    if (!Number(argv.base)) {
      console.log(`This value ${base} typed is not a number`);
      return;
    } else {
      createExcelFile(argv.base);
      console.log(
        `Excel file, factorial-${argv.base}, was created successfully!`
      );
    }

    createExcelFile(argv.base);
    break;
  default:
    console.log("This command is not recognized");
}
