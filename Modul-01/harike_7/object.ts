//////////////////////////////
// Object Oriented Programming 
//////////////////////////////

/* 
    Class adalah sebuah blueprint untuk menciptakan object
    Object Oriented Programming lebih sering menggunakan CLASS
    
    OOP adalah cara kita sebagai developer untuk memanipulasi Object, daripada menggunakan Logic untuk memanipulasi Object

    OBJECT merupakan tipe data non primitive. 
    OBJECT merupakan entity yang mempunyai state dan behavior seperti method.
    OBJECT dapat berisi string, number, array, bahkan function
*/

// Misal kita mempunyai sepatu 'adidas', dimana 'adidas' mempunyai berbagai macam model dan harga
// const sepatu = 'adidas';
// const hargaAdidas = 50000;
// const tipeAdidas = 'Vmax';
// const sepatu2 = 'adidas';
// const hargaAdidas2 = 100000;
// const tipeAdidas2 = 'tinggi';
// Penulisan semacam ini akan sangat menyusahkan kita sebagai developer, maka dari itu digunakan OBJECT

/* 
    Pada Typescript, pembuatan object wajib menggunakn interface sebagai berikut:
    interface adalah deklarasi tipe object yang akan kita buat
    Interface bisa melakukan extend, yaitu menggabungkan TYPE ke dalam INTERFACE
*/
interface ISepatu {
    merk: string;
    harga: number;
    tipe : string;
}

interface ISendal {
    merk: string;
    harga: number;
}

const sepatu: ISepatu = {
    merk: 'adidas',  //ini merupakan property pada object (merk disebut key, 'adidas' disebut value)
    harga: 50000,    //ini merupakan property pada object
    tipe: 'vmax',    //ini merupakan property pada object
};

const sendal : ISendal = {
    merk: 'puma',
    harga: 20000,
}

// diatas ini merupakan state pada Object
console.log(sepatu.harga);
// jika ingin mengambil salah satu state pada object
console.log(sepatu.merk);

// Pendeklarasian tipe data pada TYPESCRIPT adalah untuk mempermudah developer
function tampilkanSepatu (obj: ISepatu) {
    console.log(obj.merk);
}
console.log(tampilkanSepatu({merk: 'reebok', harga: 20000, tipe: 'jalan'}));
tampilkanSepatu(sepatu)


/* 
    TYPES ALIAS hampir sama dengan INTERFACE, bisa digunakan pada object dan variabel biasa
*/

type Name = string; //Membuat tipe data untuk variabel
const nama: Name = 'david';
type Cars = {
    merk: string;
    harga: number;
};

const car: Cars = {
    merk: 'BMW',
    harga : 500000000,
}

function tampilkanMobil(car: Cars){
    console.log(car);
}
tampilkanMobil({merk: 'BMW', harga : 50000});

/* 
    Interface bisa melakukan extend, yaitu menggabungkan TYPE ke dalam INTERFACE
    Interface juga bisa extend interface
*/

type Products = {
    merk: string;
    harga: number;
};

interface IElektronik extends Products {
    watt: number;
}
interface IDapur extends Products {
    tipe: string;
}
const kulkas: IElektronik = {
    merk: 'Toshiba',
    harga: 500000,
    watt: 225,
}

interface IStavolt extends IElektronik {
    merk: string;
}

const stavolt = {
    merk : 'LG',
    watt : 200,
}

//////////////////////////////////
// PROPERTY dan METHOD pada OBJECT
//////////////////////////////////
interface IUser {
    name: string;
    umur: number;
    tempatTinggal: {
        alamat: string;
        alamatLengkap?: {
            kodePos?: number;
        };
    };
    greet: () => string; 
    // test: () => {};
}
/* 
    NOTE :
        Jika kita tidak ingin mereturn value dari method pada object kita, tulis 'void'. Contoh
        greet:() => void

        Kita tidak bisa membuat property baru jika tidak terdefine di interface. Maka akan muncul error di typesript
        
        Jika kita memberikan tanda tanya (?) pada saat mendefine interface, artinya "TIDAK WAJIB DIISI". Contoh kodepos?: number
*/

const user :IUser = {
    name: 'david',
    umur: 52,
    tempatTinggal: {
        alamat: 'jakarta',
        alamatLengkap: {
            kodePos: 11242,
        },
    },
    // jenisKelamin: 'pria', tidak diperbolehkan karena interace IUser tidak ada tipe jenisKelamin 
    greet() {
        return `Hello ${this.name}, anda berumur ${this.umur}`
        // Penggunaan 'this' hanya bisa digunakan di dalam / locale method object ini saja
    },
    // Method untuk mengetahui isi dari this.
    // test() {
    //     return this;
    // }
    // test : () => {return this};
};
console.log(user.greet())

