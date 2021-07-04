const fs = require('fs')

let tableValues = []

const numericTable = async({ numTable = 1, multi = 1, limit = 10 } = {}) => {

  try {

    if (multi === limit + 1) {
      fs.writeFileSync(`table-${numTable}.txt`, tableValues.join('\n'))
      return `table-${numTable}.txt`
    }
  
    console.log(`${numTable} x ${multi} = ${numTable * multi}`)
    tableValues = [ ...tableValues, `${numTable} x ${multi} = ${numTable * multi}`]
    
    return numericTable({
      numTable,
      multi: multi + 1,
      limit
    })

  } catch (err) {
    throw err
  }
  
}

module.exports = {
  numericTable
}