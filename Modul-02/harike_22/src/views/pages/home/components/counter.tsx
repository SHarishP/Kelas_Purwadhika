"use client"; // String ini digunakan untuk membuat komponen ini di render pada client side, sehingga kita bisa menggunakan hooks

import { count } from "console";
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
}
