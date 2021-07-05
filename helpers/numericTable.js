const fs = require('fs')
const { handleShowTable } = require('./handleShowTable')

let tableValues = []

const numericTable = async({ numTable = 1, multi = 1, limit = 10, show = false } = {}) => {

  try {

    if (multi === limit + 1) {
      fs.writeFileSync(`./public/table-${numTable}.txt`, tableValues.join('\n'))
      return `table-${numTable}.txt`
    }
  
    show && handleShowTable({ numTable, multi })

    tableValues = [ ...tableValues, `${numTable} x ${multi} = ${numTable * multi}`]
    
    return numericTable({
      numTable,
      multi: multi + 1,
      limit,
      show
    })

  } catch (err) {
    throw err
  }
  
}

module.exports = {
  numericTable
}