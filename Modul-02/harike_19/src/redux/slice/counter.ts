import { createSlice } from "@reduxjs/toolkit";
/* 
    createSlice merupakan sebuah function untuk membantu membuat action dan action type nya.
    Karena kita harus melempar sebuah action untuk menggunakan redux.
    Untuk menyimpan state nya, kita harus men dispatch sebuah action
*/
export interface ICount {
    value: number;
}
/* 
    ICount berfungsi sebagai initial state
*/

interface IPayload {
    payload: number;
}
/* 
    payload untuk data yang akan dikirim
*/

const initialState = {
    value: 0,
}
/* 
    initialState untuk value data pertama
*/

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state: ICount) => {
            state.value += 1;
        },
        decrement: (state: ICount) => {
            state.value -= 1;
        },
        incrementByAmount: (state: ICount, action: IPayload) => {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions; //Kita perlu export karena kita ingin pakai ditempat lain

export default counterSlice.reducer;

/* 
    increment, decrement, incrementByAmout merupakan custom slice dari REDUX

    counterSlice.reducer digunakan untuk penyimpanan REDUX nya

    export default hanya boleh satu
*/