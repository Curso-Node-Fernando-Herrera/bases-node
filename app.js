const argv = require('./config/yargOptions').argv
require('colors')

const { numericTable } = require('./helpers/numericTable')

numericTable({ numTable: argv.numTable, limit: argv.limit, show: argv.show })
  .then(fileName => console.log(`\n${fileName.black.bgGreen} created!`))
  .catch(console.error)