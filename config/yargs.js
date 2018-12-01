const opc = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        demand: true,
        alias: 'l',

    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar del numero que digites', opc)
    .command('crear', 'Crea en un archivo de texto una de las tablas de multiplicar', opc)
    .help()
    .argv;

module.exports = {
    argv
}