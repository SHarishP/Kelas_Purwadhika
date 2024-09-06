let kata = 'harish';
let keterangan;
// Buat variabel untuk menyimpan index terakhir dari sebuah string
// Buat forloop dimana i merupakan index string
for (let i = 0; i < kata.length / 2; i++) {
    let j = kata.length - 1;
    // Buat logic function untuk memeriksa apakah index ke i === index ke j, jika tidak berarti bukan polindrome
    if (kata[i] !== kata[j]) {
        keterangan = 'Bukan merupakan Polindrome';
        console.log(kata[i]);
        console.log(kata[j]);
        break;
    }
    else {
        keterangan = 'Merupakan Polindrome';
        break;
    }

}
console.log(keterangan);