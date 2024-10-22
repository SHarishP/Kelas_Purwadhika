import { configureStore } from "@reduxjs/toolkit";
/* 
    "configureStore" adalah tools supaya kita bisa menggunakan reducer di dalam store Redux
*/

import counter from "./slice/counter";
/* 
    "counter" ini adalah nama Slice kita di dalam file counter.ts
    INGAT :
    export const counterSlice = createSlice({
        name: "counter", -> iniklah yang kita import pada "import counter from "./slice/counter";"
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
*/

export const store = configureStore({
  reducer: {
    counter,
    /* 
        Jika kita punya banyak reducer, tulis semua nama reducer kita disini
    */
  },
});

/* Pemanggilan store di main.tsx */
