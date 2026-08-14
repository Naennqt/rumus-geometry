const prompt = require("prompt-sync")({ sigint: true });
console.log('==================')
console.log("KALKULATOR JURING LINGKARAN");
console.log("==================");


let a = Number(prompt("Masukan sudut pusat (°) : "))
let Panjang_busur = Number(prompt("Masukan panjang busur  : "))
let r = Number(prompt("Masukan jari jari  : "))
let PHI = 3.14

let luas = a / 360 * PHI * r ** 2
let keliling = (2 * r) + Panjang_busur

console.log(`
Luas     : ${luas} cm2
Keliling : ${keliling} cm`)