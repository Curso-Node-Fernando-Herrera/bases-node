
const numericTable = ({ numTable = 1, multi = 1, limit = 10 } = {}) => {

  if (multi === limit + 1) return
  console.log(`${numTable} x ${multi} = ${numTable * multi}`)
  
  return numericTable({
    numTable,
    multi: multi + 1,
    limit
  })
}

numericTable({
  numTable: 5,
  limit: 10
})