const prompt = require("prompt-sync")({ sigint: true });

console.log('==============================');
console.log('       KALKULATOR KUBUS       ');
console.log('==============================');

let s = Number(prompt("Sisi : "));

let volume = s * s * s;
let luas_permukaan = 6 * s * s

console.log(`
Volume          : ${volume} cm³
Luas Permukaan  : ${luas_permukaan} cm²
`);