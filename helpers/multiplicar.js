const fs = require('fs');


const crearArchivo = async( base = 5 , listar = false, limiteSupeior = 11) => {
   try{
        let salida = '';

        for (let i = 1; i <= limiteSupeior; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        if(listar){
            console.log('===================');
            console.log(`   Tabla del ${base}`);
            console.log('===================');
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `Tabla-${base}.txt`
   } catch(err) {
        throw err;
   }
}

module.exports = {
    crearArchivo
}