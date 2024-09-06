////////////////////////////////////////
/* EXCERCISE 4 BY SETIAWAN HARISH PRADANA */
////////////////////////////////////////

/* 
    Tugas 1
    buat function untuk membuat pattern segitiga siku-siku berdasarkan tinggi
*/
// Buat variabel 'count_' untuk menyimpan initiate number1
let count_: number = 1;
// Buat variabel 'jumBaris_'untuk menyimpan input berapa banyak baris yang akan dibuat
let jumBaris_: number=  4;
// Buat forLoop
for (let i: number = 1; i<= jumBaris_; i++) {
    // Buat variabel 'isiBaris' untuk menyimpan apa saja isi pada tiap barisnya
    let isiBaris: string = '';
    for (let j: number = 1; j <= i; j++) {
        // Tambahkan isi baris dengan 0+counter || count (jika count lebih dari 10)
        isiBaris += (count_ < 10 ? '0' + count_ : count_) + ' ';
        // Tambahkan nilai count
        count_++;
    }
    console.log(isiBaris);
};

/* 
    TUGAS 2 
    Buat function yang bisa melakukan Looping Angka berdasarkan angka yang kita berikan, dan akan mengganti
    nilai dengan 'Fizz' jika angka merupakan perkalian 3, 'Buzz' jika angka perkalian 5, dan 'FizzBuzz' jika
    angka perkalian 3 & 5 
*/
function fizzBuzzLoop (number) {
    let counter = '';
    for (let i = 1; i <= number; i++) {
        // PERLU DIINGAT, JJS atau TS membaca dari atas kebawah
        if (i % 5 == 0  && i % 3 == 0) {
            counter = 'FizzBuzz,'
        }
        else if(i % 3 == 0) {
            counter = 'Fizz,'
        }
        else if (i % 5 == 0) {
            counter = 'Buzz,'
        }
        else {
            counter = i + ',';
        }
        console.log(counter);
    }
}
fizzBuzzLoop(30);

/* 
    TUGAS 3
    Buat function untuk menghitung nilai BMI
*/
// Buat Function 'bmi' yang menerima 'berat' dan 'tinggi'
function bmi (berat:number, tinggi: number) {
    // bagi tinggi dengan 100 sehingga menjadi meter
    tinggi /= 100;
    // buat variabel 'resultBMI' untuk menyimpan rumus BMI
    const resultBMI: number = berat / Math.pow(tinggi, 2);
    // buat variabel 'pesan' dengan string kosong
    let pesan: string = '';
    // buat logic statement untuk menyimpan pesan dan kembalikan pesan
    if (resultBMI < 18.5) {
        pesan = 'less weight';
    } else if (resultBMI >= 18.5 && resultBMI <= 24.9) {
        pesan = 'Ideal';
    } else if (resultBMI >= 25.0 && resultBMI <= 29.9) {
        pesan = 'overweight';
    } else if (resultBMI >= 30.0 && resultBMI <= 39.9) {
        pesan = 'very overweight';
    } else if (resultBMI > 39.9) {
        pesan = 'obesity';
    } else {
        pesan = 'wrong input';
    }
    return pesan;
}
console.log(bmi(68, 155));

/* 
    TUGAS 4
    Buat function untuk menghilangkan semua bilangan ganjil pada array,
    dan mengembalikan array baru yang berisi bilangan genap saja
*/
// Buat variabel 'arr' untuk menyimpan array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// buat function 'evenFun' yang menerima variabel array
function evenFun (array: number[]) {
    // Buat variabel array baru untuk menyimpan array baru bilangan genap
    let evenArr: number[] = []
    array.forEach(val => {
        if(val % 2 == 0) {
            evenArr.push(val);
        }
    })
    return evenArr;
};
console.log(evenFun(arr));

/* 
    TUGAS 5
    Buat function untuk split string dan memasukkan nya ke array string
*/
let words: string = 'Hello World';
// Buat function 'splitter'
function splitter (kata: string) {
    let array: string[] = kata.split(' ');
    return array;
}
console.log(splitter(words));

