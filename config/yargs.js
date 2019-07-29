const crear = {
    descripcion: {
        alias: 'd',
        demand: true
    }
}

const listar = {
    descripcion: {
        alias: 'd',
        demand: true
    },
    completado: {
        alias: 'c',
        demand: true
    }
}

const borrar = {
    descripcion: {
        alias: 'd',
        demand: true
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', crear)
    .command('actualizar', 'Actualiza el estado completado de una tarea', listar)
    .command('borrar', 'Borrar una tarea por hacer', borrar)
    .help()
    .argv;


module.exports = {
    argv
}