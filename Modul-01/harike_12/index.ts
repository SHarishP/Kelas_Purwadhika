/* CALLBACK */

// Contoh penggunaan sebelum callback
function test (a: number, b: number) {
    return a + b
}

function tampilkan (sum: number) {
    console.log(sum);
}

// let sum =  test (5,5);
// tampilkan(sum)
// Dari code diatas, akan memanggil 2 kali function

// Contoh penggunaan setelah callback

function test2 (a: number, b: number, callback: (sum: number) => void) {
    callback (a+b);
}

/* 
    Pada function diatas terdapat 3 parameter yaitu a: number, b: number, dan function callback yang mengembalikan nilai void 
    / tidak mengembalikan apa apa 'callback: (sum: number) => void'
*/

test2 (10,50, tampilkan);

//////////////////////
/* FUNCTION SEQUNCE */
//////////////////////
/* 
    Maksud dari Function Sequence adalah javascript akan memanggil / mengeksekusi function sesuai dengan kapan dia dipanggil.
    Bukan kapan dia diassign
*/
let result: string = '';
function greet (str: string) {
    result = str;
}

// function hello is made first
function hello() {
    greet ('hallo');
}

// function arigatou is made after function hello
function arigatou () {
    greet ('arigatou');
}
// dijalankan sesuai urutan dia dipanggil;
arigatou();
hello()
console.log(result);

/* 
    Asynchronus
    Aynchronus adalah function yang dapat berjalan beriringan dengan function yang lain. 
    Berhubung kita belum menjalankan backend, maka kita dapat menggunakan Asynchronus dengan menggunakan setTimeOut
    
    Asynchronus adalah kemampuan JS untuk dapat menjalankan task kedua dan berikutnya, tanpa menunggu task pertama selesai. 
*/
console.log(1);
setTimeout(() => {
    console.log('Asynchronus')
}, 2000)
/* 
    Penggunaan setTimeout berarti JS sudah menjalankan setTimeout, tetapi dia akan memunculkan 'Asynchronus' setelah 3 detik.
    Sembari menunggu 3 detik selesai, JS menjalankan console.log(1) dan console.log(2)
*/
console.log(2);

setTimeout(massage, 3000);
function massage () {
    console.log('Asynchronus one');
};
for(let i = 0; i<10; i++) {
    console.log(i)
;}

setTimeout (() => {
    console.log('Asynchronus two');
}, 6000);

/////////////
/* PROMISE */
/////////////
/* 
    Promise adalah sebuah proxy untuk sebuah value yang belum tentu kita tau kapan ditepati, kita belum tau apakah ditepati,
    apakah sedang dijalankan, apakah dibatalkan
    Promise mempunyai 'states' : pending, fulfilled, dan rejected
    Contoh penggunaakn promise adalah apabila terdapat task 3 yang mana merupakan turunan dari task 1 dan 2
*/
/* 
    Promise Basic Methods
    .then() akan menangkap promise yang sudah 'fulfilled'
    .catch() akan menangkap semua promise yang 'rejected'
    .finally() akan menangkap semua promise yang 'fulfilled' dan 'rejected'
*/

// Syntax Promise
const _promise = new Promise <string> ((resolve, reject) => {
    // Contoh penggunaan resolve
    setTimeout(() => {
        const success = false;
        if (success) {
            resolve ('Janji ditepati');
        } else {
            reject ('Janji tidak ditepati')
        }
    }, 1000)
});

console.log(_promise);
/* 
    Pada console.log(_promise) dan menggunakan quoka, akan muncul Prmise {...}, hal ini berarti const _promise sudah berjalan,
    tetapi masih menunggu 1 detik untuk selesai dan langsung menjalankan console.log(_promise)
*/
/*  
    Untuk memunculkan hasil promise, gunakan .then()
    .then() bersifat synchronus, dan dijalankan setelah promise selesai. 
*/
// _promise.then((res) => console.log(res));

// Untuk memunculkan error handling, kita dapat menggunakan .catch()
// _promise.then((res) => console.log(res)).catch((value) => console.log(value))

