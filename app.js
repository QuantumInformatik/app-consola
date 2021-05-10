/*   githut para promesas, decosntructores, callbacks y otros 
https://github.com/Klerith/node-intro-javascript/blob/main/promesas.js
*/

const {crearArchivoPromise, crearArchivoAsyncAwait} = require('./helpers/multiplicar')

const base = 5;
console.clear()


const [,,arg3='base=5'] = process.argv
const [,baseArg=5] = arg3.split('=')
console.log(baseArg)



crearArchivoAsyncAwait(baseArg)
    .then(msg =>{
        console.log(msg+" creado")
    })
    .catch(error => {
        console.log(error)
    });







