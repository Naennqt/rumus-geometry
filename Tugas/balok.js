const prompt = require("prompt-sync")({ sigint: true });

console.log('==============================');
console.log('       KALKULATOR BALOK       ');
console.log('==============================');
let p = Number(prompt("Panjang : "));
let l = Number(prompt("Lebar   : "));
let t = Number(prompt("Tinggi  : "));
let volume = p * l * t;
let luas_permukaan = 2 * ((p * l) + (p * t) + (l * t));

console.log(`
Volume          : ${volume} cm³
Luas Permukaan  : ${luas_permukaan} cm²
`);
