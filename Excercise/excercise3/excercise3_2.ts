//////////////////////////////////////////
/* TUGAS 3_2 by Setiawan Harish Pradana */
//////////////////////////////////////////

/* 
    Tugas 1 
    Buat code untuk menukar besar kecilnya karakter pada string
    'The QuiCk BrOwN Fox'
    Expected Result = 'tHE qUIcK bRoWn fOX'
*/
// Buat variabel untuk menerima String
let words: string = 'The QuiCk BrOwN Fox'
// Buat variabel menerima Array dari hasil split words
let splitWord: string[] = words.split("");
console.log(splitWord);
/* 
    1. Dengan menggunakan looping, cek setiap value pada array 'splitWord' apakah karakternya huruf besar / kecil
    2. Gunakan logic, jika :
        a. value = huruf besar -> jadikan kecil
        b. value = huruf kecil -> jadikan besar
*/
for (let i=0; i < splitWord.length; i++) {
    if(splitWord[i] === splitWord[i].toUpperCase()) {
        splitWord[i] = splitWord[i].toLowerCase();
    } else {
        splitWord[i] = splitWord[i].toUpperCase();
    }
}
words = splitWord.join("");
console.log(words)

/* 
    Tugas 2
    Buat code untuk mencari nilai terbesar dari 2 bilangan integer
*/
// Buat variabel untuk menerima bilangan
let bil1:number = 42, bil2:number = 27;
// Gunakan logic statement untuk membandingkan 2 bilangan tersebut
if (bil1 === bil2 ) {
    console.log(`Bilangan 1 dan Bilangan 2 mempunyai nilai yang sama`);
} else if (bil1 > bil2) {
    console.log(`Bilangan 1 lebih besar daripada bilanagn 2`);
} else if (bil1 < bil2) {
    console.log(`Bilangan 2 lebih besar daripada bilanagn 1`);
};

/* 
    Tugas 3
    Buat conditional statement untuk mensortir 3 bilangan secara ascending
*/
// 1. Buat variabel untuk menyimpan integer
let num1: number = 42, num2: number = 27, num3: number = 18;
// 2. Buat conditional statement yang mensort bilangan integer
if(num1 > num2 && num1 > num3 && num2 > num3) {
    console.log(`${num1}, ${num2}, ${num3}`);
} else if (num1 < num2 && num1 < num3 && num2 > num3) {
    console.log(`${num3}, ${num2}, ${num1}`);
} else if (num1 > num2 && num1 > num3 && num2 < num3){
    console.log(`${num1}, ${num3}, ${num2}`);
} else if (num1 > num2 && num1 < num3 && num2 < num3){
    console.log(`${num3}, ${num1}, ${num2}`);
} else if (num1 < num2 && num1 < num3 && num2 < num3){
    console.log(`${num3}, ${num2}, ${num1}`);
} else if (num1 < num2 && num1 > num3 && num2 > num3){
    console.log(`${num2}, ${num1}, ${num3}`);
}

/* 
    Tugas 3
    Buat code untuk menunjukkan jika:
    1. Jika input adalah string, munculkan 1;
    2. Jika input adalah number munculkan 2;
    3. jika input adalah tipe data yang lain, munculkan 3;
*/

// Buat variabel untuk menerima input bernama userInput :
let userInput = true;
console.log(typeof(userInput))
// Buat Conditional Statement untuk mengecek tipe data dari var 'input' dan mengeluarkan console.log
if (typeof(userInput) == 'string'){
    console.log(1);
} else if (typeof(userInput) == 'number'){
    console.log(2);
} else {
    console.log(3);
}

/* 
    Tugas 4
    Buat code untuk merubah semua karakter a menjadi * dari kalimat ‘An apple a day keeps the doctor away'
*/
// Buat variabel bernama 'words2' untuk menyimpan kalimat
let word2: string = 'An apple a day keeps the doctor away';
// Buat variabel bernama 'charReplace' untuk menyimpan karakter yang akan mereplace
let charReplace: string = '*';

// Berhubung pada JS dan TYPESCRIPT merupakan case senstitive, jadikan 'word2' ke LOWERCASE
// Buat variabel 'resultReplace' untuk menyimpan string hasil replace karakter, replace karakter 'a' gunakan \g (global)
let resultReplace = word2.toLowerCase().replace(/a/g,charReplace);
console.log(resultReplace);
