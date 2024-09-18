// Untuk dapat menggunakan function di file satu.ts menulsikan syntax berikut
// Perlu di compile dulu ke JS, karena quokka tidak bisa melakukan 'export import'

// import { calculator } from "./satu";
// console.log(calculator(5,5)); 

/* 
    Jika hanya 1 function yang di export, maka penulisanna sebagai berikut
    import calculator from "./satu"; -> karena di file satu.js sudah dibuat export default calculator
    console.log(calculator(5,5)); 
*/

/* Jika lebihd dari 1 function, maka penulisannya sebagai berikut */
import { calculator, perkalian } from "./satu";

/* 
    Terkadang kita membutuhkan static data, baik di FE maupun BE. Kita juga bisa import json file. 
    INGAT! Perlu aktifkan resolveJsonModule pada tsconfig.json
*/
import data from "./data.json"

console.log(data);
console.log(calculator(5,5));
console.log(perkalian(2,3));