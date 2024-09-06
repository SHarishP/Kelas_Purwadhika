
/* 
    CLASS adalah template dalam membuat object. 
    Ketika membuat suatu CLASS, CLASS tersebut sudah memiliki property dan method.
    Tetapi CLASS tersebut harus di inisiasi / interface terlebih dahulu
    CLASS disebut juga special function karena pembuatan CLASS bisa dengan cara EXPRESSION dan DECLARATION
    Ketika kita menggunakan CLASS kita menggunakan konsep-konsep OOP
    Konsep-Konsep tersebut adalah
    Acces Modifier, penggunaan CLASS OOP bisa memberikan akses untuk "PUBLIC" / "PRIVATE" / "PROTECTED"
    Encapsulation -> Method untuk membungkus data, untuk menjadi 1 unit sehingga kita punya kendali untuk memanage / memvalidasi data kita
*/

/* 
    Kelebihan Encapsulation
    1. Data Hiding : Berarti user tidak dapat mengetahui bagaimana kita mengolah data
    2. Increased Flexibility : Kita bisa membuat data menjadi read only atau write only. Jika kita ingin menghide property pada
    class, kita dapat menggunakan '#' diawal KEY. Dan tidak perlu menuliskan di dalam interface.
    Property yang kita hide, hanya bisa dipakai di dalam CLASS. Dan tidak bisa digunakan diluar CLASS
    3. Reusability : Mudah untuk digunakan kembali
    4. Testing code is Easy
*/

///////////////////////////
// SYNTAX CLASS DECLARATION
///////////////////////////

/* 
    Dalam membuat class, harus membuat constructur terlebih dahulu sebelum menginisiasi class. 
    Maka setiap CLASS pasti memiliki CONSTRUCTOR, dan hanya memiliki satu CONSTRUCTOR
    CLASS juga dapat menggunakan INTERFACE sama seprti OBJECT
*/

interface IUser {
    // name : string; // dihapus karena property 'name' kita hide
    umur: number;
    greeting: (massage: string) => string;
}

class User implements IUser {
    // Private Property tidak perlu ditulis di dalam Interface
    #name;
    /* 
        Jika kita tidak mau membuat constructor, dan membuat nilai untuk semua CLASS sama semua, maka langsung bisa di assign 
        dan tanpa CONSTRUCTOR seperti 'ummur' dibawah
    */
    // umur: number = 22; 
    umur;
    // CONSTRUCTOR disebut juga CONSTRCUTOR METHOD. Nama harus sama yaitu 'constructor'
    // CONSTRUCTHOR digunakan hanya untuk mengisi property pada CLASS yang akan digunakan sebagai OBJECT
    constructor(paraName: string, paramUmur: number) {
        this.#name = paraName;
        this.umur = paramUmur;
    }
    // Jika kita ingin membuat method, maka tidak perlu memasukkan CONSTRUCTOR
    greeting(massage: string) {
        this.getEmail()
        return `${massage} ${this.#name}, umur kamu ${this.umur}`;
    }

    // Jika kita ingin memprivate / hide method pada CLASS, kita dapat menambahkan 'private' di depan nama method
    private getEmail() {
        console.log('Email di dapatkan');
    }
}

////////////////////////////
/* CARA MENGGUNAKAN CLASS */
////////////////////////////

const userA = new User('david', 22);
const userB = new User('budi', 55);
console.log(userA);
console.log(userA.greeting('Hallo'));
console.log(userB.greeting('Hai'));
// console.log(userA.getEmail())

/* 
    Jika kita tidak ingin menginilisasi banyak kelas menjadi Object, dan hanya lansgung menggunakan Property dan Class nya, 
    Kita dapat menggunakan STATIC PROPERTIES dengan menuliskan 'static';
*/

// Contoh : Membuat koneksi -> Biasanya hanya dipakai sekali
class DB {
    static #connection = "";

    static #initializeConnection() {
        const randomNum = Math.ceil(Math.random() * 100);
        // Kita tidak perlu menggunakan 'this.#connection' karena class DB adalah static
        DB.#connection = `New database connection ${randomNum}`;
    }

    static getConnection() {
        // karena #connection adalah falsy value (string kosong) maka !DB.#connection membuatnya menjadi truethy value
        if (!DB.#connection) {
            DB.#initializeConnection();
        }
        return DB.#connection; 
    }
}
console.log(DB.getConnection());

