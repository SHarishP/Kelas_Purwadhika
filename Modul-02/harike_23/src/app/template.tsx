"use client";
import { useState } from "react";
import useCounterStore from "@/stores/counterStore";

export default function Template({ children }: { children: React.ReactNode }) {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div className=" bg-violet-300">
      <div>{count}</div>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
      <button
        onClick={() => {
          increment;
        }}
      >
        Increment
      </button>
      {/* <button onClick={() => setCount(count - 1)}>Decrement</button> */}
      <button
        onClick={() => {
          decrement;
        }}
      >
        Decrement
      </button>
      {children}
    </div>
  );
}

/* 
    Template.tsx bisa dijadikan client side rendering supaya kita bisa memakai hook, dimana untuk mengambil value dari client

    Setelah kita membuat dua page (Home dan About-Us), bisa dilihat bahwa useState tetap ada, tetapi apabila kita melakukan operasi 
    di salah satu page (misal di Home), kemudian kita pindah ke page yang lain (About-Us), dan kembali lagi ke ke Page awal (Home), 
    maka nilai dari state akan kembali ke awal
*/