// Untuk memunculkan hasil promis apapun, gunakan .finally()
_promise.then((res) => console.log(res))
.catch((value) => console.log(value))
.finally(() => console.log('Janji selesai'))

// contoh penggunaan dengan JSON / Hit ke API (melakukan sebuah request)
function getData() {
    fetch ("https://jsonplaceholder.typicode.com/users").then((res) => {
        return res.json();
    }).then ((user) => {
        console.log(user);
    }). catch((err) => { //Menangkap semua masalah pada fetch
        console.log(err);
    })
}

getData();

/////////////////
/* ASYNC AWAIT */
/////////////////

/* 
    ASYNC AWAIT adalah bentuk penulisan untuk mempermudah penulisan ASYNC
*/
// Tambahkan 'async' di depan function, supaya kita bisa menggunakan 'await'nya
// 'await' hanya bisa digunakan apabila kita menambahkan 'async'
async function fetchData () {
    /* 
        Selalu biasakan 'try catch', karena catch adalah untuk error handling aplikasi kita. 
        Jika kita 'try' kemudian terjadi error, akan langsung otomatis dilempar ke 'catch'
    */
    try {
        // Masukkan semua code kita di dalam try
        const result = await fetch ("https://jsonplaceholder.typicode.com/users");
        // 'await fetch' akan menunggu proses fetching selesai, baru menjalankan task dibawahnya
        const parseJSON = await result.json();
        // await result.json() akan menunggu proses parsing selesai terlebih dahulu
        console.log(result);

    } catch (err: any) {
        console.log(err.message)
    }
};
fetchData();

// Contoh arrow function

// const fetchDataArrow = async () => {
//     try {
//         const result = await fetch ("https://jsonplaceholder.typicode.com/users");
//         const parseJSON = await result.json();
//         console.log(result);

//     } catch (err: any) {
//         console.log(err.message)
//     }
// }

///////////////////////////
/* CONTOH ERROR HANDLING */
///////////////////////////
/* 
    Jika tidak ada "CATCH (ERROR)" maka aplikasi kita akan berhenti
*/

function getData2() {
    fetch ("htt://jsonplaceholder.typicode.com/users").then((res) => {
        return res.json();
    }).then ((user) => {
        console.log(user);
    }). catch((err) => {
        console.log(err);
        /* 
            Muncul error karena fetch tidak tau url nya, Fetch bingung kita mereference ke URL mana
        */
    })
}

getData2();

async function fetchData2 () {
    /* 
        Selalu biasakan 'try catch', karena catch adalah untuk error handling aplikasi kita. 
        Jika kita 'try' kemudian terjadi error, akan langsung otomatis dilempar ke 'catch'
    */
    try {
        // Masukkan semua code kita di dalam try
        const result = await fetch ("htt://jsonplaceholder.typicode.com/users");
        // 'await fetch' akan menunggu proses fetching selesai, baru menjalankan task dibawahnya
        const parseJSON = await result.json();
        // await result.json() akan menunggu proses parsing selesai terlebih dahulu
        console.log(result);

    } catch (err: any) {
        console.log(err);
        console.log(err.message);
        // Muncul error karena URL salah
    }
};
fetchData2();

const fetchDataArrow = async () => {
    try {
        const result = await fetch ("https://jsonplaceholder.typicode.com/users/1");
        const parseJSON = await result.json();
        console.log(result);
        
        // Membuat validasi manual
        if(!parseJSON) {
            throw new Error ("Nama bukan Budi");
        }
        console.log(parseJSON);
        if(parseJSON[0] !== "Budi") {
            throw new Error ("Nama bukan Budi");
        }

    } catch (err: any) {
        console.log(err.message)
    }
}
fetchDataArrow()

//////////
/* JSON */
//////////

/* 
    JSON adalah sebuah format untuk merespon data. Sebuah file yang syntaxnya mirip dengan Object
*/

const _json = `{ "name": "budi"}` ;
console.log(JSON.parse(_json).name);