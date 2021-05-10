
const fs = require('fs');

const crearArchivo = (base=5)=>{

    console.log("Tabla del: ",base)

   

    for(i=1;i<=10;i++){
        salida+= `${base} x ${i} = ${base*(i)}\n`
    }

    fs.writeFileSync(`tabla-${base}.txt`,salida);
    console.log('archivo creado');
    console.log(salida);
}

// con new promise
const crearArchivoPromise = (base=5)=>{
    

    return new Promise(( resolve, reject ) => {

        console.log("Tabla del: ",base)
        let salida = '';

        
        for(i=1;i<=10;i++){
            salida+= `${base} x ${i} = ${base*(i)}\n`
        }
        fs.writeFileSync(`tabla-${base}.txt`,salida)

        resolve(`tabla-${base}.txt`)

        console.log(salida);

        
    });
}


// con async await
const crearArchivoAsyncAwait = async(base=5)=>{
    try {
        
        console.log("Tabla del: ",base)
        let salida = '';

        
        for(i=1;i<=10;i++){
            salida+= `${base} x ${i} = ${base*(i)}\n`
        }
        fs.writeFileSync(`hola/ñ/tabla-${base}.txt`,salida)


        console.log(salida);
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