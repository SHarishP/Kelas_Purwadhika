// import { useState } from 'react' // Comment to make it Local State in local.tsx
// import Local from './localState/local'
// import State from './localState/state'
import LocalStorage from './localStorage/localStorage'
import './App.css'
import SessionStorage from './sessionStorage/sessionStorage';
import Cookies from './cookies/cookies';
import { useCookies } from 'react-cookie';

function App() {
  // const [count, setCount] = useState<number>(0); // Comment to make it Local State in local.tsx

  // Mengambil data dari Local Storage
  const user = localStorage.getItem("user");

  // Mengambil data dari Session Storage
  const token = sessionStorage.getItem("token");

  // Mengambil data dari cookies
  const [cookies] = useCookies(["nama"])

  return (
    <>
    {user}
    <LocalStorage />
    {token}
    <SessionStorage />
    {cookies?.nama}
    <Cookies />
      {/* <Local count={count}/>
      <State count={count}/> */}
    </>
  )
}

export default App

/* 
  Pembahasan Local State
  Bisa kita lihat Komponen 'Local' dan 'State' dibungkus pada Komponen 'App'. Pada Komponen 'Local' kita mempunyai state "const [count, setCount] = useState<number>(0);"
  (cek local.tsx). Karena state tersebut merupakan local state pada 'local.tsx', maka kita tidak bisa memanggilnya di 'State.tsx'
*/

/* 
  Pembahasan Global State, 
  Jika kita ingin menggunakan state "const [count, setCount] = useState<number>(0);" disemua komponen atau tidak hanya di local.tsx saja,
  Maka kita harus menghapusnya dari local.tsx dan memasukkannya di Parent Komponennya, yaitu 'App.tsx', dan perlu menambahkan props pada <Local> dan <State>
  
  Kekurangan dari global komponen adalah :
  Jika kita mempunyai 10 komponen, sedangkan yang menggunakan state yang sama hanya 2 komponen, maka hal itu akan wasting.
  Maka dari itu digunakan REDUX
*/