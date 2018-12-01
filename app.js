const argv = require('./config/yargs').argv;
var colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no identificado');
        break;
}

// console.log('Base ', argv.base);
// console.log('Limite ', argv.limite);
// console.log(argv.$0);

// let argv = process.argv;
// let parametro = argv[2];
// let num = parametro.split('=')[1];