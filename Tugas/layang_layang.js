const prompt = require("prompt-sync")({ sigint: true });
console.log("------------------------------")
console.log("KALKULATOR LAYANG LAYANG")
console.log("------------------------------")

let d1 = Number(prompt("Masukkan Panjang Diagonal(cm) 1 :"));
let d2 = Number(prompt("Masukkan Panjang Diagonal(cm) 2 :"));
let s1 = Number(prompt("Masukkan Sisi(cm) 1 :"));
let s2 = Number (prompt("Masukkan Sisi(cm) 2 :"));

let Luas = 1/2 * d1* d2
let Keliling = 2 * (s1 + s2)

console.log(`Luas     : ${Luas} cm²`);
console.log(`Keliling     : ${Keliling} cm²`);
