const prompt = require("prompt-sync")({ sigint: true });
console.log("------------------------------")
console.log("KALKULATOR BELAH KETUPAT")
console.log("------------------------------")

let d1 = Number(prompt("Masukkan Panjang Diagonal 1 :"));
let d2 = Number(prompt("Masukkan Panjang Diagonal 2 :"));
let s = Number(prompt("Masukkan Sisi       :"));

let Luas = 0.5 * d1* d2
let Keliling = 4 * s

console.log(`Luas         : ${Luas} cm²`);
console.log(`Keliling     : ${Keliling} cm²`);
