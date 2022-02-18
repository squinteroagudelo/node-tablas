const { crearArchivoTbl } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

// console.log(process.argv);
console.log(argv);
console.log(argv.base);
console.log(argv.b);

/* const [, , base = 'base=4'] = process.argv;
const [, tabla = 12] = base.split('=');
console.log(tabla); */

crearArchivoTbl(argv.b, argv.l, argv.mostrar)
    .then(msg => console.log(`${msg} creado`))
    .catch(err => console.log(err));