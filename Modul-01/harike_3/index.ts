let _cuaca: string = "mendung";

if (_cuaca === "hujan") { // di dalam {} ini, disebut dengan body if
    const _aksi: string = "Kita tidak pergi jalan"; //const ini hanya dimiliki if line ini => disebut dengan local scope
    _cuaca = "tidak hujan" // Value pada global scope dapat diambil dan diubah di local scope
    console.log(_aksi);
} else {
    const _aksi: string = "Kita pergi jalan" //const ini hanya dimiliki else line ini => disebut dengan local scope
    console.log(_aksi);
}
console.log(_cuaca);

const _umur:number = 5;
if (_umur >= 17 && _umur < 21) {
    const _aksi:string = "Sudah bisa buat KTP"; //const ini hanya dimiliki if line ini => disebut dengan local scope
    console.log(_aksi);
} else if (_umur > 20){
    const _aksi:string = "Tidak bisa buat KTP"
    console.log(_aksi);
} else if (_umur < 17 && _umur > 0){
    const _aksi:string = "Belum cukup umur";
    console.log(_aksi);
}  else {
    const _aksi:string = "Belum Lahir";
    console.log(_aksi);
}
// Global scope variabel / code expression yang ada diluar, seperti diluar if statement
// Contoh : const _cuaca dan _umur
// Tetapi, apapun yang ada di global scope dapat dibuah di dalam local scope

const _buah:string = "jeruk";
// switch case digunkan untuk comparison === saja
switch(_buah){ 
    case  "apel":
        console.log("Harga buah apel = 5000");
        break; //penggunaan break bertujuan untuk menghentikan pembacaan switch case, dan lansgung keluar.
    case "jeruk":
        console.log("Harga buah jeruk = 8000");
        break; //penggunaan break bertujuan untuk menghentikan pembacaan switch case, dan lansgung keluar.
    default: //berfungsi layaknya else
        console.log("Harga buah = 2000")
}

// Tenary Operator / Shorthand for If Else
let _cuaca2 = "hujan";
console.log(_cuaca2 === "hujan" ? "Kita tidak pergi jalan" : "Kita pergi jalan")
// Tenary operator lebih baik digunakan jika kita hanya memiliki If dan Else saja

// for  loop
for (let i: number = 10; i>0 ; i--){
    if (i % 2 !== 0) continue; //Dalam case ini, looping akan di skip jika ketemu bilangan ganjil.
    console.log(i);
}
// Perbedaan Break menghentikan semua looping, sedangkan continue untuk memberhentikan / skip looping pada kondisi tertentu

// while loop -> mengecekkan kondisi dulu jika kondisi terpenuhi baru menjalankan kode
let _countdown: number = 0
while(_countdown > 0){
    console.log(_countdown);
    if(_countdown === 6) break;

    _countdown--;
}

// do while loop -> menjalankan do dulu baru melakukan pengecekan kondisi
_countdown = 0;
do {
    console.log(_countdown);
    if(_countdown === 6) break;

    _countdown--;
} while (_countdown >0)
