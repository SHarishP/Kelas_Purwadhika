import { createSlice } from "@reduxjs/toolkit";
/* 
    createSlice merupakan sebuah function untuk membantu membuat action dan action type nya.
    Karena kita harus melempar sebuah action untuk menggunakan redux.
    Untuk menyimpan state nya, kita harus men dispatch sebuah action
*/

/* 
    Disini kita akan membuat redux untuk menambah dan mengurangi angka
*/

export interface ICount {
  value: number;
}
/* 
    ICount berfungsi untuk memberi tahu tipe data dari "state" nya
*/

interface IPayload {
  payload: number;
}
/* 
    payload untuk data yang akan dikirim
*/

const initialState = {
  value: 0,
};
/* 
    initialState merupakan data pertama,
    disini kita tidak perlu mendeclate tipe data dan menggunakan ICount, karena nanti akan berhubunngan dengan "state"nya
*/

/* 
    Kemdian, kita membuat function untuk dapat menggunakan "createSlice" 
    "createSlice" membutuhkan object yang berisi {name, nilai awal dari state nya, dan reducer}
    "name" berfungsi sebagai pengenal,
    "reducer" berfungsi sebagai pengubah statenya, merupakan function yang mempunyai custom logic
*/
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  /* 
    Jika kita tidak mau membuat object diatas, kita bisa menuliskan:
    initialState = {value: 0}
  */
  reducers: {
    increment: (state: ICount) => {
      state.value += 1;
      /* 
            "state.value" ini mengambil nilai dari initialState, dimana initialState merupakan sebuah object "state"
        */
    },
    decrement: (state: ICount) => {
      state.value -= 1;
      /* 
            "state.value" ini mengambil nilai dari initialState, dimana initialState merupakan sebuah object "state"
        */
    },
    incrementByAmount: (state: ICount, action: IPayload) => {
      state.value += action.payload;
      /* 
            "state.value" ini mengambil nilai dari initialState, dimana initialState merupakan sebuah object "state"
        */
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
/* 
    Untuk dapat menggunakan reducernya, kita perlu melakukan export diatas.
    Jadi disini, kita mengesport function yang mempunyai custom logic kita
    Note:
    Jika kita ingin memanggil redux, kita perlu dispatch sebuah action
    Jadi untuk menggunakan redux, kita perlu 2 hal:
        1. Export Reducer, yang nantinya akan disimpan di "store"
        2. Export actions nya
*/

export default counterSlice.reducer;

/* 
    increment, decrement, incrementByAmout merupakan custom slice dari REDUX

    counterSlice.reducer digunakan untuk penyimpanan REDUX nya

    export default hanya boleh satu
*/

/* 
    Note:
    Penggunaan useReducer lebih disarankan apabila kita memiliki banyak state dan di dalam state tersebut 
    terdapat banyak kompleks logic
*/
