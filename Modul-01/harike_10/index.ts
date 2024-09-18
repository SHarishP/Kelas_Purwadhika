////////////////////
/* DATA STRUCTURE */
////////////////////

/* 
    DATA STRUCTURE berfungsi untuk :
    1. Manage and Utilize Lagre Datasets
    2. Memudahkan mencari data tertentu dari database
    3. Mendesign algoritma 
    4. Handle Data
    5. Easy to Use
*/

/* 
    Primitive & Non - Primitive Data Structure
    Primitive Data Structure sama dengan String, Number, Boolean, dll
    Sedangkan Non - Primitive Data Structure sama seperti JS yaitu data yang tidak dibuat langsung dari bahasa pemrogramannya.
    Tetapi dibuat oleh user. Ini termasuk linier data strcuture, stack, dll
*/

// STACK DATA STRUCTURE - LIFO, last in first Out

interface IStack {
    push : (element: number) => void;
    pop : () => void;
    showElements: () => number[]; // Berfungsi untuk debugging
}
class Stack implements IStack {
    #maxSize: number;
    /* 
        Fungsi dari #maxSize disini adalah adalah untuk memberikan limit dari #container, dan memvalidasi jumlah data
    */
    #container: number [];

    constructor (maxSize: number = 10) { //10 merupakan default parameter
        this.#maxSize = maxSize;
        this.#container = [];
    };

    #isFull() {
        return this.#container.length >= this.#maxSize;
        /* 
            Kenapa diberi return? karena akan mengembalikan truthy / falsy values yang nanti akan dimasukkan ke method 'push'
        */
    };
    #isEmpty () {
        return this.#container.length === 0;
    }

    /* Membuat method 'push', yang tidak mereturn nilai apapun, tapi berfungsi untuk memasukkan elemet parameter ke '#container' 
        method push memasukkan data ke array terakhir
    */ 
    push (element: number) {
        /* 
            Validasi bisa menggunakan condition
        */
        if (this.#isFull()) {
            console.log(`Sudah Penuh`);
            return;
        }
        this.#container.push(element);
    };

    /* 
        Membuat method 'pop', tidak membutuhkan parameter, karena method 'pop' langsung mengeluarkan index terakhir
    */
   pop () {
    if (this.#isEmpty()) {
        console.log('Sudah Kosong');
    }
    this.#container.pop();
   };

showElements () {
    return this.#container;
}

}

const newStack = new Stack(6);
newStack.push(10);
newStack.push(5);
newStack.push(8);
newStack.push(4);
newStack.push(7);
newStack.push(4);
newStack.push(1); // Nilai '1' tidak masuk, karena #maxSize = 6
console.log(newStack.showElements()); //Befungsi untuk debugging
newStack.pop();
newStack.pop();
newStack.pop();
newStack.pop();
newStack.pop();
newStack.pop();
newStack.pop();
console.log(newStack.showElements());


/* 
    QUEUE - FIFO (FIRST IN FIRST OUT)
    Enqueue : Masuk ke QUEUE
    dequeue : Keluar dari QUEUE
    Pengguanan QUEUE
        1. Scheduling Printer dan CPU sesuai antrian printer
        2. CHAT WHATSAPP
*/

//////////////////////////
/* QUEUE DATA STRUCTURE */
//////////////////////////

interface IQueue {
    enqueue: (elemet:number) => void;
    dequeue: () => number | undefined; // Memiliki arti, punya 2 tipe data
    showElements: () => number[];
}

class Queue implements IQueue {
    #maxSize: number;
    #container: number[];
    /* 
        NOTE :
        Jika kita tidak membuat constructor, maka TS akan secara default membuat constructor, tapi KOSONG
    */
    constructor (maxSize: number = 10) {
        this.#maxSize = maxSize;
        this.#container = [];
    }

    #istFull () {
        return this.#container.length >= this.#maxSize;
    }

    #isEmpty () {
        return this.#container.length === 0;
    }

   enqueue (elemet:number) {
    if (this.#istFull()) {
        console.log(`Sudah Penuh`);
        return;
    }
    this.#container.push(elemet);
   };
   dequeue () {
    if (this.#isEmpty()) {
        console.log('Sudah Kosong');
        
        return;
    }

    return this.#container.shift();
   }

   showElements() {
    return this.#container;
   }

}

const newQueue = new Queue ();
newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.enqueue(4);
newQueue.enqueue(5);
newQueue.enqueue(6);
newQueue.enqueue(7);
newQueue.enqueue(8);
newQueue.enqueue(9);
newQueue.enqueue(10);
newQueue.enqueue(11);
console.log(newQueue.showElements());
console.log(newQueue.dequeue());
console.log(newQueue.dequeue());
console.log(newQueue.dequeue());
console.log(newQueue.dequeue());
console.log(newQueue.dequeue());
console.log(newQueue.dequeue());
console.log(newQueue.showElements());


/* SET - Merupakan Data Structure yang isinya tidak boleh duplicate alias UNIQUE */

const sneakers = ['adidas', 'nikee', 'reebok', 'adidas'];
console.log(sneakers);

const cars = new Set (['bmw', 'mercedes', 'volkswagen', 'bmw']);
console.log(cars);
/* Bisa dilihat bahwa 'bmw'tidak muncul 2 kali. Dan berbentuk objek. Karena setiap inisiasi 'new' akan menghasilkan objek */
// Penambahan pada 'set' 'cars'
cars.add('mercedes');
console.log(cars); //Tidak bisa masuk, karena dupilkasi
cars.add('honda');
console.log(cars); //Tidak bisa masuk, karena dupilkasi
cars.delete('mercedes')
console.log(cars); //Tidak bisa masuk, karena dupilkasi
cars.forEach((i, idx)=>{
    console.log(i);
})


/* HASH TABLE / MAP */

// 
const obj = { 
    name: 'budi', 
};

obj.name = 'jojo';
console.log((obj));

/* 
    Jika kita ingin memasukkan data ke Map, harus menggunakan build in methodnya bernama Set
*/
const map = new Map();
map.set('budi', {umur: 25});
console.log(map.get('budi'));
map.set(obj, 'ini jojo');
console.log(map.get(obj));

map.set({name: 'dodi'}, 55); // map dengan key berupa tipe data objek
console.log(map.get({name: 'dodi'}));

let keyArray = [5, 5];
map.set(keyArray, 55); // map dengan key berupa tipe data array
console.log(map.get(keyArray));

map.forEach((i) => {
    console.log(i)
});

for (let data of map) {
    /* dibaca secara looping */
    console.log(data)
};
console.log(typeof(map))
console.log(map)
/* dibaca langsung, tapi perlu diolah, menggunakan get */

/////////////////
/* LINKED LIST */
/////////////////

// A. Single Linked List
const linkListSingle = {
    value: 'a',
    next : {
        value: 'b',
        next: {
            value : 'c',
            next: {
                value: 'd',
                next: null,
            }
        }
    }
}

// B. Double Linked Lists