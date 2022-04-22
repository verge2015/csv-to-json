const convertExcel = require('excel-as-json2').processFile

//Set Source File, Output File
convertExcel("./resources/csv-to-json.csv", './output/csv-to-json.json')
console.log("File Written")