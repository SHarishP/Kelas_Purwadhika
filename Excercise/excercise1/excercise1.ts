/* Excersice 1 - By Seiawan Harish P */
// Tugas 1 menghitung luas persegi.
// Buat variabel untuk menyimpan panjang dan lebar persegi
let lengRec1:number = 5, 
    widRec1:number = 3;
// Buat variabel untuk rumus luas persegi => panjang x lebar
let areaRec1:number = lengRec1*widRec1;
// Tampilkan dalam console.
console.log(`Maka luas persegi dengan panjang ${lengRec1} dan luas ${widRec1},
            adalah ${areaRec1}`);
    
    
// Tugas 2 menghitung keliling persegi
// Buat variabel untuk menyimpan panjang dan lebar persegi
let lengRec2:number = 5, 
    widRec2:number = 3;
// Buat variabel untuk rumus keliling persegi
let perimRec2:number = 2*(lengRec2+widRec2);
// Tampilkan dalam console
console.log(`Maka keliling  persegi dengan panjang ${lengRec2} dan luas ${widRec2},
            adalah ${perimRec2}`);
    

// Tugas 3 hitung diameter, keliling, dan luas dari sebuah lingkaran
// Buat variabel untuk menyimpan radius, nilai PI dengan menggunakan Property PI
let rad:number = 5, 
    phi = Math.PI;
// Buat variabel untuk menangkap panjang diameter yaitu 2xradius
let dia:number = 2*rad;
// Buat variabel untuk menghitung keliling lingkaran yaitu 2xPIxradius
let circumCir:number = 2*phi*rad;
// Buat variabel untuk menghitung luas lingkaran yaitu Pixradius^2
let areaCir:number = phi*Math.pow(rad,2);
// Tampilkan dalam console
console.log(`Diameter = ${dia}, keliling = ${circumCir}, luas = ${areaCir}`)

// Tugas 4 menghitung suatu sudut dari segitiga dari 2 sudut yang diberikan
// Total sudut dari segitiga adalah 180 derajat, maka
// Buat variabel untuk menyimpan kedua sudut segitiga yang telah diketahui
let angle1:number = 80,    
    angle2:number = 65;
// Buat variabel untuk mencari sudut yang ditanyakan
let angle3:number = 180 - angle1 - angle2;
// Tampilkan dalam console
console.log(`Besar sudut yang dicari adalah ${angle3}`);


// Tugas 5 Konversi jumlah hari ke tahun, bulan, dan hari.
// Note 1 tahun = 365 hari dan 1 Bulan = 30 hari
// Buat variabel untuk menangkapjumlah hari, banyaknya hari dalam setahun, dan banyaknya hari dalam sebulan
let totDay1:number = 400, 
    totDay2:number = 366, 
    dayInYear:number = 365, 
    dayInMonth:number = 30;
// Buat variabel dan hitung tahun dengan cara total hari / hari dalam setahun.
let year1:number , 
    year2:number;
year1 = totDay1 / dayInYear;
year2 = totDay2 / dayInYear
// Bulatkan hasil pembagian tahun, kebawah.
year1 = Math.floor(year1);
year2 = Math.floor(year2);
// Buat variabel dan hitung bulan dengan cara cari (sisa pembagian total hari / hari dalam setahun) / jumlah hari dalam sebulan
let month1:number, month2:number;
month1 = totDay1 % dayInYear / dayInMonth;
month2 = totDay2 % dayInYear / dayInMonth;
// Bulatkan hasil pembagian bulan kebawah
month1 = Math.floor(month1);
month2 = Math.floor(month2);
// Buat variabel dan hitung hari dari (sisa pembagian tahun / jumlah hari)
let day1:number , day2:number;
day1 = totDay1%dayInYear%dayInMonth;
day2 = totDay2%dayInYear%dayInMonth;
// Tampilkan dalam console
console.log(`Maka ${totDay1} hari sama dengan ${year1} tahun, ${month1} bulan, dan ${day1} hari,
            serta ${totDay2} hari sama dengan ${year2} tahun, ${month2} bulan, dan ${day2} hari.`);


// Tugas 6 Hitung perbedaan hari
// Buat variabel untuk menangkap date baru 
let tanggal1:Date = new Date('2022-01-20'),
    tanggal2:Date = new Date('2022-01-22');
// konversi date baru ke day dengan method getDay()
let hari1:number = tanggal1.getDay(),
    hari2:number = tanggal2.getDay();
// Kurangi kedua hari yang telah dikonversikan
let difDay = hari2 - hari1;
// Tampilkan dalam console
console.log(`Selisihnya adalah ${difDay} `)