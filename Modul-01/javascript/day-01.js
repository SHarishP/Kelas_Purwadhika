console.log("Hello World");
console.log("Hallo Purwadhika");
console.log("Let's learn javascript")

let kotaknama;
kotaknama = "budi";

let kotaknama02 = "budi"
console.log(kotaknama);
console.log(kotaknama02);

var buah = "apel";
let sepatu = "adidas";


console.log(buah);
console.log(sepatu);


/* penggunaan var sudah obsolete / sudah tidak digunakan lagi. Karena apabila kita mengetik
    var buah, akan menimpa variabel yang ada sebelumnya
 */
var buah = "jeruk";
console.log(buah);

buah = "semangka";
console.log(buah);

/* penggunaan let digunakan untuk mengupdate value pada variabel, dan variabel hanya dapat digunakan satu kali */
sepatu = "nikee";
console.log(sepatu);
// penggunaan let tidak bisa untuk variabel yang sama
// let sepatu = "converse"; // akan memunculkan error!

// const digunakan apabila kita mengetahui bahwa value tidak dapat diubah.
const mobil = "BMW 5";
console.log(mobil);
// mobil = "audi"; // akan muncul error : assignment to constant variable

console.log("saya mempunyai " + buah + ", "  + sepatu + ", dan " + mobil);

// Penamaan variabel case sensitive
const angka = 1;
const Angka = 2;
console.log("Saya mempunyai variabel Const : " + angka + " dan " + Angka);

// tipe data pada java script
let _string = "Text";
let _number = 1;
let _boolean = true;
let _null = null //Ketidakadaan sesuatu secara sengaja
let _undefined;

// untuk memunculkan type data dari sebuah value
console.log(typeof _string);
console.log(typeof _number);
console.log(typeof _boolean);
console.log(typeof _null);
console.log(typeof _undefined);





