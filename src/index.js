const exportUsersToExcel = require("./exportService");
const color = require("colors");

let listTable = (base) => {
  console.log("======================================================".blue);
  console.log(
    `-------------- tabla de factoriales ${base} ----------------`.blue
  );
  console.log("======================================================".blue);
  for (let i = 0; i < base; i++) {
    let resultado = 1;
    let arr = [];
    for (let j = 1; j <= i + 1; j++) {
      resultado *= j;
      arr.push(j);
      arr.sort((prev, next) => {
        return next - prev;
      });
    }
    console.log(`${i + 1}! =  ${arr.join("*")} = ${resultado}`);
  }
};

let createExcelFile = (base) => {
  //let base = 4;
  for (let i = 0; i < base; i++) {
    let resultado = 1;
    let arr = [];
    let factorials = [];
    for (let j = 1; j <= i + 1; j++) {
      resultado *= j;
      arr.push(j);
      arr.sort((prev, next) => {
        return next - prev;
      });
      factorials.push({
        factorial: `${j}`,
        number: `${arr.join("*")}`,
        result: `${resultado}`,
      });
    }

    const workSheetColumnName = ["Factorials", "Numbers", "Result"];
    const workSheetName = `Factorial-${base}`;
    const filePath = `../excelfile/Factorial-${base}.xlsx`;

    exportUsersToExcel(
      factorials,
      workSheetColumnName,
      workSheetName,
      filePath
    );
  }
};
module.exports = {
  listTable,
  createExcelFile,
};
