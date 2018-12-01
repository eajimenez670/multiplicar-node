const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log('=================='.green);
    console.log(`Tabla del ${base}`.green);
    console.log('=================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let crearArchivo = (num, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(num)) {
            reject(`El dato ${num} no es un numero`);
            return;
        }

        let res = '';

        for (let i = 1; i <= limite; i++) {
            res += `${num} x ${i} = ${num*i}\n`;
        }

        fs.writeFile(`tablas/tabla-del-${num}-al-${limite}.txt`, res, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-de-${num}-al-${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}