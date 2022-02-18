const argv = require("yargs")
    .option({
        b: {
            alias: "base",
            type: "number",
            describe: "Especifica la base de la tabla de multiplicar",
            demandOption: true,
        },
        l: {
            alias: "limite",
            type: "number",
            describe: "Especifica el límite del multiplicador",
            default: 10,
        },
        m: {
            alias: "mostrar",
            type: "boolean",
            describe: "Muestra la tabla de multiplicar en consola",
            default: false,
        },
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) throw "La base debe ser un número";
        return true;
    }).argv;

module.exports = argv;