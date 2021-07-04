const { numericTable } = require("../../helpers/numericTable")

describe('numericTable', () => {

  
  test('should be recive all of them params', async() => {
    const atributes = {
      numTable: 5,
      multi: 1,
      limit: 10
    }

    const result = await numericTable(atributes)
    
    expect(result).toBe(`table-${atributes.numTable}.txt`)
  })
  
  test('should be send with empty atributes', async() => {
    const result = await numericTable({})
    
    expect( result ).toBe('table-1.txt')
  })
})