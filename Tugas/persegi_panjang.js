const prompt = require("prompt-sync")({ sigint: true });
console.log('=====================')
console.log("KALKULATOR PERSEGI PANJANG");
console.log("=====================");
let p = Number(prompt("Panjang : "))
let l = Number(prompt("Lebar   : "))
let luas = p * l
let keliling = 2 * (p + l)
console.log(`
Luas     : ${luas} cm2
Keliling : ${keliling} cm`)
