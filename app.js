const fs = require('fs')

let tableValues = []

const numericTable = ({ numTable = 1, multi = 1, limit = 10 } = {}) => {

  if (multi === limit + 1) 
    return fs.writeFile(`table-${numTable}.txt`, tableValues.join('\n'), (err) => {
      if (err) throw new Error(err)
      console.log('Correct Save')
    })

  console.log(`${numTable} x ${multi} = ${numTable * multi}`)
  tableValues = [ ...tableValues, `${numTable} x ${multi} = ${numTable * multi}`]
  
  return numericTable({
    numTable,
    multi: multi + 1,
    limit
  })
}

numericTable({
  numTable: 2,
  limit: 10
})