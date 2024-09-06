/////////////////////////////////////////
// Excersice 3 by Setiawan Harish Pradana
/////////////////////////////////////////

/* 
    Tugas 1
    Buat kode untuk menampilkan perkalian dari suatu bilangan integer
*/
let numb: number = 9;
let limit: number = 10;
for (let i:number = 1; i <= limit; i++) {
    console.log(`${numb} x ${i} = ${numb*i}`);
}

/* 
    Tugas 2
    Buat Kode untuk mengetahui apakah suatu kata adalah palindrome atau bukan
    palindrome adalah suatu kata yang dapat dibaca dari depan ke belakang, begitu juga sebaliknya. 
    Dengan kata lain, karakter pertama dan karakter terakhir merupakan karakter yang sama.
*/
// Buat variabel untuk menyimpan string, dan menangkap keterangan
let kata: string = 'madam';
let keterangan;
// Buat variabel untuk menyimpan index terakhir dari sebuah string
// Buat forloop dimana i merupakan index string
for (let i = 0; i <= (kata.length / 2); i++) {
    // Buat logic function untuk memeriksa apakah index ke i === index ke j, jika tidak berarti bukan polindrome
    if (kata.charAt(i) !== kata.charAt(kata.length - 1 - i)) {
        keterangan = 'Bukan merupakan Polindrome';
        console.log(kata.charAt(i));
        console.log(kata.charAt(kata.length - 1 - i));
        break;
    }
    else {
        console.log(kata.charAt(i));
        console.log(kata.charAt(kata.length - 1 - i));
        keterangan = 'Merupakan Polindrome';
    }
}
console.log(keterangan);

/*  
    Tugas 3
    Convert Centimeter to Kilometer
*/
// Buat variable untuk menerima centimeter
function kmConverter (jarak:number, satuan:string) {
    let converter: number;
    if (satuan === 'hm') {
        converter = jarak / 10;
        return console.log (`${jarak} ${satuan} sama dengan ${converter} km`);
    } else if (satuan === 'dam') {
        converter = jarak / 100;
        return console.log (`${jarak} ${satuan} sama dengan ${converter} km`)
    } else if (satuan === 'm') {
        converter = jarak / 1000;
        return console.log (`${jarak} ${satuan} sama dengan ${converter} km`)
    } else if (satuan === 'dm') {
        converter = jarak / 10000;
        return console.log (`${jarak} ${satuan} sama dengan ${converter} km`)
    } else if (satuan === 'cm') {
        converter = jarak / 100000;
        return console.log (`${jarak} ${satuan} sama dengan ${converter} km`)
    } else if (satuan === 'mm') {
        converter = jarak / 1000000
        return console.log (`${jarak} ${satuan} sama dengan ${converter} km`)
    } else {
        return console.log (`wrong input`);
    }
}
kmConverter(1000000, 'mm');

/* 
    Tugas 4 
    Membuat code untuk memformat number menjadi currency (IDR) 
*/
    // Buat variabel untuk menyimpan number
    const _number: number = 1000;
    // Buat variabel baru untuk menangkap konversi currency dengan menggunakan method .toLocaleString
    let numberToCurrency = _number.toLocaleString('id-ID',{style:'currency', currency:'IDR'});
    console.log(numberToCurrency);
        /* 
            NOTE :
            Method .toLocaleString berfungsi untuk merubah number menjadi string dengan format masing-masing negara
            Cek this link for reference :
            https://www.w3schools.com/jsref/jsref_tolocalestring_number.asp
        */
    // Cara 2
    numberToCurrency = new Intl.NumberFormat('in-ID', {
        style: 'currency',
        currency: 'IDR',
    }).format(_number);
    console.log(numberToCurrency)
        /* 
            NOTE :
            Intl.NumberFormat merupakan CLASS untuk mengenable language-sensitive number formatting
        */

/* 
    TUGAS 5
    Buat kode untuk menghapus kata dari search string
*/
// Buat variabel untuk menampung string
let word: string = 'Hello World';
// Buat variabel untuk menampung search string
let searchStr: string = 'ell';
// Mengecek apakah Search String ada di dalam kalimat
let resultSeach: boolean = word.includes(searchStr);
console.log(resultSeach);
// buat variabel untuk menerima replace character
let replacedChar: string;
// Buat Logic Statement untuk mengganti character yang di search dengan empty character
if (resultSeach == true) {
    replacedChar = word.replace(searchStr, '');
    console.log (`${word} = ${replacedChar}`)
} else {
    console.log(`Wrong input`);
}

/*
    TUGAS 6
    Membuat huruf pertama pada kata menjadi huruf besar
*/
let kalimat: string = 'hello world';
let splitKalimat: string[] = kalimat.split(' ');
console.log(splitKalimat);

for (let i: number = 0; i <= splitKalimat.length -1; i++) {
    splitKalimat[i] = splitKalimat[i][0].toUpperCase() + splitKalimat[i].substr(1);
}
console.log(splitKalimat.join(' '));