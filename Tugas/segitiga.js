const prompt = require("prompt-sync")({ sigint: true });

console.log('=============================');
console.log('    KALKULATOR SEGITIGA      ');
console.log('=============================');

let alas = Number(prompt("Alas    : "));
let tinggi = Number(prompt("Tinggi  : "));
let sisiA = Number(prompt("Sisi A  : "));
let sisiB = Number(prompt("Sisi B  : "));
let sisiC = Number(prompt("Sisi C  : "));

let luas = 0.5 * alas * tinggi;
let keliling = sisiA + sisiB + sisiC;

console.log('-----------------------------');
console.log(`Luas     : ${luas} cm²`);
console.log(`Keliling : ${keliling} cm`);
