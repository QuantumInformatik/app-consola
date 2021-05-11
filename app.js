/*   githut para promesas, decosntructores, callbacks y otros 
https://github.com/Klerith/node-intro-javascript/blob/main/promesas.js
*/

const { crearArchivoPromise, crearArchivoAsyncAwait } = require('./helpers/multiplicar')
const argv = require('yargs').argv

// const base = 5;
console.clear()

console.log(process.argv);
console.log(argv)

console.log('base: yargs ', argv.base)



// crearArchivoAsyncAwait(baseArg)
//     .then(msg =>{
//         console.log(msg+" creado")
//     })
//     .catch(error => {
//         console.log(error)
//     });