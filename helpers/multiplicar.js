const fs = require("fs");
const colors = require("colors");

const crearArchivoTbl = async(base, limite, mostrar) => {

    try {
        let salida = "";
        let consola = "";

        for (let i = 1; i <= limite; i++) {
            salida += `${base} x ${i < 10 ? "0" + i : i} = ${ base * i < 10 ? "0" + base * i : base * i }\n`;
            consola += `${base} x ${i < 10 ? "0" + i : i} = ${ base * i < 10 ? "0" + base * i : base * i }\n`.america;
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        /* fs.writeFile(`base-${base}.txt`, salida, (err) => { if (err) throw err }) */

        if (mostrar) {
            console.log(`${colors.rainbow("============\n")}${colors.bgRed.bold.white("TABLA DEL " + base)}\n${colors.rainbow("============")}\n`);
            console.log(consola);
        }

        return `tabla-${base}.txt`.green;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivoTbl
}