////////////////////////////////
// MENGAKSES VALUE PADA PROPERTY
////////////////////////////////
console.log(user.greet());
console.log(user.name);
console.log(user['name']);
// console.log(user.test())

console.log(user.tempatTinggal.alamatLengkap?.kodePos) // Chaining untuk mendapatkan value dari object di dalam object



/* 
    OPTIONAL SIGN
    Jika tidak ada data pada Object, dan kita ingin mengaksesnya, maka akan muncul error. 
    Maka dari itu dibutuhkan optional sign (?) 
*/
const user2 : IUser= {
    name: 'John',
    umur: 100,
    tempatTinggal: {
        alamat: 'jakarta',
    }, 
    greet() {
        return `Hello ${this.name}, anda berumur ${this.umur}`
        // Penggunaan 'this' hanya bisa digunakan di dalam / locale method object ini saja
    }
};
console.log(user2.tempatTinggal?.alamatLengkap?.kodePos) // Chaining untuk mendapatkan value dari object di dalam object

////////////////////////
// ADD & DELETE PROPERTY
////////////////////////
/*  
    Karena kita menggunakan TYPESCRIPT yang strict tipe data, maka kita tidak diperbolehkan menggunakan ADD & DELETE PROPERTY
    Object menggunakan Javascript
*/
//////////////////////
// MUTABLE & IMMUTABLE
//////////////////////

/* 
    MUTABLE = semua yang setelah dibuat dapat diganti. Yang termasuk Mutable adalah Array dan Object
    IMMUTABLE = semua yang telah dibuat tidak dapat diganti
*/

user.name = 'Budi';
console.log(user.name);
/* 
    Kenapa user.name bisa diubah padahal user menggunakan variabel 'const'?
    Karena property 'name' pada 'user' merupakan bukan const
    Tetapi, jika kita membuat object baru, dan merubah 'name', maka 'name' pada object 'user' juga ikut berubah. Contoh :
*/
const newUser = user;
newUser.name = 'alex';
console.log(user)
/* 
    Kenapa hal diatas dapat terjadi? Karena object bersifat mutable. Mutable dan Immutable berbicara tentang penyimpanan data pada RAM. 
*/
let _name: string = 'budi';
_name = 'david';
console.log(_name);
let _newName = _name;
_newName = 'budi';
console.log(_newName);
console.log(_name);

/* 
    Jika kita ingin mengubah isi object tanpa mengubah object yang lama, maka kita dapat menggunakan spread '...'
*/
const newUser2 = { ...user };
newUser2.name = 'budi';
console.log(user)
console.log(newUser2)


//////////////////////////////
/* DESTRUCTURING ASSIGNMENT */
//////////////////////////////
// Dapat menggunakan function berikut

function tampilkanNameDanUmur(user: IUser): void {
    let {name, umur} = user; //Mengeluarklan property 'name' dan 'umur' pada user
    name = "tata"
    console.log(name);
    console.log(umur);
}
tampilkanNameDanUmur(newUser2)
console.log(newUser2)

/////////////////////
/* SPREAD OPERATOR */
/////////////////////
/* 
    (...) Spread Operator digunakan pada Object dan Array, untuk mengcopy value pada object dan array sehingga kita dapat merubah value,
            tanpa merubah value pada object atau array awal
    (...) disebut rest Parameter pada function, bertujuan untuk menangkap kelebihan parameter dari argument
*/
// Contoh pada Array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
/* 
    Jika kita melakukan copy arr1 ke arr baru, kita tidak bisa langsung merubah value pada index.
    Karena value pada arr1 akan ikut berubah, misal
*/
// const arr3 = arr1;
// arr3[0] = 9;
// console.log(arr1) //nilai ikut berubah menjadi [9,2,3]
/* 
    Jika kita tidak ingin merubah value pada arr1, maka kita menggunakan spread operator sebagai berikut
*/
const arr3 = [...arr1];
arr3[0] = 9;
console.log(arr3);
console.log(arr1);
// Menggabungkan array
// Penggabungan array dapat menggunakan method .concate() atau spread operator
const arr4 = arr1.concat(arr2);
console.log(arr4);
const arr5 = [...arr1, ...arr2];
console.log(arr5);

// Type Intersection
/* 
    Kita bisa menggunakan 2 atau memilik salah satu tipe data
*/
type c = {
    name: string;
}

type b = {
    tipe: string;
}

type a = c | b; //bisa juga menjadi c & b

const newA: a = {
    tipe: 'budi',
    name: 'dodi',
}

let _str: string | number = 5; 