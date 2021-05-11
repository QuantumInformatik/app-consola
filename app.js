/*   githut para promesas, decosntructores, callbacks y otros 
https://github.com/Klerith/node-intro-javascript/blob/main/promesas.js
*/

const { crearArchivoPromise, crearArchivoAsyncAwait } = require('./helpers/multiplicar')
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número';
        }
        return true;
    })
    .argv;

// const base = 5;
console.clear()

console.log(argv)



crearArchivoAsyncAwait(argv.b, argv.l)
    .then(msg => {
        console.log(msg + " creado")
    })
    .catch(error => {
        console.log(error)
    });