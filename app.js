const { numericTable } = require('./helpers/numericTable')

numericTable({ numTable: 9, limit: 10 })
  .then(fileName => console.log(`${fileName} created`))
  .catch(console.error)