// Array and Function
// Di awal kita menyimpan value dengan 1 variabel sepert:
let sepatu = 'Adidas';
let sepatu2 = 'Nikee';

// Daripada kita menulskan satu persatu variabel untuk satu value yang sama, kita bisa menggunakan Array.
// Array adalah variabel NON-Primitiv

let listSepatu: string[] = ["Adidas", "Nikee", "Puma"];
let listAngka: number[] = [1, 5, 10];
/* 
    Note :
    Penggunaan Array, lebih baik hanya untuk 1 tipe data.
    Walaupun di JS bisa lebih dari 1 tipe data.

    Value pada index dihitung berdasarkan index. Index array dimulai dari 0. Contoh:
    listSeptu = ["Adidas", "Nikee", "Puma"];
    index ke - 0 -> "Adidas"
    index ke - 1 -> "Nikee"
    index ke - 2 -> "Puma"
*/
// Berikut contoh print Array, 0 adalah index Array
console.log(listSepatu[0]);

// Untuk mengetahui panjang Array:
console.log(listSepatu.length);

for (let i: number = 0; i < listSepatu.length; i++) {
    console.log(listSepatu[i]);
}

// Array di dalam Array
let listArray: number[][] = [
    [1, 2], 
    [3, 4], 
    [5, 6],
];

for (let i = 0; i < listArray.length; i++){
    for (let j = 0; j <listArray[i].length; j++){
        console.log(listArray[i][j])
    }
}

/* 
    Built in Method Array yang paling sering digunakan
    array.pop() -> mengeluarkan dan menghapus data terakhir pada Array.
    array.push(value) -> memasukkan value pada akhir Array
    array.shift() -> mengeluarkan dan menghapus data pertama / index ke-0 pada Array
    array.unshift(value) -> memasukkan value pada data pertama / index ke-0 Array
    array.reverse() -> merubah urutan value pada Array. value index ke-0 menjadi index terakhir, begitu juga sebaliknya
*/ 

console.log(listSepatu.pop());
console.log(listSepatu.pop());
/* 
    Kenapa pada 'console.log(listSepatu.pop());' mempunyai nilai yang berbeda?
    Karena pada 'console.log(listSepatu.pop());' pertama, value 'Puma' dihapus dari Array,
    sehingga value 'Nikee', menjadi value yang terakhir. Begitu juga untuk 'console.log(listSepatu.pop());' kedua.
    Bisa dilihat pada console.log dibawah ini.

*/
console.log(listSepatu);

// Built in Method array.push()
listSepatu.push('Reebok');
console.log(listSepatu);
listSepatu.push('Converse');
console.log(listSepatu);

// array.shift()
listSepatu.shift(); // Menghapus value 'Adidas' yang ada pada index ke - 0
console.log(listSepatu);

// array.unshift(value)
listSepatu.unshift('Adidas');
console.log(listSepatu);

// array.reverse()
listSepatu.reverse();
console.log(listSepatu);

// array.concate(array2);
let _arr1 = [1, 2];
let _arr2 = [3, 4];
console.log(_arr1.concat(_arr2));

// For ... of Loop
// Bertujuan untuk menampilkan value pada Array tanpa menggunakan index
let _listBuah = ['Jeruk', 'Apel', 'Mangga'];
for (let buah of _listBuah){
    console.log(buah); // Isi pada variabel 'buah' akan terus direplace dengan value pada '_listBuah'
}

