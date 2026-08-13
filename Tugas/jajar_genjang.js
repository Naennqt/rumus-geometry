const prompt = require("prompt-sync")({ sigint: true });

console.log("===============================");
console.log("    KALKULATOR JAJAR GENJANG   ");
console.log("===============================");

let alas = Number(prompt("Masukkan Alas (cm): "));
let tinggi = Number(prompt("Masukkan Tinggi (cm): "));
let sisiMiring = Number(prompt("Masukkan Sisi Miring (cm): "));

let luas = alas * tinggi;
let keliling = 2 * (alas + sisiMiring);

console.log("-------------------------------");
console.log(`Luas     : ${luas} cm²`);
console.log(`Keliling : ${keliling} cm`);
