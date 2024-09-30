import { useState, useEffect, useRef, useMemo } from 'react'
// useState adalah bulk dari virtual DOM
/* 
  useState dapat menyimpan sebuah value, dan apabila valuenya berubah react akan mere -render componen yang menggunakan 'state' ini

  kita tidak menggunakan 'const a : 0', karena dia tidak me re-render datanya

  useState digunakan untuk memfetching data

  useMemo, menyimpan value dari sebuah kalkulasi dari function yang mahal, biasanya membutuhkan waktu
  Function mahal adalah adalah function yang membutuhkan waktu

*/
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
  const [count, setCount] = useState<number>(0);
  /* 
    <number> merupakan tipe data, berarti useState menyimpan tipe data number
  */
  // Menyimpan nama
  const [name, setName] = useState<string>("");
  const inputRef = useRef<null | HTMLInputElement>(null);
  const countRef = useRef<number>(0);
  /* 
    useRef is a React Hook that lets you reference a value that’s not needed for rendering.
    untuk ngecek, apakah terjadi perubahan apabila re-render
    useRef bisa menyimpan value tapi tidak merender ulang
  */


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
  //  Kita bisa menggunakan bantuan useRef untuk memunculkan countRef di console
   console.log(countRef);
   document.title = `click ${count}`;
  });
  
  // Contoh penggunaan tanpa useMemo
  // function isCountEven() {
  //   let i = 0;
  //   while (i < 200000000) {
  //     i++
  //   }
  //   return count %2 === 0
  // }

  const isCountEven = useMemo(() => {
    let i =0;
    while ( i <200000000) {
      i++;
    };
    return count %2 === 0
  }, [count])
  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <div>
        <button onClick={() => {
          // Contoh pemanggilan menggunakan variabel biasa
          // console.log(count);
          // count += 1;
          /* 
            Dari sini, kita bisa klik, tapi penambahan nilai count tidak ditampilkan langsung di website, melainkan hanya di console.log saja
            Maka dari itu digunakan useState, sehingga apabila terjadi perubahan data, akan langsung ditampilkan di web
          */

          // Contoh pemanggilan menggunakan useState
          setCount(count + 1);
          /* 
            dari sini akan langsung me-render perubahan nilai dari count 
            kita juga tidak perlu menggunakan += lagi, karena setCount akan meniban nilai count
          */
          }}>Click me {count}</button>

          {/* Penambahan Nama */}

          <input 
            type="text" 
            ref={inputRef}
            onChange={(e) => {
            setName(e.target.value);
            // Kita juga sekalian merubah setCount jika menambahkan text
            // setCount(count +1); // Don't Forget to uncomment to try!
          }} />
          <input type="text" />
          {isCountEven ? 'even' : 'odd'}
          <p>{name}</p>
          <button 
            onClick={() => {
              countRef.current += 1;
              inputRef.current?.focus();
              }}>
            Click me with useRef: {countRef.current}
          </button>
      </div>
    </>
  )
}

export default App
