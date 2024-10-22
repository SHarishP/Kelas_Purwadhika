import { useSelector, useDispatch } from "react-redux";
/* 
    Jika kita ingin menggunakan Redux, kita perlu menggunakan Hooks dari React Redux
    useSelector berfungsi untuk memanggil value dan step dari Store
    useDispatch berfungsi untuk memanggil action kita
*/

import {
  ICount,
  increment,
  decrement,
  incrementByAmount,
} from "../redux/slice/counter";
/* 
    Kita perlu import tipe data (karena menggunakan typescript) dan reducer kita dari count.ts
*/

import { useState } from "react";

function ReactRedux() {
  const [input, setInput] = useState<number>(0);
  const count = useSelector(
    (state: { counter: ICount }) => state.counter.value
  );
  /* 
    (state: { counter: ICount }), maksud dari code berikut adalah kita memanggil state yang mempunyai tipe data ICount
  */

  const dispatch = useDispatch();
  /* Kita perlu memasang useDispatch */

  return (
    <div>
      <div>
        <h2>{count}</h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <input
          type="number"
          onChange={(e) => setInput(Number(e.target.value))}
        />
        <button onClick={() => dispatch(incrementByAmount(input))}>
          Increment by Amount
        </button>
      </div>
    </div>
  );
}

export default ReactRedux;

/* 
    pada <button>, merupakan step kita untuk mendispatch action, 
    kemudian kita perlu menggunakan useSelector untuk memanggil redux
*/

/* 
    Membuat dispatch incrementByAmount
    1. import { useState } from "react";
    2. Buat variabel const [input, setInput] = useState<number>(0);
    3. Buat <input type="number" onChange={(e) => setInput(Number(e.target.value))} />
    4. Buat <button onClick={() => dispatch(incrementByAmount(input))}>Increment by Amount</button> 
*/
