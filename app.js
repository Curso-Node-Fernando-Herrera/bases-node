const argv = require('yargs').argv
require('./options/yargOptions').argv

const { numericTable } = require('./helpers/numericTable')

numericTable({ numTable: argv.numTable, limit: argv.limit, show: argv.show })
  .then(fileName => console.log(`${fileName} created`))
  .catch(console.error)