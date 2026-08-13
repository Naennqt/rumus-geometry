const prompt = require("prompt-sync")({ sigint: true });

console.log('==============================');
console.log('     KALKULATOR TRAPESIUM     ');
console.log('==============================');

let a = Number(prompt('Masukkan sisi sejajar atas (a) : '));
let b = Number(prompt('Masukkan sisi sejajar bawah (b): '));
let t = Number(prompt('Masukkan tinggi trapesium (t)  : '));

let c = Number(prompt('Masukkan panjang sisi miring c  : '));
let d = Number(prompt('Masukkan panjang sisi miring d  : '));

let luas = 0.5 * (a + b) * t;
let keliling = a + b + c + d;

console.log('==============================');
console.log(`Luas     : ${luas} cm2`);
console.log(`Keliling : ${keliling} cm`);
