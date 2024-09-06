///////////
// Function
///////////

// Function adalah sebuah reusable code / kode yang bisa digunakan berkali-kali
// let x: number = 1, y: number = 2;
// let pertambahan: number = x + y;
// console.log(pertambahan);

// code dibawah tidak efektif karena harus selalu menulis code yang sama, maka digunakan function
// x = 2,
// y = 3;
// pertambahan = x + y;
// console.log(pertambahan); 

function pertambahan (x: number, y: number) {
    console.log(x);
    console.log(y);
    return x + y; // Harus selalu menggunakan return

} ;

// JS / Typescript dapat membaca function dari bawah ke atas.
console.log(pertambahan(1,3));
console.log(pertambahan(5,6));

// Argument pada function bisa lebih dari 2
function pembagian (x: number, y: number, z:number) {
    return x / y /z
}


function pangkat (nilai: number, jumlah: number){
    let nilaiAwal = nilai;
    for (let i = 1; i < jumlah; i++){
        nilai *= nilaiAwal;
    }
    return nilai;
}
console.log(pangkat(2,3))

/* 
    'Return' hanya bisa untuk satu Function dan diletakkan dibawah.
    Kecuali jika kita menggunakan Logic Statement di dalamnya
*/

function matematika (operasi: string, x: number, y: number){
    if (operasi === 'pertambahan') {
        return x + y;
    } else if (operasi === 'pembagian') {
        return x / y;
    } else {
        return 'masukkan operasi matematika yang benar';
    }
}

console.log(matematika('pembagian', 4, 2));

// Function juga bisa mengembalikan nilai boolean
function cekString (x :any) {
    return typeof x === 'string' ? true : false;
}
console.log(cekString(1));
console.log(cekString('1'));

/* 
    function - function diatas adalah function declaration. Yaitu function yang memiliki nama.
    Ada juga yang disebut dengan "function expression / anonymous", yaitu function yang tidak mempunyai nama. 
    Tetapi, "Function Expression" harus ditulis di dalam variabel.
*/
const menyapa = function (nama: string) {
    const date = new Date;
    let message: string;
    
    if (date.getHours() <= 10) {
        message = 'Selamat Pagi';
    } else if (date.getHours() > 10 && date.getHours() <= 15){
        message = 'Selamat Siang';
    } else if (date.getHours() > 15 && date.getHours() <= 19) {
        message = 'Selamat Sore';
    } else {
        message = 'Selamat Malam';
    }

    const sapa: string = `${message} ${nama}`;
    return sapa;
}
console.log(menyapa('David'));

/* 
    Perbedaaan function declaration dan function expression adalah kita tidak bisa menggunakan function expression 
    sebelum dia dibuat. Karena function expression membutuhkan variabel untuk dapat digunakan. Sedangkan JS dan TS hanya membaca
    variabel dari atas ke bawah. 
*/

/* 
    'REST PARAMETER' (...variable) pada function berfungsi untuk menyimpan semua argument yang tidak terpakai pada function
    atau tidak ada parameternya. REST PARAMETER disimpan pada tipe data array
*/
const someFunc = function (x: number, y: number, ...z:any) {
    console.log(z);
    if (z.length > 0){
        return `Parameter kelebihan`;
    } else {
        return [x, y];
    }
}
console.log(someFunc(1, 2, 3, 4, 5, 6, 7))
console.log(someFunc(1, 2));

// NESTED FUNCTION
const greetings = function (name: string){
    function sayHello(){
        return `Hello ${name}`;
    }
    
    function welcome() {
        return `Welcome to Purwadhika`;
    }
    return `${sayHello()}, ${welcome()}`;
}

console.log(greetings('Budi'));

// CLOSURE adalah Child Function akan selalu punya akses terhadap variabel yang ada di Parent Function
function closureFunc (name: string) {
    const defaultMessage: string = 'Hallo ';

    return function () {
        return defaultMessage + name;
    }
}
let closure = closureFunc('David');
console.log(closure());
// Bisa juga menuliskan sebagai berikut :
let closure2 = closureFunc('Budi')();
console.log(closure2);

/* 
    CURRYING -> Merubah parameter menjadi function
    f(x,y,z) menjadi f(x)(y)(z)
    Tapi tidak diperbolehkan pada TS, hanya bisa digunakan di JS
    
    Note : Code di PPT salah
*/ 

// function multiply(x: number, y:number) {
//     return x * y;
// }
// console.log(multiply(3, 4));

function multiplier (x: number) {
    return function (y: number) {
        return x * y
    }
}

const mul3 = multiplier(3);
const mul4 = multiplier(4);
console.log(mul3(3));
console.log(mul4(5000));
console.log(mul4(20000));

/* 
    RECURSIVE FUNCTION Adalah looping pada function yang memanggil dirinya sendiri]
    sampai condition tidak terpenuhi
*/


/* 
    fromNumber: number =3 merupakan default Value. Maksudnya adalah jika kita tidak memberikan argumen, valuenya akan menjadi 3.
    Jika kita memberikan argumen, value akan mengikuti input kita
*/
function countDown (fromNumber: number =3) {
    console.log(fromNumber);
    
    const nextNumber: number = fromNumber - 1;
    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}
console.log(countDown(5));

// SHORTHAND FUNCTION EXPRESSION
// Disebut juga Arrow Function karena menggunakan '=>'
const greet = (name: string) => `Hallo ${name}`; //Tanpa Return
// Jika ingin menggunakan return, maka harus menggunakan kurung kurawal {}
const welcome = (nama: string) => {
    return `Hallo ${nama}`;
}
console.log(greet('Harish'));
console.log(welcome('Harish'));