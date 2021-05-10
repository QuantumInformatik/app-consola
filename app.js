
const fs = require('fs');

const base = 3;
console.clear()
console.log("Tabla del: "+base)

let salida = '';

for(i=1;i<=10;i++){
    salida+= `${base} x ${i} = ${base*(i)}\n`
}

fs.writeFile(`tabla-${base}.txt`,salida, (err)=>{
    if(err) throw err;
    console.log('archivo creado')
})

console.log(salida)






