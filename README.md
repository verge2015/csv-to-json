# csv-to-json

csv-to-json is NodeJS for converting csv file to json file.

## Version of npm and NodeJS
```bash
 NodeJS v14.19.1
 npm 6.14.16
```

## Checking your version of npm and Node.js
```bash
 node -v
 npm -v
```

## Packages
```bash
 fs
 readline
 jsbarcode
 canvas
```

## Installation
```bash
 npm i excel-as-json2
```

## Usage
```bash
 node index.js
```

## Source Code
```javascript
const convertExcel = require('excel-as-json2').processFile

//Set Source File, Output File
convertExcel("./resources/csv-to-json.csv", './output/csv-to-json.json')
console.log("File Written")
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
