const argv = require('yargs')

module.exports = argv.options({
  'nt': {
    alias: 'numTable',
    type: 'number',
    describe: 'Numero de la tabla',
    demandOption: true,
  },
  'l': {
    alias: 'limit',
    type: 'number',
    demandOption: true,
    default: 10,
    describe: 'Limite de la tabla'
  },
  'sh': {
    alias: 'show',
    type: 'boolean',
    describe: 'Mostrar la tabla en consola',
    demandOption: true,
    default: false
  }

})
