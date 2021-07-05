require('colors')

const handleShowTable = ({ numTable, multi }) => {
  console.log(`${numTable} ${'x'.blue} ${multi} ${'='.blue} ${numTable * multi}`)
}

module.exports = {
  handleShowTable
}