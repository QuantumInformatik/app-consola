/*   githut para promesas, decosntructores, callbacks y otros 
https://github.com/Klerith/node-intro-javascript/blob/main/promesas.js
*/

const { crearArchivoPromise, crearArchivoAsyncAwait } = require('./helpers/multiplicar')
const argv = require('./config/yargs');

// const base = 5;
console.clear()




crearArchivoAsyncAwait(argv.b, argv.l)
    .then(msg => {
        console.log(msg + " creado")
    })
    .catch(error => {
        console.log(error)
    });