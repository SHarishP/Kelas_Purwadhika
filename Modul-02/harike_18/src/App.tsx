import { useState, useEffect, useRef, useMemo } from 'react'
import useCounter from './hooks/counter';
// useState adalah bulk dari virtual DOM
/* 
  useState dapat menyimpan sebuah value, dan apabila valuenya berubah react akan mere -render componen yang menggunakan 'state' ini

  kita tidak menggunakan 'const a : 0', karena dia tidak me re-render datanya

  useState digunakan untuk memfetching data

  useMemo, menyimpan value dari sebuah kalkulasi dari function yang mahal, biasanya membutuhkan waktu
  Function mahal adalah adalah function yang membutuhkan waktu

  useCallback, menyimpan value dari function. Jika tidak ada perubahan, maka tidak perlu dijalankan lagi

*/
import Names from './components/names';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  /* 
    syntax penulisan sama seperti buat variabel biasa, tetapi diisi kurung kotak, dan terdapat dua nama
  */

  // Contoh penggunaan variabel bisa
  // let count = 0;

  /* 
    apapun yang diawalnya 'use...' merupakan 'Hooks'
    1. Penulisannya selalu HARUS paling ATAS, karena merupakan pengaturan umum untuk merender ulang (Pembacaan dariatas kebawah)
    2. Sebuah Hooks tidak boleh ditaruh di dalam function biasa, hanya boleh ditulis di function komponen
    3. const [name1, stateSet]
      name1 : sama seprti variabel yang bisa kita panggil, sama seperti getter (read only)
      stateSet : sama seperti setterMethod, digunakan untuk mengupdate value nya

    NOTE : Berhubung diatas sudah ter-comment, maka line diatas diabaikan
  */
  //////////////////////////
  // Contoh penggunaan 'use'
  //////////////////////////
  const [input, setInput] = useState<string>("");
  const [data, setData] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);
  /* 
    <number> merupakan tipe data, berarti useState menyimpan tipe data number
    'count' bersifat read only (seperti getter), sehingga untuk mengupdate 'count' harus menggunakan setCount
  */
  // Menyimpan nama
  const [name, setName] = useState<string>("");
  const inputRef = useRef<null | HTMLInputElement>(null); //tipe data dari inputRef merupakan null atau HTMLInputElement (<input>)
  const countRef = useRef<number>(0);
  /* 
    useRef is a React Hook that lets you reference a value that’s not needed for rendering.
    untuk ngecek, apakah terjadi perubahan apabila re-render
    useRef bisa menyimpan value tapi tidak merender ulang
  */

  /* CONTOH CUSTOM HOOK */
  const [counts, increment, decrement] = useCounter(0,1);
  


  ////////////////////////////////////////////////
  // CONTOH SYNTAX USEEFFECT, Mempunyai 2 function
  ////////////////////////////////////////////////
  useEffect(() => {
  //   console.log('jalan')
  //   document.title = `click ${count}`
  // }, [count]);

  /* 
    useEffect berfungsi menjalankan code yang ada di dalamnya, apabila terdapat perubahan
    count apabila terdapat perubahan, akan merubah document.title,
    dan 'jalan' akan tetap dijalankan meskipun kita menjalankan setName

    Ada juga yang disebut dependencies (lihat, ',[count]'), ini membuat useEffect dijalankan apabila terjadi perubahan di 'count'
    Jika diberi dependencies kosong ([]), useEffect akan dijalankan sekali, kita pertama kali render
  */
  
  // Contoh jika menggunakan function
  // if (count >= 5) {
  //  console.log('jalan');
  // //  Kita bisa menggunakan bantuan useRef untuk memunculkan countRef di console
  //  console.log(countRef);
  //  document.title = `click ${count}`;
  // }
   console.log('jalan');
   console.log(countRef);
   document.title = `click ${count}`;
  },[count]);
  
  // Contoh penggunaan tanpa useMemo
  // function isCountEven() {
  //   let i = 0;
  //   while (i < 200000000) {
  //     i++
  //   }
  //   return count %2 === 0
  // }

  /* 
    useMemo akan menyimpan kalkulasi dari rich function, sehingga apabila hasil dari suatu rich function selalu sama, dan kita perlu
    me re-render website, rich function tersebut tidak perlu melakukan perhitungan ulang juga yang dapat membuat website jadi lemot.
    Dan useMemo telah menyimpan hasil perhitungan rich function tersebut
  */

  const isCountEven = useMemo(() => {
    let i =0;
    while ( i <2000000000) {
      i++;
    };
    return count %2 === 0
  }, [count])


  return (
    <>
      <div>
        <Names name={name}/>
        <button onClick={() => {
          // Contoh pemanggilan menggunakan variabel biasa
          // console.log(count);
          // count += 1;
          /* 
            Dari sini, kita bisa klik, tapi penambahan nilai count tidak ditampilkan langsung di website, melainkan hanya di console.log saja
            Maka dari itu digunakan useState, sehingga apabila terjadi perubahan data, akan langsung ditampilkan di web
          */

          // Contoh pemanggilan menggunakan useState
          setCount(count + 1)
          /* 
            dari sini akan langsung me-render perubahan nilai dari count 
            kita juga tidak perlu menggunakan += lagi, karena setCount akan meniban nilai count
          */
          }}>Click me {count}</button>

          {/* Penambahan Nama */}

          <input 
            type="text" 
            ref={inputRef}
            /* 
              Jika kita mempunyai banyak HTMLInputElement, dan ingin fokus, hanya bisa SALAH SATU saja, serta menggunakan 
              'ref={namaRef}', 'namaRef' boleh berubah 
            */
            onChange={(e) => {
            setName(e.target.value);
            // Kita juga sekalian merubah setCount jika menambahkan text
            // setCount(count +1); // Don't Forget to uncomment to try!
          }} />
          <input 
            type="text"
            // Contoh kesalahan penggunaan ref={inputRef} pada input kedua, padalah kita ingin fokus ke input pertama
            // ref={inputRef} // DON'T FORGET TO UNCOMMENT TO TRY
            /* 
              Jika kita memasukkan 'ref={inputRef}' diinput yang lain, kemudian kita mengklik button 'Click me with useRef'
              maka akan langsung fokus ke input kedua, sedangkan kita inginnya fokus ke input pertama.
            */
             />
          {isCountEven ? 'even' : 'odd'}
          <p>{name}</p>
          <button 
            onClick={() => {
              countRef.current += 1;
              inputRef.current?.focus();
              // console.log(inputRef.current);
              /* 'inputRef.current?.focus()' membuat setelah kita klik button, cursor akan otomatis fokus ke input yang memiliki
                  'ref={inputRef}', atau kursor edit akan langsung muncul di inputnya
              */
              }}>
            Click me with useRef: {countRef.current}
          </button>
          <input type="text" onChange={(e) => setInput(e.target.value)}/>
          <button onClick={() => setData((i) => [...i, input])}>Save</button>
          {data?.map((item, idx) => (
            <p key={idx}>{item}</p>
          ))}
          <p>{counts}</p>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
      </div>
    </>
  )
}

export default App
