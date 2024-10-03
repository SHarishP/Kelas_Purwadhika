// Penggunaan Custom HOOKS
import { useState } from "react";

/* 
    Jika ingin membuat custom hook, nama komponen harus diawali dengan kata 'use'
    Untuk mengetahui bahwa komponen tersebut merupakan sebuah hooks.

    Kita bisa gunakan di semua tempat, hanya perlu melakukan import
*/
function useCounter(val: number, step: number) {
    const [counts, setCount] = useState<number>(val);

    function increment() {
        setCount(counts + step);
    }

    function decrement() {
        setCount(counts - step);
    }
    return [counts, increment, decrement] as const;
    /* 
        as const merupakan 'alias' supaya read-only dan tidak bisa diupdate, tetapi bisa dipakai
    */
};

export default useCounter;