/////////////////////
/* GETTER & SETTER berlaku di CLASS dan OBJECT*/
/* GETTER (Read Only) banyak digunakan di method, dan berfungsi hanya untuk mengambil / memakai method dan tidak bisa merubah */
/* SETTER untuk mengupdate value */

const users = {
    firstName: 'john',
    lastName: 'smith',

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    /* nama method untuk GET dan SET boleh sama */

    set fullName(value: string) {
        const split = value.split(' ');
        this.firstName = split[0];
        this.lastName = split[1];
    },
    // contoh tanpa penggunaan set (nama harus berbeda)
        fullname(value: string) {
            const split = value.split(' ');
            this.firstName = split[0];
            this.lastName = split[1];
        },

        printFullName(){
            return `${this.firstName} ${this.lastName}`;
        }

};
// Dengan menggunakan 'get' maka kita memanggil method tanpa menggunakan ()
console.log(users.fullName);

// Dengan menggunakan 'set', kita perlu menuliskan value baru
users.fullName = 'Lara Croft';
console.log(users.fullName);
/* 
    Kita tidak bisa memanggil set method dengan menggunakan cara berikut :
        console.log(users.fullName('Johny Depp')) //users.fullName is not a function
*/

// Jika tanpa 'set', kita dapat memanggil sebagai berikut :
users.fullname('Dominic Toretto');
console.log(users.printFullName());

/* 
    INHERTINACE (Penurunan)
    Kita bisa mengambil property dari CLASS DIATASNYA / SEBELUMNYA
*/
// Jika tidak ada Inheritance
// interface IProduct {
//     productName: string;
//     price: number;
// }

// class Product implements IProduct {
//     productName;
//     price;

//     constructor(){
//         this.productName = "";
//         this.price = 0;
//     }
// }


// interface ICar {
//     productName: string;
//     price: number;
//     brand: string;
// }

// class car implements ICar {
//     productName;
//     price;
//     brand;

//     constructor() {
//         this.productName = "";
//         this.price = 0;
//         this.brand = "";
//     }
// }
/* Jika tanpa Inheritance, kita akan banyak membuat interface dan class, jika kita akan membuat banyak object / class */

// Jika menggunakan INHERITANCE, kita cukup menuliskan sebagai berikut:

interface IProduct {
    productName: string;
    price: number;
    brand: string;
}

class Product implements IProduct {
    productName;
    price;
    brand;

    constructor(paramName: string, paramPrice: number, paramBrand: string){
        this.productName = paramName;
        this.price = paramPrice;
        this.brand = paramBrand;
    }
}

interface ICar {
    nyalakanWiper: () => string;
}
class Car extends Product implements ICar {
    constructor(paramName: string, paramPrice: number, paramBrand: string) {
        super(paramName, paramPrice, paramBrand);
    }
    nyalakanWiper() {
        return `Wiper nyala`;
    }
}

const newCar = new Car('Brio', 100000, 'Honda');
console.log(newCar.productName);
console.log(newCar.nyalakanWiper());

interface ICarElectric {
    baterai: string;
}
class CarElectric extends Car implements ICar {
    baterai;
    constructor(paramName: string, paramPrice: number, paramBrand: string, paramBaterai: string) {
        super(paramName, paramPrice, paramBrand);
        this.baterai = paramBaterai;
    }
}

const newCarElectric = new CarElectric('Ioniq', 50000, 'Hyundai', 'Lithium');
console.log(newCarElectric)
console.log(newCarElectric.nyalakanWiper())



interface IBike {
    goes: () => string;
}

class Bike extends Product implements IBike {
    constructor(paramName: string, paramPrice: number, paramBrand: string) {
        super(paramName, paramPrice, paramBrand);
    }
    goes() {
        return `sepeda berjalan`;
    }
}

const newBike = new Bike('fiksi', 50000, 'uni');
console.log(newBike);
console.log(newBike.goes());