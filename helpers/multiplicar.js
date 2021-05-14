const fs = require('fs');
const colors = require('colors');


const crearArchivo = (base = 5) => {

    console.log('Tabla del: '.green, base)



    for (i = 1; i <= 10; i++) {
        salida += `${base} x ${i} = ${base*(i)}\n`
    }

    fs.writeFileSync(`tabla-${base}.txt`, salida);
    console.log('archivo creado');
    console.log(salida);
}

// con new promise
const crearArchivoPromise = (base = 5) => {


    return new Promise((resolve, reject) => {

        console.log("Tabla del: ", base)
        let salida = '';


        for (i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base*(i)}\n`
        }
        fs.writeFileSync(`tabla-${base}.txt`, salida)

        resolve(`tabla-${base}.txt`)

        console.log(salida);


    });
}


// con async await
const crearArchivoAsyncAwait = async(base = 5, listar, hasta) => {
    try {

        console.log("Tabla del: ".green, colors.green(base))
        let salida = '';
        let consola = '';


        for (i = 1; i <= hasta; i++) {
            salida += `${base} ${'x'} ${i} ${'='} ${base*(i)}\n`
            consola += `${base} ${'x'.green} ${i} ${'='.yellow} ${base*(i)}\n`

        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

        if (listar) {
            console.log(consola);

        }


        return `tabla-${base}.txt`;

    } catch (error) {
        console.log(`Errormio ${error}`)
        throw error;

    }



}

module.exports = {
    crearArchivo,
    crearArchivoPromise,
    crearArchivoAsyncAwait
}