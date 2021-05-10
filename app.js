
const {crearArchivoPromise, crearArchivoAsyncAwait} = require('./helpers/multiplicar')

const base = 5;
console.clear()

crearArchivoAsyncAwait(base)
    .then(msg =>{
        console.log(msg+" creado")
    })
    .catch(error => {
        console.log(error)
    });







