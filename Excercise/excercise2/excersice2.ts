/* Excersice 2 by Setiawan Harish P */
// Tugas 1
// Membuat code untuk mengetahui apakah suatu bilangan adalah bilangan ganjil atau genap
// Buat looping untuk mengcountdown 0 s/d 25
// di dalam looping buat if statement, jika countdowm%2 == 0, continue
// console log bilangan ganjil maupun genapnya
for (let i: number = 1; i <=25; i++){
    if(i % 2 == 0) {
        console.log (i + " is even")
    } else {
        console.log(i + " is odd")
    }
};

// Tugas 2
// Membuat code untuk mengetahui apakah suatu bilangan merupakan bilangan prima
// Buat variabel untuk dapat menyimpan number
let _num:number = 17;
// Buat boolean sebagai initate bilangan prima
let prima:boolean = true;
// Buat if statement jika bilangan tersebut <= 1, bukan merupakan bilangan prima, jika tidak buat looping
let sqrtNum:number = Math.sqrt(_num);
// Akarkan number tersebut untuk mengetahui apakah bilangan tersebut habis dibagi atau tidak
console.log(sqrtNum);
// jika bilangan kurang dari 1, bukan merupakan bilangan prima
if(_num <=1){
    prima = false;
// Jika akar bilangan kurang dari 2 maka merupakan bilangan prima
} else if (sqrtNum > 1 && sqrtNum <2) {
    prima = true;
// Jika akar bilangan lebih dari 2, lakukan perhitungan untuk mencari sisa
// Jika tidak memiliki sisa, bukan merupakan bilangan prima
// Jika memiliki sisa, merupakan bilangan prima
} else {
    for (let i:number = 2; i <=sqrtNum; i++){
        if(_num % i === 0) {
            prima = false;
            break
        }        
    }   
} 
if(prima == true) {
    console.log(`${_num} adalah bilangan prima`)
} else {
    console.log(`${_num} adalah bukan bilangan prima`)
}

// Tugas 3 Membuat Kode untuk menambahkan 1 sampai ke N
let awal:number= 1;
let _sum:number = 0;;
let totNum:number = 5
for (let i:number = 1 ; i <=totNum; i++){
    _sum += i;
    console.log(_sum)
}

// Tugas 4 Factorial number
let factAwal = 6
for (let i:number = (factAwal-1) ; i>0; i--){
    factAwal *=i;
    console.log(factAwal)
}

// Tugas 5 Buat kode untuk mencari nilai pertama N dari bilangan fibbonacci
let fibNum:number = 10;
let a = 0;
let b = 1;
if(fibNum >=1) console.log(a);
if(fibNum >=2) console.log(b);
for (let i:number = 3; i <= fibNum; i++){
    let nextNum = a+b;
    a = b;
    b = nextNum;
    console.log(nextNum)
}
