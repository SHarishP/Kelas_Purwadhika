/* 
    Penggunaan MODUL 
    Memungkinkan kita untuk menggunakan function pada file yang berbeda

    Contoh, kita akan menggunakan file satu.ts dan dua .ts
*/
// Untuk dapat menggunakan function dibawah pada file yang lain (ex: dua.ts) perlu menambahkan 'export'
// export function calculator (a: number, b: number) {
//     return a+b;
// }

/* jika kita hanya mempunyai 1 function yang ingin kita export, kita dapat menuliskan seperti dibawah
    function calculator (a: number, b: number) {
    return a+b;
    }
    export default calculator   
*/

/* Jika kita mempunyai lebih dari 1 function yang akan kita export dapat menuliskan sebagai berikut */
function calculator (a: number, b: number) {
    return a+b;
}
function perkalian (a: number, b: number) {
    return a*b;
}
export {calculator, perkalian};

